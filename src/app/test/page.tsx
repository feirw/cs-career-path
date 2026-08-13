"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LanguageToggle, LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { ui } from "@/lib/i18n";
import { SECTIONS, TOTAL_QUESTIONS } from "@/lib/questions";
import { STORAGE_KEY_PROGRESS } from "@/lib/storageKeys";

type Progress = {
  answers: Record<string, string>;
  sectionIndex: number;
  startedAt: number;
};

export default function TestPage() {
  return (
    <LocaleProvider>
      <Quiz />
    </LocaleProvider>
  );
}

function Quiz() {
  const { tr, locale } = useLocale();
  const router = useRouter();

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sectionIndex, setSectionIndex] = useState(0);
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMissing, setShowMissing] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const startReported = useRef(false);

  // Επαναφορά προόδου / restore progress
  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (raw) {
      try {
        const saved = JSON.parse(raw) as Progress;
        setAnswers(saved.answers ?? {});
        setSectionIndex(Math.min(saved.sectionIndex ?? 0, SECTIONS.length - 1));
        setStartedAt(saved.startedAt ?? Date.now());
        startReported.current = true; // το start είχε ήδη καταγραφεί
      } catch {
        /* χαλασμένο αποθηκευμένο state: το αγνοούμε */
      }
    }
    setLoaded(true);
  }, []);

  // Καταγραφή έναρξης (μία φορά, για το ποσοστό ολοκλήρωσης στο /admin)
  useEffect(() => {
    if (!loaded || startReported.current) return;
    startReported.current = true;
    void fetch("/api/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    }).catch(() => {});
  }, [loaded, locale]);

  // Autosave
  useEffect(() => {
    if (!loaded) return;
    const progress: Progress = { answers, sectionIndex, startedAt };
    window.localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  }, [answers, sectionIndex, startedAt, loaded]);

  const section = SECTIONS[sectionIndex];
  const answeredCount = Object.keys(answers).length;
  const sectionComplete = useMemo(
    () => section.questions.every((q) => answers[q.id]),
    [section, answers],
  );
  const isLastSection = sectionIndex === SECTIONS.length - 1;

  const choose = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }, []);

  const goTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const next = async () => {
    if (!sectionComplete) {
      setShowMissing(true);
      const firstMissing = section.questions.find((q) => !answers[q.id]);
      if (firstMissing) {
        document.getElementById(firstMissing.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setShowMissing(false);

    if (!isLastSection) {
      setSectionIndex((i) => i + 1);
      goTop();
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, locale, durationMs: Date.now() - startedAt }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = (await response.json()) as { id: string };
      window.localStorage.removeItem(STORAGE_KEY_PROGRESS);
      router.push(`/results/${data.id}`);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      setError(
        tr({
          el: "Κάτι πήγε στραβά με την υποβολή. Οι απαντήσεις σου είναι αποθηκευμένες — δοκίμασε ξανά.",
          en: "Something went wrong submitting. Your answers are saved — try again.",
        }),
      );
    }
  };

  const back = () => {
    if (sectionIndex === 0) return;
    setShowMissing(false);
    setSectionIndex((i) => i - 1);
    goTop();
  };

  if (!loaded) return null;

  const progressPercent = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12" ref={topRef}>
      <header className="mb-6 flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold text-[var(--accent)]">
          {tr(ui.appName)}
        </Link>
        <LanguageToggle />
      </header>

      <div className="sticky top-0 z-10 -mx-5 mb-8 bg-[var(--bg)]/90 px-5 py-3 backdrop-blur">
        <div className="flex items-baseline justify-between text-sm text-[var(--text-muted)]">
          <span>
            {tr(ui.page)} {section.index} {tr(ui.of)} {SECTIONS.length}
          </span>
          <span>
            {answeredCount}/{TOTAL_QUESTIONS} {tr(ui.answered)}
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
          <div
            className="bar-fill h-full rounded-full bg-[var(--accent)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{tr(section.title)}</h1>
      <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{tr(section.subtitle)}</p>

      <ol className="mt-10 space-y-8">
        {section.questions.map((question, index) => {
          const missing = showMissing && !answers[question.id];
          return (
            <li
              key={question.id}
              id={question.id}
              className={`rounded-2xl border bg-[var(--surface)] p-5 transition-colors ${
                missing ? "border-red-400" : "border-[var(--border)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold leading-snug">
                  <span className="mr-2 text-[var(--text-muted)]">
                    {(section.index - 1) * 10 + index + 1}.
                  </span>
                  {tr(question.text)}
                </h2>
                <span className="mt-1 shrink-0 rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-muted)]">
                  {question.kind === "technical" ? tr(ui.technical) : tr(ui.nonTechnical)}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option.id;
                  return (
                    <label
                      key={option.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-[15px] leading-relaxed transition-colors ${
                        selected
                          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                          : "border-[var(--border)] hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.id}
                        checked={selected}
                        onChange={() => choose(question.id, option.id)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
                      />
                      <span>{tr(option.label)}</span>
                    </label>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>

      {showMissing && !sectionComplete && (
        <p className="mt-6 rounded-xl border border-red-400 bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {tr(ui.answerAllOnPage)}
        </p>
      )}
      {error && (
        <p className="mt-6 rounded-xl border border-red-400 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3 pb-10">
        <button
          type="button"
          onClick={back}
          disabled={sectionIndex === 0}
          className="rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← {tr(ui.back)}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={submitting}
          className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60"
        >
          {submitting ? tr(ui.submitting) : isLastSection ? tr(ui.finish) : `${tr(ui.next)} →`}
        </button>
      </div>
    </main>
  );
}
