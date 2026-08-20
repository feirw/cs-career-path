import { NextResponse, type NextRequest } from "next/server";
import {
  ADMIN_COOKIE,
  CSRF_COOKIE,
  checkPassword,
  cookieOptions,
  createToken,
  generateCSRFToken,
  isRateLimited,
  recordLoginAttempt,
  csrfCookieOptions,
} from "@/lib/auth";
import { headers } from "next/headers";

export const runtime = "nodejs";

async function getClientIp(request: NextRequest): Promise<string> {
  const headersList = await headers();
  return headersList.get("x-forwarded-for")?.split(",")[0].trim() ||
         headersList.get("x-real-ip") ||
         "unknown";
}

export async function POST(request: NextRequest) {
  const ip = await getClientIp(request);

  // Rate limiting check
  if (isRateLimited(ip)) {
    console.warn(`[SECURITY] Rate limit exceeded for IP: ${ip}`);
    return NextResponse.json(
      { error: "too_many_attempts", retryAfter: 900 },
      { status: 429, headers: { "Retry-After": "900" } }
    );
  }

  const body = (await request.json().catch(() => ({}))) as { password?: string; csrf?: string };
  const password = typeof body.password === "string" ? body.password : "";
  const csrfToken = typeof body.csrf === "string" ? body.csrf : "";

  // Validate CSRF token
  if (!csrfToken) {
    recordLoginAttempt(ip, false);
    console.warn(`[SECURITY] Missing CSRF token from IP: ${ip}`);
    return NextResponse.json({ error: "missing_csrf" }, { status: 403 });
  }

  try {
    const passwordValid = checkPassword(password);

    if (!passwordValid) {
      recordLoginAttempt(ip, false);
      // Intentional delay to prevent timing attacks
      await new Promise((resolve) => setTimeout(resolve, 500));
      return NextResponse.json({ error: "wrong_password" }, { status: 401 });
    }

    recordLoginAttempt(ip, true);
  } catch (error) {
    console.error("[api/admin/login]", error);
    recordLoginAttempt(ip, false);
    return NextResponse.json({ error: "misconfigured" }, { status: 500 });
  }

  // Create response with session cookie and new CSRF token
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createToken(), cookieOptions);

  // Set new CSRF token
  const newCSRFToken = generateCSRFToken();
  response.cookies.set(CSRF_COOKIE, newCSRFToken, csrfCookieOptions);

  return response;
}

export async function GET() {
  // Generate initial CSRF token for login form
  const csrfToken = generateCSRFToken();
  const response = NextResponse.json({ csrfToken });
  response.cookies.set(CSRF_COOKIE, csrfToken, csrfCookieOptions);
  return response;
}
