import { NextResponse } from "next/server";
import { getSubmission } from "@/lib/db";
import { buildResultPdf } from "@/lib/resultPdf";

export const runtime = "nodejs";

/**
 * Το PDF χτίζεται από τη βάση, όχι από ό,τι στέλνει ο browser — ώστε να μην
 * μπορεί κανείς να κατεβάσει έγγραφο με νούμερα της επιλογής του.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const submission = await getSubmission(id);
    if (!submission) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    const url = new URL(request.url);
    const locale = url.searchParams.get("locale") === "en" ? "en" : "el";
    const permalink = `${url.origin}/results/${id}`;

    const pdf = await buildResultPdf(submission, locale, permalink);
    const filename = `cs-career-path-${id}.pdf`;

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        // Το αποτέλεσμα δεν αλλάζει ποτέ: το ίδιο id δίνει πάντα το ίδιο PDF.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("[api/results/pdf]", error);
    return NextResponse.json({ error: "pdf_failed" }, { status: 500 });
  }
}
