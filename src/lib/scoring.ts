import { CAREER_IDS, type CareerId } from "./careers";
import { QUESTION_BY_ID, questionsFor, type Question, type TestMode } from "./questions";
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
  mode: TestMode;
};

type Maxima = {
  careers: Record<CareerId, number>;
  traits: Record<TraitId, number>;
  /** Τι θα μάζευε κάποιος που απαντάει εντελώς στην τύχη. */
  careerBaseline: Record<CareerId, number>;
  traitBaseline: Record<TraitId, number>;
};

/**
 * Το θεωρητικό μέγιστο κάθε καριέρας: για κάθε ερώτηση, το μεγαλύτερο βάρος
 * που μπορεί να πάρει αυτή η καριέρα από οποιαδήποτε επιλογή. Το χρησιμοποιούμε
 * ως παρονομαστή, ώστε καριέρες που εμφανίζονται σε λίγες ερωτήσεις να μην
 * αδικούνται.
 *
 * Υπολογίζεται ξεχωριστά για κάθε τεστ: το σύντομο έχει 20 ερωτήσεις, οπότε
 * δεν μπορεί να μοιράζεται παρονομαστή με το πλήρες.
 *
 * Each career's theoretical maximum, computed per test mode — the 20-question
 * test cannot share a denominator with the 100-question one.
 */
function computeMaxima(questions: Question[]): Maxima {
  const careers = Object.fromEntries(CAREER_IDS.map((id) => [id, 0])) as Record<CareerId, number>;
  const traits = Object.fromEntries(TRAIT_IDS.map((id) => [id, 0])) as Record<TraitId, number>;
  const careerBaseline = Object.fromEntries(CAREER_IDS.map((id) => [id, 0])) as Record<
    CareerId,
    number
  >;
  const traitBaseline = Object.fromEntries(TRAIT_IDS.map((id) => [id, 0])) as Record<
    TraitId,
    number
  >;

  for (const q of questions) {
    for (const careerId of CAREER_IDS) {
      const weights = q.options.map((o) => o.c[careerId] ?? 0);
      careers[careerId] += Math.max(0, ...weights);
      careerBaseline[careerId] += weights.reduce((a, b) => a + b, 0) / weights.length;
    }
    for (const traitId of TRAIT_IDS) {
      const weights = q.options.map((o) => o.t[traitId] ?? 0);
      traits[traitId] += Math.max(0, ...weights);
      traitBaseline[traitId] += weights.reduce((a, b) => a + b, 0) / weights.length;
    }
  }
  return { careers, traits, careerBaseline, traitBaseline };
}

const MAXIMA: Record<TestMode, Maxima> = {
  short: computeMaxima(questionsFor("short")),
  full: computeMaxima(questionsFor("full")),
};

export function score(answers: Answers, mode: TestMode): ScoreResult {
  const maxima = MAXIMA[mode];
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

  // Μετράμε πόσο πάνω από την τύχη είσαι, όχι το σκέτο άθροισμα: αλλιώς οι
  // καριέρες που εμφανίζονται σε πολλές ερωτήσεις μαζεύουν πόντους ακόμα κι από
  // κάποιον που απαντάει τυχαία.
  // We measure how far above chance you scored, not the raw sum: otherwise
  // careers that appear in many questions collect points even from random answers.
  const ranked: CareerScore[] = CAREER_IDS.map((careerId) => {
    const baseline = maxima.careerBaseline[careerId];
    const headroom = maxima.careers[careerId] - baseline;
    const aboveChance = rawCareers[careerId] - baseline;
    return {
      careerId,
      raw: rawCareers[careerId],
      match: clampPercent(headroom > 0 ? (aboveChance / headroom) * 100 : 0),
    };
  });

  // Απλώνουμε λίγο την κλίμακα: το να απαντήσεις «τέλεια» για μία καριέρα σε
  // κάθε ερώτηση είναι πρακτικά αδύνατο, οπότε το top score μένει χαμηλά χωρίς αυτό.
  // Stretch the scale: answering "perfectly" for one career on every question
  // is practically impossible, so top scores stay low without this.
  const highest = Math.max(...ranked.map((r) => r.match), 1);
  const stretch = Math.min(95 / highest, 1.8);
  for (const r of ranked) {
    r.match = clampPercent(r.match * stretch);
  }

  ranked.sort((a, b) => b.match - a.match || a.careerId.localeCompare(b.careerId));

  const traits = Object.fromEntries(
    TRAIT_IDS.map((traitId) => {
      const baseline = maxima.traitBaseline[traitId];
      const headroom = maxima.traits[traitId] - baseline;
      const aboveChance = rawTraits[traitId] - baseline;
      // 50% = ακριβώς στη μέση, δηλαδή όση σημασία δίνει και ο μέσος όρος.
      return [traitId, clampPercent(50 + (headroom > 0 ? (aboveChance / headroom) * 50 : 0) * 1.6)];
    }),
  ) as Record<TraitId, number>;

  return { ranked, traits, answeredCount, mode };
}

/**
 * Πόσο ξεκάθαρο είναι το αποτέλεσμα: μεγάλη διαφορά πρώτης-δεύτερης καριέρας
 * σημαίνει καθαρή κατεύθυνση, μικρή σημαίνει ότι παίζεσαι ανάμεσα σε δύο.
 */
export function separation(ranked: CareerScore[]): number {
  if (ranked.length < 2) return 0;
  return ranked[0].match - ranked[1].match;
}

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
