import { NextResponse } from "next/server";
import { getCommunityInsights } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Δημόσιο, χωρίς auth: επιστρέφει μόνο συγκεντρωτικά νούμερα — πόσες φορές
 * βγήκε πρώτη κάθε καριέρα. Καμία υποβολή, καμία απάντηση, κανένα id.
 *
 * Το `s-maxage` σημαίνει ότι η βάση ρωτιέται μία φορά ανά πέντε λεπτά κι όχι
 * σε κάθε άνοιγμα αποτελέσματος· το `stale-while-revalidate` κρατάει τη
 * σελίδα γεμάτη όσο ανανεώνεται στο παρασκήνιο.
 */
export async function GET() {
  try {
    return NextResponse.json(await getCommunityInsights(5), {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
    });
  } catch (error) {
    console.error("[api/community]", error);
    return NextResponse.json({ error: "community_failed" }, { status: 500 });
  }
}
