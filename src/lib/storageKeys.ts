import type { TestMode } from "./questions";

/** Κλειδιά localStorage — σε ένα σημείο ώστε να μη διαφωνούν οι σελίδες. */
export const STORAGE_KEY_PROGRESS = "cscp_progress_v2";

/** Κάθε τεστ κρατάει τη δική του πρόοδο, ώστε να μη μπλέκονται μεταξύ τους. */
export function progressKey(mode: TestMode): string {
  return `${STORAGE_KEY_PROGRESS}_${mode}`;
}
