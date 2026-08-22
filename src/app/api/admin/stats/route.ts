import { NextResponse, type NextRequest } from "next/server";
import { isAdmin, verifyCSRFToken } from "@/lib/auth";
import { getStats } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }

  // Verify CSRF token from headers
  const csrfToken = request.headers.get("x-csrf-token");
  if (!csrfToken || !(await verifyCSRFToken(csrfToken))) {
    console.warn("[SECURITY] Invalid CSRF token for stats request");
    return NextResponse.json({ error: "invalid_csrf" }, { status: 403 });
  }

  const url = new URL(request.url);
  const now = Date.now();
  const from = numberParam(url.searchParams.get("from")) ?? now - 30 * 24 * 60 * 60 * 1000;
  const to = numberParam(url.searchParams.get("to")) ?? now;

  // Validate date parameters
  if (!Number.isFinite(from) || !Number.isFinite(to) || from > to) {
    return NextResponse.json({ error: "invalid_date_range" }, { status: 400 });
  }

  try {
    return NextResponse.json(await getStats({ from, to }));
  } catch (error) {
    console.error("[api/admin/stats]", error);
    return NextResponse.json({ error: "stats_failed" }, { status: 500 });
  }
}

function numberParam(value: string | null): number | null {
  if (!value) return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}
