import { section1 } from "./section1";
import { section2 } from "./section2";
import { SHORT_SECTIONS } from "./short";
import type { Question, Section } from "./types";

export type { Question, Section, Option, CareerWeights, TraitWeights } from "./types";

/**
 * Δύο ξεχωριστά τεστ, με δικές τους ερωτήσεις το καθένα.
 *
 * - "short": 20 δικές του ερωτήσεις (s01…s20) γρήγορου ενστίκτου, 2-3 λεπτά,
 *   υποτυπώδες αποτέλεσμα.
 * - "full": 50 ερωτήσεις σε σενάρια (q01…q50) που ξεκαθαρίζουν την κατεύθυνση.
 *
 * Two separate tests with their own question banks: a 2-3 minute gut-reaction
 * pass and the full scenario-based 50-question deep dive.
 */
export type TestMode = "short" | "full";

export const TEST_MODES = ["short", "full"] as const;

export function parseMode(value: unknown): TestMode {
  return value === "short" ? "short" : "full";
}

export const FULL_SECTIONS: Section[] = [
  section1,
  section2,
];

export { SHORT_SECTIONS };

/** Οι 50 ερωτήσεις του πλήρους τεστ. */
export const ALL_QUESTIONS: Question[] = FULL_SECTIONS.flatMap((s) => s.questions);

/** Οι 20 ερωτήσεις του σύντομου τεστ. */
export const SHORT_QUESTIONS: Question[] = SHORT_SECTIONS.flatMap((s) => s.questions);

/** Και οι δύο τράπεζες μαζί — το χρειάζεται το /admin και ο έλεγχος υποβολών. */
export const EVERY_QUESTION: Question[] = [...SHORT_QUESTIONS, ...ALL_QUESTIONS];

export const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(
  EVERY_QUESTION.map((q) => [q.id, q]),
);

if (Object.keys(QUESTION_BY_ID).length !== EVERY_QUESTION.length) {
  throw new Error("Δύο ερωτήσεις μοιράζονται το ίδιο id / duplicate question id");
}

export function sectionsFor(mode: TestMode): Section[] {
  return mode === "short" ? SHORT_SECTIONS : FULL_SECTIONS;
}

export function questionsFor(mode: TestMode): Question[] {
  return mode === "short" ? SHORT_QUESTIONS : ALL_QUESTIONS;
}

export function questionCount(mode: TestMode): number {
  return questionsFor(mode).length;
}

/** Εκτίμηση διάρκειας: το σύντομο απαντιέται με το ένστικτο, το πλήρες θέλει σκέψη. */
export function estimatedMinutes(mode: TestMode): number {
  return mode === "short" ? 3 : 10;
}

export const SHORT_TOTAL = questionCount("short");
export const FULL_TOTAL = questionCount("full");
