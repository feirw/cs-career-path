import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { recordStart } from "@/lib/db";
import { parseMode } from "@/lib/questions";

export const runtime = "nodejs";

/**
 * Καταγράφει ότι κάποιος ξεκίνησε το τεστ (και ποιο από τα δύο), ώστε το /admin
 * να δείχνει ποσοστό ολοκλήρωσης ανά τεστ. Τίποτα που να ταυτοποιεί τον χρήστη.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { locale?: string; mode?: string };
    const locale = body.locale === "en" ? "en" : "el";
    const id = crypto.randomBytes(9).toString("base64url");
    recordStart(id, locale, parseMode(body.mode));
    return NextResponse.json({ id });
  } catch (error) {
    console.error("[api/start]", error);
    return NextResponse.json({ error: "start_failed" }, { status: 500 });
  }
}
