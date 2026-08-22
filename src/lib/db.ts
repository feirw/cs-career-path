import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { CareerId } from "./careers";
import type { Locale } from "./i18n";
import type { TestMode } from "./questions";
import type { TraitId } from "./traits";
import type { CareerScore } from "./scoring";

/**
 * Supabase (Postgres). Ο λόγος που δεν κρατάμε αρχείο SQLite: σε serverless
 * hosting ο δίσκος είναι εφήμερος και ανά instance, οπότε και τα αποτελέσματα
 * και τα στατιστικά θα χάνονταν μεταξύ των requests.
 *
 * Τα scores/traits/answers είναι jsonb — αποθηκεύονται ως αντικείμενα, χωρίς
 * χειροκίνητο JSON.stringify.
 *
 * Ό,τι αποθηκεύεται είναι ανώνυμο: τυχαίο id, απαντήσεις, βαθμολογίες, χρόνος.
 * Καμία IP χρήστη, κανένα user-agent, κανένα cookie ταυτοποίησης.
 */

export type StoredSubmission = {
  id: string;
  createdAt: number;
  locale: Locale;
  /** "short" (20 ερωτήσεις) ή "full" (50). */
  mode: TestMode;
  durationMs: number;
  topCareer: CareerId;
  topMatch: number;
  scores: CareerScore[];
  traits: Record<TraitId, number>;
  answers: Record<string, string>;
};

let client: SupabaseClient | null = null;

function db(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  }

  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

type SubmissionRow = {
  id: string;
  created_at: number;
  locale: string;
  mode: string;
  duration_ms: number;
  top_career: string;
  top_match: number;
  scores: CareerScore[];
  traits: Record<TraitId, number>;
  answers: Record<string, string>;
};

export async function recordStart(id: string, locale: Locale, mode: TestMode): Promise<void> {
  const { error } = await db()
    .from("starts")
    .insert({ id, created_at: Date.now(), locale, mode });

  // Ένα χαμένο start χαλάει μόνο το ποσοστό ολοκλήρωσης — δεν εμποδίζουμε
  // τον χρήστη να ξεκινήσει το τεστ γι' αυτό.
  if (error) console.error("[db.recordStart]", error.message);
}

export async function insertSubmission(s: StoredSubmission): Promise<void> {
  const { error } = await db().from("submissions").insert({
    id: s.id,
    created_at: s.createdAt,
    locale: s.locale,
    mode: s.mode,
    duration_ms: s.durationMs,
    top_career: s.topCareer,
    top_match: s.topMatch,
    scores: s.scores,
    traits: s.traits,
    answers: s.answers,
  });

  if (error) throw new Error(`insertSubmission failed: ${error.message}`);
}

export async function getSubmission(id: string): Promise<StoredSubmission | null> {
  const { data, error } = await db()
    .from("submissions")
    .select("*")
    .eq("id", id)
    .maybeSingle<SubmissionRow>();

  if (error) throw new Error(`getSubmission failed: ${error.message}`);
  if (!data) return null;

  return {
    id: data.id,
    createdAt: Number(data.created_at),
    locale: data.locale as Locale,
    mode: data.mode === "short" ? "short" : "full",
    durationMs: Number(data.duration_ms),
    topCareer: data.top_career as CareerId,
    topMatch: Number(data.top_match),
    scores: data.scores,
    traits: data.traits,
    answers: data.answers,
  };
}

// ── Στατιστικά / Statistics ────────────────────────────────────────────────

export type Range = { from: number; to: number };

export type AdminStats = {
  range: Range;
  totals: {
    submissions: number;
    starts: number;
    completionRate: number; // 0-100
    medianDurationMin: number;
    allTimeSubmissions: number;
  };
  localeSplit: { locale: string; count: number }[];
  /** Πόσοι έκαναν το σύντομο και πόσοι το πλήρες τεστ. */
  modeSplit: { mode: string; submissions: number; starts: number; completionRate: number }[];
  topCareerDistribution: { careerId: string; count: number; share: number; avgMatch: number }[];
  /** Μέσο match ανά καριέρα σε όλες τις υποβολές, όχι μόνο όταν βγαίνει πρώτη. */
  avgMatchByCareer: { careerId: string; avgMatch: number }[];
  perDay: { day: string; count: number }[];
  answerDistribution: Record<string, Record<string, number>>; // questionId -> optionId -> count
};

