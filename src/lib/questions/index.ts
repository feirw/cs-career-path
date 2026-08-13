import { section1 } from "./section1";
import { section2 } from "./section2";
import { section3 } from "./section3";
import { section4 } from "./section4";
import { section5 } from "./section5";
import type { Question, Section } from "./types";

export type { Question, Section, Option, CareerWeights, TraitWeights, QuestionKind } from "./types";

export const SECTIONS: Section[] = [section1, section2, section3, section4, section5];

export const QUESTIONS: Question[] = SECTIONS.flatMap((s) => s.questions);

export const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(
  QUESTIONS.map((q) => [q.id, q]),
);

export const TOTAL_QUESTIONS = QUESTIONS.length;

export const TECHNICAL_COUNT = QUESTIONS.filter((q) => q.kind === "technical").length;
export const PERSONALITY_COUNT = QUESTIONS.filter((q) => q.kind === "personality").length;
