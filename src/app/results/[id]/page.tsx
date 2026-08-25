import { ResultView } from "@/components/ResultView";
import { ResultMissing } from "@/components/ResultMissing";
import { getSubmission } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const submission = await getSubmission(id);

  if (!submission) {
    return <ResultMissing />;
  }

  return (
    <ResultView
      id={submission.id}
      scores={submission.scores}
      traits={submission.traits}
      createdAt={submission.createdAt}
      mode={submission.mode}
    />
  );
}