export async function getStats(range: Range): Promise<AdminStats> {
  const supabase = db();
  const { from, to } = range;

  const [submissionsResult, startsResult, allTimeResult] = await Promise.all([
    supabase
      .from("submissions")
      .select("*")
      .gte("created_at", from)
      .lte("created_at", to)
      .order("created_at"),
    supabase.from("starts").select("mode").gte("created_at", from).lte("created_at", to),
    supabase.from("submissions").select("id", { count: "exact", head: true }),
  ]);

  if (submissionsResult.error) {
    throw new Error(`getStats failed: ${submissionsResult.error.message}`);
  }

  const submissions = (submissionsResult.data ?? []) as SubmissionRow[];
  const allTime = allTimeResult.count ?? 0;

  const startsByMode = new Map<string, number>();
  let starts = 0;
  // Ο πίνακας starts μπορεί να μη διαβαστεί χωρίς να χαλάσουν τα υπόλοιπα:
  // τότε το ποσοστό ολοκλήρωσης απλώς δείχνει 0 αντί να πέσει όλη η σελίδα.
  if (startsResult.error) {
    console.error("[db.getStats] starts:", startsResult.error.message);
  } else {
    for (const row of (startsResult.data ?? []) as { mode: string }[]) {
      startsByMode.set(row.mode, (startsByMode.get(row.mode) ?? 0) + 1);
      starts++;
    }
  }

  const localeCounts = new Map<string, number>();
  const modeCounts = new Map<string, number>();
  const topCounts = new Map<string, { count: number; matchSum: number }>();
  const matchSums = new Map<string, number>();
  const answerDistribution: Record<string, Record<string, number>> = {};
  const durations: number[] = [];
  const perDayMap = new Map<string, number>();

  for (const row of submissions) {
    localeCounts.set(row.locale, (localeCounts.get(row.locale) ?? 0) + 1);
    modeCounts.set(row.mode, (modeCounts.get(row.mode) ?? 0) + 1);

    const entry = topCounts.get(row.top_career) ?? { count: 0, matchSum: 0 };
    entry.count++;
    entry.matchSum += Number(row.top_match);
    topCounts.set(row.top_career, entry);

    for (const s of row.scores ?? []) {
      matchSums.set(s.careerId, (matchSums.get(s.careerId) ?? 0) + s.match);
    }

    for (const [questionId, optionId] of Object.entries(row.answers ?? {})) {
      answerDistribution[questionId] ??= {};
      answerDistribution[questionId][optionId] =
        (answerDistribution[questionId][optionId] ?? 0) + 1;
    }

    const duration = Number(row.duration_ms);
    if (duration > 0) durations.push(duration);

    const day = new Date(Number(row.created_at)).toISOString().slice(0, 10);
    perDayMap.set(day, (perDayMap.get(day) ?? 0) + 1);
  }

  const total = submissions.length || 1;

  return {
    range,
    totals: {
      submissions: submissions.length,
      starts,
      completionRate: completionRate(submissions.length, starts),
      medianDurationMin: median(durations) / 60000,
      allTimeSubmissions: allTime,
    },
    localeSplit: [...localeCounts.entries()]
      .map(([locale, count]) => ({ locale, count }))
      .sort((a, b) => b.count - a.count),
    modeSplit: ["short", "full"].map((mode) => {
      const modeSubmissions = modeCounts.get(mode) ?? 0;
      const modeStarts = startsByMode.get(mode) ?? 0;
      return {
        mode,
        submissions: modeSubmissions,
        starts: modeStarts,
        completionRate: completionRate(modeSubmissions, modeStarts),
      };
    }),
    topCareerDistribution: [...topCounts.entries()]
      .map(([careerId, v]) => ({
        careerId,
        count: v.count,
        share: Math.round((v.count / total) * 100),
        avgMatch: Math.round(v.matchSum / v.count),
      }))
      .sort((a, b) => b.count - a.count),
    avgMatchByCareer: [...matchSums.entries()]
      .map(([careerId, sum]) => ({ careerId, avgMatch: Math.round(sum / total) }))
      .sort((a, b) => b.avgMatch - a.avgMatch),
    perDay: fillDays(perDayMap, from, to),
    answerDistribution,
  };
}

