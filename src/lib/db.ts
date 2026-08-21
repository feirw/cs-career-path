import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { CareerId } from "./careers";
import type { Locale } from "./i18n";
import type { TestMode } from "./questions";
import type { TraitId } from "./traits";
import type { CareerScore } from "./scoring";

/**
 * Χρησιμοποιούμε το ενσωματωμένο SQLite του Node (node:sqlite, Node 22.5+).
 * Καμία native εξάρτηση, κανένα npm install που θέλει compiler.
 *
 * Ό,τι αποθηκεύεται είναι ανώνυμο: τυχαίο id, απαντήσεις, βαθμολογίες, χρόνος.
 * Καμία IP, κανένα user-agent, κανένα cookie ταυτοποίησης.
 */

export type StoredSubmission = {
  id: string;
  createdAt: number;
  locale: Locale;
  /** "short" (20 ερωτήσεις) ή "full" (100). */
  mode: TestMode;
  durationMs: number;
  topCareer: CareerId;
  topMatch: number;
  scores: CareerScore[];
  traits: Record<TraitId, number>;
  answers: Record<string, string>;
};

let db: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (db) return db;

  const file = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "submissions.sqlite");
  fs.mkdirSync(path.dirname(file), { recursive: true });

  db = new DatabaseSync(file);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id          TEXT PRIMARY KEY,
      created_at  INTEGER NOT NULL,
      locale      TEXT NOT NULL,
      duration_ms INTEGER NOT NULL DEFAULT 0,
      top_career  TEXT NOT NULL,
      top_match   INTEGER NOT NULL,
      scores      TEXT NOT NULL,
      traits      TEXT NOT NULL,
      answers     TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at);

    CREATE TABLE IF NOT EXISTS starts (
      id         TEXT PRIMARY KEY,
      created_at INTEGER NOT NULL,
      locale     TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_starts_created ON starts(created_at);

    CREATE TABLE IF NOT EXISTS login_attempts (
      ip          TEXT NOT NULL,
      attempt_at  INTEGER NOT NULL,
      success     INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_login_attempts_ip ON login_attempts(ip);
  `);

  // Μετάβαση: οι παλιές υποβολές έγιναν πριν υπάρξουν δύο τεστ — ήταν το πλήρες
  // της εποχής τους, οπότε τις σημειώνουμε ως "full".
  addColumnIfMissing(db, "submissions", "mode", "TEXT NOT NULL DEFAULT 'full'");
  addColumnIfMissing(db, "starts", "mode", "TEXT NOT NULL DEFAULT 'full'");

  return db;
}

function addColumnIfMissing(
  database: DatabaseSync,
  table: string,
  column: string,
  definition: string,
): void {
  const columns = database.prepare(`PRAGMA table_info(${table})`).all() as unknown as {
    name: string;
  }[];
  if (columns.some((c) => c.name === column)) return;
  database.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
}

export function recordStart(id: string, locale: Locale, mode: TestMode): void {
  getDb()
    .prepare("INSERT OR IGNORE INTO starts (id, created_at, locale, mode) VALUES (?, ?, ?, ?)")
    .run(id, Date.now(), locale, mode);
}

export function insertSubmission(s: StoredSubmission): void {
  getDb()
    .prepare(
      `INSERT INTO submissions (id, created_at, locale, mode, duration_ms, top_career, top_match, scores, traits, answers)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      s.id,
      s.createdAt,
      s.locale,
      s.mode,
      s.durationMs,
      s.topCareer,
      s.topMatch,
      JSON.stringify(s.scores),
      JSON.stringify(s.traits),
      JSON.stringify(s.answers),
    );
}

type SubmissionRow = {
  id: string;
  created_at: number;
  locale: string;
  mode: string;
  duration_ms: number;
  top_career: string;
  top_match: number;
  scores: string;
  traits: string;
  answers: string;
};

export function getSubmission(id: string): StoredSubmission | null {
  const row = getDb().prepare("SELECT * FROM submissions WHERE id = ?").get(id) as
    | SubmissionRow
    | undefined;
  if (!row) return null;
  return {
    id: row.id,
    createdAt: Number(row.created_at),
    locale: row.locale as Locale,
    mode: row.mode === "short" ? "short" : "full",
    durationMs: Number(row.duration_ms),
    topCareer: row.top_career as CareerId,
    topMatch: Number(row.top_match),
    scores: JSON.parse(row.scores),
    traits: JSON.parse(row.traits),
    answers: JSON.parse(row.answers),
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

export function getStats(range: Range): AdminStats {
  const d = getDb();
  const { from, to } = range;

  const submissions = d
    .prepare("SELECT * FROM submissions WHERE created_at BETWEEN ? AND ? ORDER BY created_at")
    .all(from, to) as unknown as SubmissionRow[];

  const startRows = d
    .prepare("SELECT mode, COUNT(*) AS n FROM starts WHERE created_at BETWEEN ? AND ? GROUP BY mode")
    .all(from, to) as unknown as { mode: string; n: number }[];
  const startsByMode = new Map(startRows.map((r) => [r.mode, Number(r.n)]));
  const starts = startRows.reduce((sum, r) => sum + Number(r.n), 0);

  const allTime = Number(
    (d.prepare("SELECT COUNT(*) AS n FROM submissions").get() as { n: number } | undefined)?.n ?? 0,
  );

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

    const scores = JSON.parse(row.scores) as CareerScore[];
    for (const s of scores) {
      matchSums.set(s.careerId, (matchSums.get(s.careerId) ?? 0) + s.match);
    }

    const answers = JSON.parse(row.answers) as Record<string, string>;
    for (const [questionId, optionId] of Object.entries(answers)) {
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
      completionRate: starts > 0 ? Math.round((submissions.length / starts) * 100) : 0,
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
        completionRate: modeStarts > 0 ? Math.round((modeSubmissions / modeStarts) * 100) : 0,
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

export function recordLoginAttempt(ip: string, success: boolean): void {
  const db = getDb();
  db.prepare("INSERT INTO login_attempts (ip, attempt_at, success) VALUES (?, ?, ?)")
    .run(ip, Date.now(), success ? 1 : 0);
  cleanupOldAttempts();

  if (!success) {
    const cutoffTime = Date.now() - RATE_LIMIT_WINDOW;
    const attempts = db
      .prepare("SELECT COUNT(*) as count FROM login_attempts WHERE ip = ? AND attempt_at > ? AND success = 0")
      .get(ip, cutoffTime) as { count: number } | undefined;

    if ((attempts?.count ?? 0) > MAX_LOGIN_ATTEMPTS) {
      console.warn(`[SECURITY] Potential brute force attack from IP: ${ip}. Attempts: ${attempts?.count}`);
    }
  }
}

export function isRateLimited(ip: string): boolean {
  const cutoffTime = Date.now() - RATE_LIMIT_WINDOW;
  const attempts = getDb()
    .prepare("SELECT COUNT(*) as count FROM login_attempts WHERE ip = ? AND attempt_at > ? AND success = 0")
    .get(ip, cutoffTime) as { count: number } | undefined;

  return (attempts?.count ?? 0) >= MAX_LOGIN_ATTEMPTS;
}

function cleanupOldAttempts(): void {
  const cutoffTime = Date.now() - RATE_LIMIT_WINDOW;
  getDb()
    .prepare("DELETE FROM login_attempts WHERE attempt_at < ?")
    .run(cutoffTime);
}
