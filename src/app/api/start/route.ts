import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { recordStart } from "@/lib/db";

export const runtime = "nodejs";

/**
 * Καταγράφει ότι κάποιος ξεκίνησε το τεστ, ώστε το /admin να μπορεί να δείξει
 * ποσοστό ολοκλήρωσης. Δεν αποθηκεύεται τίποτα που να ταυτοποιεί τον χρήστη.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { locale?: string };
    const locale = body.locale === "en" ? "en" : "el";
    const id = crypto.randomBytes(9).toString("base64url");
    recordStart(id, locale);
    return NextResponse.json({ id });
  } catch (error) {
    console.error("[api/start]", error);
    return NextResponse.json({ error: "start_failed" }, { status: 500 });
  }
}
