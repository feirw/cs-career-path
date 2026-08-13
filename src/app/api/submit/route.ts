import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { insertSubmission } from "@/lib/db";
import { QUESTION_BY_ID, TOTAL_QUESTIONS } from "@/lib/questions";
import { score, type Answers } from "@/lib/scoring";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      answers?: unknown;
      locale?: string;
      durationMs?: unknown;
    };

    const answers = sanitiseAnswers(body.answers);
    if (Object.keys(answers).length !== TOTAL_QUESTIONS) {
      return NextResponse.json(
        { error: "incomplete", expected: TOTAL_QUESTIONS, got: Object.keys(answers).length },
        { status: 400 },
      );
    }

    const locale = body.locale === "en" ? "en" : "el";
    const durationMs =
      typeof body.durationMs === "number" && body.durationMs > 0 && body.durationMs < 86_400_000
        ? Math.round(body.durationMs)
        : 0;

    const result = score(answers);
    const top = result.ranked[0];
    const id = crypto.randomBytes(9).toString("base64url");

    insertSubmission({
      id,
      createdAt: Date.now(),
      locale,
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

/** Κρατάει μόνο έγκυρα ζεύγη ερώτησης/επιλογής — τίποτα άλλο δεν αποθηκεύεται. */
function sanitiseAnswers(input: unknown): Answers {
  const out: Answers = {};
  if (!input || typeof input !== "object") return out;
  for (const [questionId, optionId] of Object.entries(input as Record<string, unknown>)) {
    const question = QUESTION_BY_ID[questionId];
    if (!question || typeof optionId !== "string") continue;
    if (!question.options.some((o) => o.id === optionId)) continue;
    out[questionId] = optionId;
  }
  return out;
}
