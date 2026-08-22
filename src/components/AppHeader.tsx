"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { LanguageToggle } from "./LocaleProvider";
import { ThemeToggle } from "./ThemeProvider";

/**
 * Λογότυπο: δακτύλιος που έχει γεμίσει κατά ένα τόξο — το ίδιο σχήμα με τον
 * δείκτη ταιριάσματος στα αποτελέσματα. Η προηγούμενη εκδοχή είχε μια κουκκίδα
 * εκτός κέντρου που διαβαζόταν σαν ειδοποίηση.
 */
function Mark() {
  return (
    <svg viewBox="0 0 28 28" className="size-6" aria-hidden>
      <circle cx="14" cy="14" r="10.5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.22" />
      <path
        d="M14 3.5 A10.5 10.5 0 0 1 23.093 19.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
    </svg>
  );
}

export function AppHeader({
  className,
  slot,
  compact = false,
}: {
  className?: string;
  slot?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--paper)]/85 backdrop-blur-md",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full items-center gap-4 px-5 sm:px-8",
          compact ? "h-16 max-w-4xl" : "h-16 max-w-6xl",
        )}
      >
        <Link
          href="/"
          className={cn(
            "group inline-flex items-center gap-2.5 rounded-full text-[var(--accent)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
            "focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--paper)]",
          )}
        >
          <span className="transition-transform duration-500 ease-out group-hover:rotate-[120deg]">
            <Mark />
          </span>
          <span className="display hidden text-[15px] font-bold tracking-[-0.02em] text-[var(--ink)] sm:inline">
            CS Career Path
          </span>
        </Link>

        {slot ? <div className="min-w-0 flex-1">{slot}</div> : <div className="flex-1" />}

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
