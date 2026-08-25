"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Credit } from "./Credit";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { tr } = useLocale();
  const pathname = usePathname();

  if (pathname.startsWith("/test")) return null;

  return (
    <footer className="border-t border-[var(--rule)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Credit />
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[var(--ink-4)]">
          <Link
            href="/privacy"
            className="rounded-full transition-colors duration-200 ease-out hover:text-[var(--ink-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {tr({ el: "Πολιτική Απορρήτου", en: "Privacy Policy" })}
          </Link>
          <span aria-hidden>·</span>
          <span>© 2026 CS Career Path</span>
        </nav>
      </div>
    </footer>
  );
}
