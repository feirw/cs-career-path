"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle, LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { CAREERS } from "@/lib/careers";
import { ui } from "@/lib/i18n";
import { estimatedMinutes, questionCount, type TestMode } from "@/lib/questions";
import { progressKey } from "@/lib/storageKeys";

export default function HomePage() {
  return (
    <LocaleProvider>
      <Home />
    </LocaleProvider>
  );
}

function Home() {
  const { tr } = useLocale();
  const [progress, setProgress] = useState<Record<TestMode, boolean>>({
    short: false,
    full: false,
  });

  useEffect(() => {
    setProgress({
      short: Boolean(window.localStorage.getItem(progressKey("short"))),
      full: Boolean(window.localStorage.getItem(progressKey("full"))),
    });
  }, []);

  const clear = (mode: TestMode) => {
    window.localStorage.removeItem(progressKey(mode));
    setProgress((p) => ({ ...p, [mode]: false }));
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-10 sm:py-16">
      <header className="mb-12 flex items-start justify-between gap-4">
        <div className="text-sm font-semibold tracking-tight text-[var(--accent)]">
          {tr(ui.appName)}
        </div>
        <LanguageToggle />
      </header>

      <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        {tr(ui.tagline)}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
        {tr(ui.heroLead)}
      </p>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {tr(ui.chooseTest)}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <TestCard mode="short" hasProgress={progress.short} onClear={() => clear("short")} />
          <TestCard mode="full" hasProgress={progress.full} onClear={() => clear("full")} featured />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {tr({ el: "Οι καριέρες που καλύπτονται", en: "The careers covered" })}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {CAREERS.map((career) => (
            <li
              key={career.id}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <div className="flex items-baseline gap-2">
                <span aria-hidden>{career.emoji}</span>
                <span className="font-semibold">{tr(career.name)}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {tr(career.tagline)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)]">
        <p>{tr(ui.disclaimer)}</p>
      </footer>
    </main>
  );
}

function TestCard({
  mode,
  hasProgress,
  onClear,
  featured = false,
}: {
  mode: TestMode;
  hasProgress: boolean;
  onClear: () => void;
  featured?: boolean;
}) {
  const { tr } = useLocale();
  const isShort = mode === "short";
  const total = questionCount(mode);

  return (
    <article
      className={`flex flex-col rounded-2xl border bg-[var(--surface)] p-6 ${
        featured ? "border-[var(--accent)]" : "border-[var(--border)]"
      }`}
    >
      <h3 className="text-xl font-bold tracking-tight">
        {tr(isShort ? ui.shortTest : ui.fullTest)}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
        {tr(isShort ? ui.shortTestLead : ui.fullTestLead)}
      </p>

      <dl className="mt-5 flex flex-wrap gap-2 text-xs">
        <Pill>
          {total} {tr(ui.questions)}
        </Pill>
        <Pill>
          ~{estimatedMinutes(mode)} {tr(ui.minutes)}
        </Pill>
        <Pill>{tr(ui.anonymous)}</Pill>
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">
        {tr(isShort ? ui.shortTestNote : ui.fullTestNote)}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={`/test?mode=${mode}`}
          className={`rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99] ${
            featured
              ? "bg-[var(--accent)] text-white"
              : "border border-[var(--border)] hover:bg-[var(--surface-2)]"
          }`}
        >
          {hasProgress ? tr(ui.resumeTest) : tr(ui.startTest)}
        </Link>
        {hasProgress && (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            {tr(ui.startOver)}
          </button>
        )}
      </div>
    </article>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg bg-[var(--surface-2)] px-2.5 py-1 text-[var(--text-muted)]">
      {children}
    </span>
  );
}
