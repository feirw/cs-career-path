"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageToggle, LocaleProvider, useLocale } from "./LocaleProvider";
import { RadarChart } from "./RadarChart";
import { CAREER_BY_ID } from "@/lib/careers";
import { ui } from "@/lib/i18n";
import type { TestMode } from "@/lib/questions";
import { separation, type CareerScore } from "@/lib/scoring";
import { TRAITS, type TraitId } from "@/lib/traits";

type Props = {
  scores: CareerScore[];
  traits: Record<TraitId, number>;
  createdAt: number;
  mode: TestMode;
};

export function ResultView(props: Props) {
  return (
    <LocaleProvider>
      <Results {...props} />
    </LocaleProvider>
  );
}

function Results({ scores, traits, createdAt, mode }: Props) {
  const { tr, locale } = useLocale();
  const [copied, setCopied] = useState(false);

  const top3 = scores.slice(0, 3);
  const winner = CAREER_BY_ID[top3[0].careerId];
  const gap = separation(scores);
  const isShort = mode === "short";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* ο χρήστης μπορεί πάντα να αντιγράψει το URL από τη μπάρα */
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-8 sm:py-12">
      <header className="mb-8 flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold text-[var(--accent)]">
          {tr(ui.appName)}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
        </div>
      </header>

      {/* Νικητής */}
      <section className="print-block rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-9">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            {tr(ui.yourTop)}
          </p>
          <span className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-muted)]">
            {tr(isShort ? ui.basedOnShort : ui.basedOnFull)}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span aria-hidden className="mr-2">
              {winner.emoji}
            </span>
            {tr(winner.name)}
          </h1>
          <span
            className="rounded-full px-3 py-1 text-sm font-bold text-white"
            style={{ backgroundColor: winner.color }}
          >
            {top3[0].match}% {tr(ui.match)}
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
          {tr(winner.description)}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-[var(--text-muted)]">
          {gap >= 8 ? tr(ui.clearDirection) : tr(ui.closeCall)}
        </p>
      </section>

      {isShort && (
        <section className="print-block mt-5 rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-5">
          <p className="text-sm leading-relaxed">{tr(ui.shortResultWarning)}</p>
          <Link
            href="/test?mode=full"
            className="no-print mt-4 inline-block rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            {tr(ui.takeFullTest)} →
          </Link>
        </section>
      )}

      {/* Ενέργειες */}
      <div className="no-print mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--surface-2)]"
        >
          ⬇︎ {tr(ui.downloadPdf)}
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--surface-2)]"
        >
          🔗 {copied ? tr(ui.linkCopied) : tr(ui.copyLink)}
        </button>
        <Link
          href={`/test?mode=${mode}`}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--surface-2)]"
        >
          ↺ {tr(ui.retake)}
        </Link>
      </div>

      {/* Top 3 */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {tr(ui.topThree)}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {top3.map((entry, index) => {
            const career = CAREER_BY_ID[entry.careerId];
            return (
              <article
                key={entry.careerId}
                className="print-block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl" aria-hidden>
                    {career.emoji}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-muted)]">#{index + 1}</span>
                </div>
                <h3 className="mt-3 font-semibold leading-tight">{tr(career.name)}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{tr(career.tagline)}</p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
                  <div
                    className="bar-fill h-full rounded-full"
                    style={{ width: `${entry.match}%`, backgroundColor: career.color }}
                  />
                </div>
                <p className="mt-2 text-sm font-semibold">{entry.match}%</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Όλες οι καριέρες */}
      <section className="print-block mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {tr(ui.allCareers)}
        </h2>
        <ul className="mt-5 space-y-2.5">
          {scores.map((entry) => {
            const career = CAREER_BY_ID[entry.careerId];
            return (
              <li key={entry.careerId} className="flex items-center gap-3">
                <span className="w-6 shrink-0 text-center" aria-hidden>
                  {career.emoji}
                </span>
                <span className="w-44 shrink-0 truncate text-sm sm:w-56">{tr(career.name)}</span>
                <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--surface-2)]">
                  <span
                    className="bar-fill block h-full rounded-full"
                    style={{ width: `${entry.match}%`, backgroundColor: career.color }}
                  />
                </span>
                <span className="w-10 shrink-0 text-right text-sm font-semibold tabular-nums">
                  {entry.match}%
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Προφίλ */}
      <section className="print-block mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {tr(ui.yourProfile)}
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[var(--text-muted)]">{tr(ui.profileLead)}</p>
        <div className="mt-6 grid items-center gap-8 sm:grid-cols-2">
          <div className="flex justify-center">
            <RadarChart values={traits} />
          </div>
          <ul className="space-y-3">
            {[...TRAITS]
              .sort((a, b) => (traits[b.id] ?? 0) - (traits[a.id] ?? 0))
              .map((trait) => (
                <li key={trait.id}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold">{tr(trait.name)}</span>
                    <span className="text-sm tabular-nums text-[var(--text-muted)]">
                      {traits[trait.id] ?? 0}%
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                    {tr(trait.description)}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Roadmaps */}
      <section className="mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {tr(ui.roadmap)}
        </h2>
        <div className="mt-5 space-y-5">
          {top3.map((entry) => {
            const career = CAREER_BY_ID[entry.careerId];
            return (
              <article
                key={entry.careerId}
                className="print-block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="text-xl font-bold">
                  <span aria-hidden className="mr-2">
                    {career.emoji}
                  </span>
                  {tr(career.name)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  <strong className="text-[var(--text)]">{tr(ui.dayToDay)}: </strong>
                  {tr(career.dayToDay)}
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      {tr(ui.techToLearn)}
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {career.tech.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg bg-[var(--surface-2)] px-2.5 py-1 text-xs"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      {tr(ui.coursesToTake)}
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {career.courses.map((course) => (
                        <li key={course.en}>· {tr(course)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      {tr(ui.portfolioProjects)}
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {career.projects.map((project) => (
                        <li key={project.en}>· {tr(project)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      {tr(ui.juniorMarket)}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {tr(career.market)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="mt-14 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)]">
        <p>{tr(ui.disclaimer)}</p>
        <p className="mt-2 text-xs">
          {new Date(createdAt).toLocaleString(locale === "el" ? "el-GR" : "en-GB")}
        </p>
      </footer>
    </main>
  );
}
