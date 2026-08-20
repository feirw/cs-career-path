import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, CSRF_COOKIE, cookieOptions, csrfCookieOptions, verifyCSRFToken, isAdmin } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // Verify admin session
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }

  // Verify CSRF token
  const csrfToken = request.headers.get("x-csrf-token");
  if (!csrfToken || !(await verifyCSRFToken(csrfToken))) {
    console.warn("[SECURITY] Invalid CSRF token for logout request");
    return NextResponse.json({ error: "invalid_csrf" }, { status: 403 });
  }

  const response = NextResponse.json({ ok: true });
  // Clear both cookies
  response.cookies.set(ADMIN_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  response.cookies.set(CSRF_COOKIE, "", { ...csrfCookieOptions, maxAge: 0 });
  return response;
}
