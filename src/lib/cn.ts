import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Ενώνει κλάσεις και λύνει τις συγκρούσεις του Tailwind (η τελευταία κερδίζει). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
