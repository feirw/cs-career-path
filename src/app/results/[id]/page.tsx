import Link from "next/link";
import { ResultView } from "@/components/ResultView";
import { getSubmission } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const submission = getSubmission(id);

  if (!submission) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-2xl font-bold">Το αποτέλεσμα δεν βρέθηκε / Result not found</h1>
        <p className="mt-3 text-[var(--text-muted)]">
          Ίσως το link είναι λάθος ή το αποτέλεσμα διαγράφηκε.
          <br />
          The link may be wrong, or the result was deleted.
        </p>
        <Link
          href="/test"
          className="mt-8 inline-block rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white"
        >
          Κάνε το τεστ / Take the test
        </Link>
      </main>
    );
  }

  return (
    <ResultView
      scores={submission.scores}
      traits={submission.traits}
      createdAt={submission.createdAt}
    />
  );
}
