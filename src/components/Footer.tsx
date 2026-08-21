"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { tr } = useLocale();

  return (
    <footer className="mx-auto max-w-6xl px-5 py-8 sm:px-8 border-t border-[var(--rule)] text-center text-xs text-[var(--ink-4)]">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/privacy" className="hover:text-[var(--ink-3)] transition-colors">
          {tr({ el: "Πολιτική Απορρήτου", en: "Privacy Policy" })}
        </Link>
        <span>·</span>
        <span>
          {tr({ el: "© 2026 CS Career Path", en: "© 2026 CS Career Path" })}
        </span>
      </div>
    </footer>
  );
}
