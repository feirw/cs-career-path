import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { insertSubmission } from "@/lib/db";
import { parseMode, questionsFor, QUESTION_BY_ID, type TestMode } from "@/lib/questions";
import { score, type Answers } from "@/lib/scoring";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      answers?: unknown;
      locale?: string;
      mode?: unknown;
      durationMs?: unknown;
    };

    const mode = parseMode(body.mode);
    const answers = sanitiseAnswers(body.answers, mode);
    const expected = questionsFor(mode).length;
    if (Object.keys(answers).length !== expected) {
      return NextResponse.json(
        { error: "incomplete", mode, expected, got: Object.keys(answers).length },
        { status: 400 },
      );
    }

    const locale = body.locale === "en" ? "en" : "el";
    const durationMs =
      typeof body.durationMs === "number" && body.durationMs > 0 && body.durationMs < 86_400_000
        ? Math.round(body.durationMs)
        : 0;

    const result = score(answers, mode);
    const top = result.ranked[0];
    const id = crypto.randomBytes(9).toString("base64url");

    await insertSubmission({
      id,
      createdAt: Date.now(),
      locale,
      mode,
      durationMs,
      topCareer: top.careerId,
      topMatch: top.match,
      scores: result.ranked,
      traits: result.traits,
      answers,
    });

    return NextResponse.json({ id });
  } catch (error) {
    console.error("[api/submit]", error);
    return NextResponse.json({ error: "submit_failed" }, { status: 500 });
  }
}

/**
 * Κρατάει μόνο έγκυρα ζεύγη ερώτησης/επιλογής που ανήκουν στο συγκεκριμένο
 * τεστ — τίποτα άλλο δεν αποθηκεύεται και δεν βαθμολογείται.
 */
function sanitiseAnswers(input: unknown, mode: TestMode): Answers {
  const out: Answers = {};
  if (!input || typeof input !== "object") return out;
  const allowed = new Set(questionsFor(mode).map((q) => q.id));
  for (const [questionId, optionId] of Object.entries(input as Record<string, unknown>)) {
    if (!allowed.has(questionId)) continue;
    const question = QUESTION_BY_ID[questionId];
    if (!question || typeof optionId !== "string") continue;
    if (!question.options.some((o) => o.id === optionId)) continue;
    out[questionId] = optionId;
  }
  return out;
}
