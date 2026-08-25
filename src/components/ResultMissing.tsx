"use client";

import { SearchX } from "lucide-react";
import { AppHeader } from "./AppHeader";
import { useLocale } from "./LocaleProvider";
import { ButtonLink } from "./ui/Button";
import { ui } from "@/lib/i18n";

export function ResultMissing() {
  const { tr } = useLocale();

  return (
    <>
      <AppHeader />
      <main className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-md flex-col items-center justify-center px-5 text-center">
        <span className="grid size-12 place-items-center rounded-full border border-[var(--rule)] bg-[var(--panel)] text-[var(--ink-3)]">
          <SearchX aria-hidden strokeWidth={1.75} className="size-5" />
        </span>
        <h1 className="display mt-6 text-xl font-bold tracking-tight">{tr(ui.resultNotFound)}</h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-3)]">{tr(ui.resultNotFoundLead)}</p>
        <ButtonLink href="/" className="mt-8">
          {tr(ui.toHome)}
        </ButtonLink>
      </main>
    </>
  );
}
