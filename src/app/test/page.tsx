"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CircleAlert } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/cn";
import { ui } from "@/lib/i18n";
import { parseMode, questionCount, sectionsFor, type TestMode } from "@/lib/questions";
import { progressKey } from "@/lib/storageKeys";

type Progress = { answers: Record<string, string>; sectionIndex: number; startedAt: number };

const EASE = [0.22, 1, 0.36, 1] as const;
const MARKS = ["A", "B", "Γ", "Δ", "E", "Z"];

export default function TestPage() {
  return (
    <Suspense fallback={<TestSkeleton />}>
      <QuizWithMode />
    </Suspense>
  );
}

function QuizWithMode() {
  const searchParams = useSearchParams();
  const mode = parseMode(searchParams.get("mode"));
  return <Quiz key={mode} mode={mode} />;
}

function Quiz({ mode }: { mode: TestMode }) {
  const { tr, locale } = useLocale();
  const router = useRouter();
  const toast = useToast();
  const reducedMotion = useReducedMotion();

  const sections = useMemo(() => sectionsFor(mode), [mode]);
  const total = questionCount(mode);
  const storageKey = progressKey(mode);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sectionIndex, setSectionIndex] = useState(0);
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const topRef = useRef<HTMLDivElement>(null);
  const startReported = useRef(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      try {
        const saved = JSON.parse(raw) as Progress;
        setAnswers(saved.answers ?? {});
        setSectionIndex(Math.min(saved.sectionIndex ?? 0, sections.length - 1));
        setStartedAt(saved.startedAt ?? Date.now());
        startReported.current = true;
      } catch {
        /* χαλασμένο αποθηκευμένο state: το αγνοούμε */
      }
    }
    setLoaded(true);
  }, [storageKey, sections.length]);

  useEffect(() => {
    if (!loaded || startReported.current) return;
    startReported.current = true;
    void fetch("/api/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale, mode }),
    }).catch(() => {});
  }, [loaded, locale, mode]);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ answers, sectionIndex, startedAt } satisfies Progress),
    );
  }, [answers, sectionIndex, startedAt, loaded, storageKey]);

  const section = sections[sectionIndex];
  const answeredCount = Object.keys(answers).length;
  const sectionAnswered = section.questions.filter((question) => answers[question.id]).length;
  const sectionComplete = sectionAnswered === section.questions.length;
  const isLastSection = sectionIndex === sections.length - 1;

  const choose = useCallback((questionId: string, optionId: string) => {
    setAnswers((previous) => ({ ...previous, [questionId]: optionId }));
  }, []);

  /**
   * Μόλις απαντήσεις, η επόμενη αναπάντητη ερώτηση έρχεται μόνη της στην οθόνη.
   *
   * Δύο σκόπιμοι περιορισμοί: (α) δεν γίνεται όταν *αλλάζεις* απάντηση που είχες
   * ήδη δώσει — εκεί ο χρήστης διορθώνει και δεν θέλει να τον πετάξουμε αλλού,
   * και (β) η μικρή καθυστέρηση αφήνει να φανεί ότι η επιλογή καταχωρήθηκε.
   */
  const advanceTo = useCallback(
    (questionId: string) => {
      window.setTimeout(() => {
        document.getElementById(questionId)?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }, 240);
    },
    [reducedMotion],
  );

  const answerAndAdvance = (questionId: string, optionId: string, index: number) => {
    const wasAnswered = Boolean(answers[questionId]);
    choose(questionId, optionId);
    if (wasAnswered) return;

    const upcoming = section.questions.slice(index + 1).find((item) => !answers[item.id]);
    if (upcoming) advanceTo(upcoming.id);
  };

  const goTop = () =>
    topRef.current?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });

  const next = async () => {
    if (!sectionComplete) {
      setShowMissing(true);
      const firstMissing = section.questions.find((question) => !answers[question.id]);
      if (firstMissing) {
        document.getElementById(firstMissing.id)?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "center",
        });
      }
      return;
    }
    setShowMissing(false);

    if (!isLastSection) {
      setDirection(1);
      setSectionIndex((index) => index + 1);
      goTop();
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, locale, mode, durationMs: Date.now() - startedAt }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = (await response.json()) as { id: string };
      window.localStorage.removeItem(storageKey);
      router.push(`/results/${data.id}`);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      toast({
        tone: "error",
        title: tr({ el: "Η υποβολή απέτυχε", en: "Submission failed" }),
        description: tr({
          el: "Οι απαντήσεις σου είναι αποθηκευμένες — δοκίμασε ξανά.",
          en: "Your answers are saved — try again.",
        }),
      });
    }
  };

  const back = () => {
    if (sectionIndex === 0) return;
    setShowMissing(false);
    setDirection(-1);
    setSectionIndex((index) => index - 1);
    goTop();
  };

  if (!loaded) return <TestSkeleton />;

  return (
    <>
      <AppHeader
        compact
        slot={
          <div className="flex items-center gap-3">
            <ProgressRing value={answeredCount} total={total} />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium">
                {tr(mode === "short" ? ui.shortTest : ui.fullTest)}
              </p>
              <p className="mono text-[11px] text-[var(--ink-4)]">
                {answeredCount}/{total} {tr(ui.answered)}
              </p>
            </div>
          </div>
        }
      />

      <main className="mx-auto max-w-3xl px-5 pb-32 sm:px-8" ref={topRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, x: direction * 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -12 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <header className="py-10 text-center sm:py-12">
              <p className="mono inline-flex items-center gap-2 rounded-full border border-[var(--rule)] bg-[var(--panel)] px-3 py-1 text-[11px] text-[var(--ink-3)]">
                {tr(ui.page)} {sectionIndex + 1} {tr(ui.of)} {sections.length}
              </p>
              <h1 className="display mx-auto mt-5 max-w-[22ch] text-balance text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[36px]">
                {tr(section.title)}
              </h1>
              <p className="mx-auto mt-4 max-w-[58ch] leading-[1.65] text-[var(--ink-3)]">
                {tr(section.subtitle)}
              </p>
            </header>

            <ol className="space-y-4">
              {section.questions.map((question, index) => {
                const missing = showMissing && !answers[question.id];
                const number = sectionIndex * 10 + index + 1;
                const answered = Boolean(answers[question.id]);

                return (
                  <motion.li
                    key={question.id}
                    id={question.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.2), ease: EASE }}
                    className="scroll-mt-[88px]"
                  >
                    <Panel
                      className={cn(
                        "p-5 sm:p-6",
                        missing && "border-[var(--danger)]/50 bg-[var(--danger-soft)]",
                      )}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={cn(
                            "mono grid size-7 shrink-0 place-items-center rounded-full border text-[11px]",
                            "transition-colors duration-200 ease-out",
                            answered
                              ? "border-transparent bg-[var(--accent-soft)] text-[var(--accent)]"
                              : "border-[var(--rule-strong)] text-[var(--ink-4)]",
                          )}
                        >
                          {number}
                        </span>
                        <h2 className="mt-0.5 max-w-[52ch] text-[17px] font-semibold leading-snug tracking-[-0.01em]">
                          {tr(question.text)}
                        </h2>
                      </div>

                      <div className="mt-5 grid gap-2">
                        {question.options.map((option, optionIndex) => {
                          const selected = answers[question.id] === option.id;
                          return (
                            <motion.label
                              key={option.id}
                              whileHover={{ scale: 1.01, y: -1 }}
                              className={cn(
                                "group flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3",
                                "transition-all duration-200 ease-out",
                                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--accent)]",
                                "has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-[var(--panel)]",
                                selected
                                  ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                                  : "border-[var(--rule)] hover:border-[var(--rule-strong)] hover:bg-[var(--panel-2)]",
                              )}
                            >
                              <input
                                type="radio"
                                name={question.id}
                                value={option.id}
                                checked={selected}
                                onChange={() => answerAndAdvance(question.id, option.id, index)}
                                className="sr-only"
                              />
                              <span
                                aria-hidden
                                className={cn(
                                  "mono mt-px grid size-6 shrink-0 place-items-center rounded-full border text-[11px] font-medium",
                                  "transition-all duration-200 ease-out group-hover:scale-110",
                                  selected
                                    ? "border-[var(--accent)] bg-[var(--accent)] text-white dark:text-[var(--ink-invert)]"
                                    : "border-[var(--rule-strong)] text-[var(--ink-4)] group-hover:border-[var(--ink-4)]",
                                )}
                              >
                                {MARKS[optionIndex] ?? option.id.toUpperCase()}
                              </span>
                              <div className="flex flex-1 flex-col gap-2">
                                {option.image && (
                                  <div
                                    className="h-20 w-20 shrink-0"
                                    dangerouslySetInnerHTML={{ __html: option.image }}
                                  />
                                )}
                                <span
                                  className={cn(
                                    "max-w-[56ch] text-[15px] leading-[1.6] transition-colors duration-200",
                                    selected ? "font-medium text-[var(--ink)]" : "text-[var(--ink-2)]",
                                  )}
                                >
                                  {tr(option.label)}
                                </span>
                              </div>
                            </motion.label>
                          );
                        })}
                      </div>
                    </Panel>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showMissing && !sectionComplete && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="mt-6 flex items-start gap-2.5 rounded-2xl border border-[var(--danger)]/40 bg-[var(--danger-soft)] px-4 py-3 text-sm text-[var(--danger)]"
            >
              <CircleAlert aria-hidden strokeWidth={1.75} className="mt-0.5 size-4 shrink-0" />
              {tr(ui.answerAllOnPage)}
            </motion.p>
          )}
        </AnimatePresence>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--rule)] bg-[var(--paper)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <Button variant="quiet" onClick={back} disabled={sectionIndex === 0}>
            <ArrowLeft aria-hidden strokeWidth={1.75} className="size-4" />
            {tr(ui.back)}
          </Button>

          <div className="flex items-center gap-4">
            <span className="mono hidden text-[12px] text-[var(--ink-4)] sm:block">
              {sectionAnswered}/{section.questions.length}
            </span>
            <Button onClick={next} loading={submitting} size="lg" className="group/next">
              {submitting ? tr(ui.submitting) : isLastSection ? tr(ui.finish) : tr(ui.next)}
              {!submitting && (
                <ArrowRight
                  aria-hidden
                  strokeWidth={1.75}
                  className="size-4 transition-transform duration-200 ease-out group-hover/next:translate-x-1"
                />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

/** Κυκλικός δείκτης προόδου με το ποσοστό στο κέντρο. */
function ProgressRing({ value, total }: { value: number; total: number }) {
  const size = 40;
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = total > 0 ? value / total : 0;

  return (
    <span
      className="relative grid shrink-0 place-items-center"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={value}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--rule)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: circumference * (1 - percent) }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </svg>
      <span className="mono absolute text-[10px] font-medium text-[var(--ink-2)]">
        {Math.round(percent * 100)}
      </span>
    </span>
  );
}

function TestSkeleton() {
  return (
    <>
      <AppHeader compact />
      <main className="mx-auto max-w-3xl px-5 pb-32 sm:px-8">
        <div className="py-12 text-center">
          <Skeleton className="mx-auto h-6 w-28" />
          <Skeleton className="mx-auto mt-5 h-9 w-2/3" />
          <Skeleton className="mx-auto mt-4 h-4 w-full max-w-lg" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-3xl border border-[var(--rule)] bg-[var(--panel)] p-6">
              <Skeleton className="h-5 w-3/4" />
              <div className="mt-5 space-y-2">
                {Array.from({ length: 4 }).map((__, option) => (
                  <Skeleton key={option} className="h-12 w-full rounded-2xl" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