/**
 * Υποβολές προς εκκινήσεις, σε ποσοστό. Οι υποβολές μπορεί να ξεπερνούν τις
 * εκκινήσεις — π.χ. υποβολές που έγιναν πριν αρχίσει να καταγράφεται ο πίνακας
 * starts — οπότε κόβουμε στο 100 αντί να δείχνουμε 900%.
 */
function completionRate(submissions: number, starts: number): number {
  if (starts <= 0) return 0;
  return Math.min(100, Math.round((submissions / starts) * 100));
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

/** Γεμίζει και τις κενές μέρες ώστε το γράφημα να μη λέει ψέματα. */
function fillDays(map: Map<string, number>, from: number, to: number) {
  const out: { day: string; count: number }[] = [];
  const day = new Date(from);
  day.setUTCHours(0, 0, 0, 0);
  let guard = 0;
  while (day.getTime() <= to && guard++ < 120) {
    const key = day.toISOString().slice(0, 10);
    out.push({ day: key, count: map.get(key) ?? 0 });
    day.setUTCDate(day.getUTCDate() + 1);
  }
  // Για μεγάλα εύρη (π.χ. "Όλα") δείχνουμε μόνο τις μέρες με δεδομένα.
  if (guard >= 120) {
    return [...map.entries()]
      .map(([dayKey, count]) => ({ day: dayKey, count }))
      .sort((a, b) => a.day.localeCompare(b.day));
  }
  return out;
}

// ── Rate Limiting / Περιορισμός Ρυθμού ────────────────────────────────────────

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 λεπτά
const MAX_LOGIN_ATTEMPTS = 5;

export async function recordLoginAttempt(ip: string, success: boolean): Promise<void> {
  const supabase = db();
  const cutoffTime = Date.now() - RATE_LIMIT_WINDOW;

  const { error } = await supabase
    .from("login_attempts")
    .insert({ ip, attempt_at: Date.now(), success });
  if (error) {
    console.error("[db.recordLoginAttempt]", error.message);
    return;
  }

  await supabase.from("login_attempts").delete().lt("attempt_at", cutoffTime);

  if (!success) {
    const { count } = await supabase
      .from("login_attempts")
      .select("ip", { count: "exact", head: true })
      .eq("ip", ip)
      .gt("attempt_at", cutoffTime)
      .eq("success", false);

    if ((count ?? 0) > MAX_LOGIN_ATTEMPTS) {
      console.warn(`[SECURITY] Potential brute force attack from IP: ${ip}. Attempts: ${count}`);
    }
  }
}

export async function isRateLimited(ip: string): Promise<boolean> {
  const cutoffTime = Date.now() - RATE_LIMIT_WINDOW;
  const { count, error } = await db()
    .from("login_attempts")
    .select("ip", { count: "exact", head: true })
    .eq("ip", ip)
    .gt("attempt_at", cutoffTime)
    .eq("success", false);

  // Αν η καταμέτρηση αποτύχει, δεν κλειδώνουμε κανέναν έξω κατά λάθος — αλλά
  // το log πρέπει να το δείξει, γιατί μένει ανοιχτή η πόρτα στο brute force.
  if (error) {
    console.error("[db.isRateLimited]", error.message);
    return false;
  }
  return (count ?? 0) >= MAX_LOGIN_ATTEMPTS;
}
