import { NextResponse } from "next/server";
import { ADMIN_COOKIE, checkPassword, cookieOptions, createToken } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { password?: string };
  const password = typeof body.password === "string" ? body.password : "";

  try {
    if (!checkPassword(password)) {
      // Μικρή καθυστέρηση ώστε να μην είναι εύκολο το brute force.
      await new Promise((resolve) => setTimeout(resolve, 400));
      return NextResponse.json({ error: "wrong_password" }, { status: 401 });
    }
  } catch (error) {
    console.error("[api/admin/login]", error);
    return NextResponse.json({ error: "misconfigured" }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createToken(), cookieOptions);
  return response;
}
