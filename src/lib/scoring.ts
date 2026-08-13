import { CAREER_IDS, type CareerId } from "./careers";
import { QUESTIONS, QUESTION_BY_ID } from "./questions";
import { TRAIT_IDS, type TraitId } from "./traits";

/** { q01: "a", q02: "c", … } */
export type Answers = Record<string, string>;

export type CareerScore = {
  careerId: CareerId;
  /** Ακατέργαστο άθροισμα βαρών. Raw sum of weights. */
  raw: number;
  /** 0-100, κανονικοποιημένο. Normalised match percentage. */
  match: number;
};

export type ScoreResult = {
  ranked: CareerScore[];
  traits: Record<TraitId, number>; // 0-100
  answeredCount: number;
};

/**
 * Το θεωρητικό μέγιστο κάθε καριέρας: για κάθε ερώτηση, το μεγαλύτερο βάρος
 * που μπορεί να πάρει αυτή η καριέρα από οποιαδήποτε επιλογή. Το χρησιμοποιούμε
 * ως παρονομαστή, ώστε καριέρες που εμφανίζονται σε λίγες ερωτήσεις να μην
 * αδικούνται.
 *
 * Each career's theoretical maximum: per question, the highest weight that
 * career could receive from any option. Used as the denominator so careers
 * that appear in fewer questions aren't penalised.
 */
const CAREER_MAX: Record<CareerId, number> = (() => {
  const max = Object.fromEntries(CAREER_IDS.map((id) => [id, 0])) as Record<CareerId, number>;
  for (const q of QUESTIONS) {
    for (const careerId of CAREER_IDS) {
      const best = Math.max(0, ...q.options.map((o) => o.c[careerId] ?? 0));
      max[careerId] += best;
    }
  }
  return max;
})();

const TRAIT_MAX: Record<TraitId, number> = (() => {
  const max = Object.fromEntries(TRAIT_IDS.map((id) => [id, 0])) as Record<TraitId, number>;
  for (const q of QUESTIONS) {
    for (const traitId of TRAIT_IDS) {
      const best = Math.max(0, ...q.options.map((o) => o.t[traitId] ?? 0));
      max[traitId] += best;
    }
  }
  return max;
})();

export function score(answers: Answers): ScoreResult {
  const rawCareers = Object.fromEntries(CAREER_IDS.map((id) => [id, 0])) as Record<CareerId, number>;
  const rawTraits = Object.fromEntries(TRAIT_IDS.map((id) => [id, 0])) as Record<TraitId, number>;
  let answeredCount = 0;

  for (const [questionId, optionId] of Object.entries(answers)) {
    const question = QUESTION_BY_ID[questionId];
    if (!question) continue;
    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;

    answeredCount++;
    for (const [careerId, weight] of Object.entries(option.c)) {
      rawCareers[careerId as CareerId] += weight ?? 0;
    }
    for (const [traitId, weight] of Object.entries(option.t)) {
      rawTraits[traitId as TraitId] += weight ?? 0;
    }
  }

  const ranked: CareerScore[] = CAREER_IDS.map((careerId) => {
    const denominator = CAREER_MAX[careerId] || 1;
    return {
      careerId,
      raw: rawCareers[careerId],
      match: clampPercent((rawCareers[careerId] / denominator) * 100),
    };
  });

  // Απλώνουμε λίγο την κλίμακα: μια «τέλεια» απάντηση σε κάθε ερώτηση είναι
  // πρακτικά αδύνατη, οπότε το top score σπάνια ξεπερνά το 45% χωρίς αυτό.
  // Stretch the scale: answering "perfectly" for one career on all 50 questions
  // is practically impossible, so top scores rarely pass 45% without this.
  const highest = Math.max(...ranked.map((r) => r.match), 1);
  const stretch = Math.min(95 / highest, 2.2);
  for (const r of ranked) {
    r.match = clampPercent(r.match * stretch);
  }

  ranked.sort((a, b) => b.match - a.match || a.careerId.localeCompare(b.careerId));

  const traits = Object.fromEntries(
    TRAIT_IDS.map((traitId) => [
      traitId,
      clampPercent((rawTraits[traitId] / (TRAIT_MAX[traitId] || 1)) * 100 * 2.2),
    ]),
  ) as Record<TraitId, number>;

  return { ranked, traits, answeredCount };
}

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
