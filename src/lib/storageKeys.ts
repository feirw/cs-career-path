import type { CareerId } from "./careers";
import type { TestMode } from "./questions";

/** Κλειδιά localStorage — σε ένα σημείο ώστε να μη διαφωνούν οι σελίδες. */
export const STORAGE_KEY_PROGRESS = "cscp_progress_v2";
export const STORAGE_KEY_HISTORY = "cscp_history_v1";

/** Κάθε τεστ κρατάει τη δική του πρόοδο, ώστε να μη μπλέκονται μεταξύ τους. */
export function progressKey(mode: TestMode): string {
  return `${STORAGE_KEY_PROGRESS}_${mode}`;
}

/**
 * Μια εγγραφή στο ιστορικό της συσκευής. Το ίδιο το αποτέλεσμα ζει στη βάση —
 * εδώ κρατάμε μόνο ό,τι χρειάζεται για να το ξαναβρεί ο χρήστης και να το
 * αναγνωρίσει στη λίστα.
 */
export type HistoryEntry = {
  id: string;
  mode: TestMode;
  careerId: CareerId;
  match: number;
  createdAt: number;
};

/** Πόσα κρατάμε πριν αρχίσουν να πέφτουν τα παλιότερα. */
const MAX_HISTORY = 10;

/**
 * Το ιστορικό ζει μόνο στη συσκευή. Αν ο χρήστης καθαρίσει τα δεδομένα του
 * browser ή αλλάξει συσκευή, χάνεται — γι' αυτό το UI λέει καθαρά ότι το link
 * είναι ο μόνιμος τρόπος να κρατήσει ένα αποτέλεσμα.
 */
export function readHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_HISTORY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isHistoryEntry).sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    // Κατεστραμμένο ή μη προσβάσιμο localStorage (π.χ. ιδιωτική περιήγηση):
    // το ιστορικό είναι βοήθημα, δεν αξίζει να ρίξει τη σελίδα.
    return [];
  }
}

export function addToHistory(entry: HistoryEntry): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  const existing = readHistory().filter((e) => e.id !== entry.id);
  const next = [entry, ...existing].slice(0, MAX_HISTORY);
  try {
    window.localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(next));
  } catch {
    // Γεμάτο ή απενεργοποιημένο storage — δεν κάνουμε τίποτα.
  }
  return next;
}

export function removeFromHistory(id: string): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  const next = readHistory().filter((e) => e.id !== id);
  try {
    window.localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(next));
  } catch {
    // ό,τι και παραπάνω
  }
  return next;
}

export function clearHistory(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY_HISTORY);
  } catch {
    // ό,τι και παραπάνω
  }
}

function isHistoryEntry(value: unknown): value is HistoryEntry {
  if (!value || typeof value !== "object") return false;
  const e = value as Record<string, unknown>;
  return (
    typeof e.id === "string" &&
    (e.mode === "short" || e.mode === "full") &&
    typeof e.careerId === "string" &&
    typeof e.match === "number" &&
    typeof e.createdAt === "number"
  );
}
