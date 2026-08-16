import { SearchX } from "lucide-react";
import Link from "next/link";
import { ResultView } from "@/components/ResultView";
import { getSubmission } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const submission = getSubmission(id);

  if (!submission) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-5 text-center">
        <span className="grid size-12 place-items-center rounded-full border border-[var(--rule)] bg-[var(--panel)] text-[var(--ink-3)]">
          <SearchX aria-hidden strokeWidth={1.75} className="size-5" />
        </span>
        <h1 className="mt-6 text-xl font-bold tracking-tight">
          Το αποτέλεσμα δεν βρέθηκε / Result not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-3)]">
          Ίσως το link είναι λάθος ή το αποτέλεσμα διαγράφηκε.
          <br />
          The link may be wrong, or the result was deleted.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-[var(--accent-strong)] active:scale-[0.98]"
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
      mode={submission.mode}
    />
  );
}
