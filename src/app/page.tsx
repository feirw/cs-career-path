"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle, LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { CAREERS } from "@/lib/careers";
import { ui } from "@/lib/i18n";
import { PERSONALITY_COUNT, TECHNICAL_COUNT, TOTAL_QUESTIONS } from "@/lib/questions";
import { STORAGE_KEY_PROGRESS } from "@/lib/storageKeys";

export default function HomePage() {
  return (
    <LocaleProvider>
      <Home />
    </LocaleProvider>
  );
}

function Home() {
  const { tr } = useLocale();
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    setHasProgress(Boolean(window.localStorage.getItem(STORAGE_KEY_PROGRESS)));
  }, []);

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

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/test"
          className="rounded-xl bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99]"
        >
          {hasProgress ? tr(ui.resumeTest) : tr(ui.startTest)}
        </Link>
        {hasProgress && (
          <button
            type="button"
            onClick={() => {
              window.localStorage.removeItem(STORAGE_KEY_PROGRESS);
              setHasProgress(false);
            }}
            className="rounded-xl border border-[var(--border)] px-5 py-3.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            {tr(ui.startOver)}
          </button>
        )}
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat value={String(TOTAL_QUESTIONS)} label={tr(ui.questions)} />
        <Stat value="~8" label={tr(ui.minutes)} />
        <Stat value={String(CAREERS.length)} label={tr(ui.careersCount)} />
        <Stat value="🔒" label={tr(ui.anonymous)} />
      </dl>

      <p className="mt-4 text-sm text-[var(--text-muted)]">
        {tr({
          el: `${TECHNICAL_COUNT} τεχνικές και ${PERSONALITY_COUNT} ερωτήσεις προσωπικότητας, σε 5 ενότητες των 10.`,
          en: `${TECHNICAL_COUNT} technical and ${PERSONALITY_COUNT} personality questions, in 5 sections of 10.`,
        })}
      </p>

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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
      <dt className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{label}</dt>
      <dd className="mt-0.5 text-2xl font-bold">{value}</dd>
    </div>
  );
}
