import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { getStats } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }

  const url = new URL(request.url);
  const now = Date.now();
  const from = numberParam(url.searchParams.get("from")) ?? now - 30 * 24 * 60 * 60 * 1000;
  const to = numberParam(url.searchParams.get("to")) ?? now;

  try {
    return NextResponse.json(getStats({ from, to }));
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
