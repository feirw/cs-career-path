"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, BadgeCheck, Download, Link2, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AppHeader } from "./AppHeader";
import { CareerSwatch } from "./CareerIcon";
import { CommunityInsights } from "./CommunityInsights";
import { useLocale } from "./LocaleProvider";
import { RadarChart } from "./RadarChart";
import { Button, ButtonLink } from "./ui/Button";
import { Panel, SheetLabel } from "./ui/Card";
import { useToast } from "./ui/Toast";
import { CAREER_BY_ID } from "@/lib/careers";
import { cn } from "@/lib/cn";
import { ui } from "@/lib/i18n";
import type { TestMode } from "@/lib/questions";
import { separation, type CareerScore } from "@/lib/scoring";
import { addToHistory } from "@/lib/storageKeys";
import { TRAITS, type TraitId } from "@/lib/traits";

type Props = {
  id: string;
  scores: CareerScore[];
  traits: Record<TraitId, number>;
  createdAt: number;
  mode: TestMode;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ResultView({ id, scores, traits, createdAt, mode }: Props) {
  const { tr, locale } = useLocale();
  const toast = useToast();
  const [tab, setTab] = useState(0);

  const top3 = scores.slice(0, 3);
  const winner = CAREER_BY_ID[top3[0].careerId];
  const gap = separation(scores);
  const isShort = mode === "short";
  const selected = CAREER_BY_ID[top3[tab].careerId];

  /*
   * Κάθε άνοιγμα αποτελέσματος το γράφει στο ιστορικό της συσκευής, ώστε ο
   * χρήστης να το ξαναβρίσκει από την αρχική χωρίς να έχει κρατήσει το link.
   * Τρέχει και όταν κάποιος ανοίγει link που του μοιράστηκαν — δικό του
   * αποτέλεσμα ή όχι, το θέλει προσβάσιμο.
   */
  useEffect(() => {
    addToHistory({
      id,
      mode,
      careerId: winner.id,
      match: top3[0].match,
      createdAt,
    });
  }, [id, mode, winner.id, top3, createdAt]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({ tone: "success", title: tr(ui.linkCopied) });
    } catch {
      toast({
        tone: "error",
        title: tr({ el: "Δεν έγινε αντιγραφή", en: "Couldn't copy" }),
        description: tr({
          el: "Αντίγραψε το URL από τη μπάρα διευθύνσεων.",
          en: "Copy the URL from the address bar.",
        }),
      });
    }
  };

  return (
    <>
      <AppHeader />

      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        {/* Το αποτέλεσμα: κυκλικός δείκτης δίπλα στο όνομα της καριέρας */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-10"
        >
          <Panel className="overflow-hidden p-7 sm:p-10">
            <p className="eyebrow">{tr(ui.yourTop)}</p>

            <div className="mt-6 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
              <Gauge value={top3[0].match} color={winner.color} />

              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <CareerSwatch id={winner.id} color={winner.color} size="lg" />
                  <h1 className="display text-balance text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[42px]">
                    {tr(winner.name)}
                  </h1>
                </div>
                <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.65] text-[var(--ink-2)]">
                  {tr(winner.description)}
                </p>
              </div>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--rule)] pt-5 text-[13px] text-[var(--ink-3)]">
              <span className="rounded-full bg-[var(--panel-2)] px-2.5 py-1 text-[11px]">
                {tr(isShort ? ui.basedOnShort : ui.basedOnFull)}
              </span>
              {gap >= 8 ? tr(ui.clearDirection) : tr(ui.closeCall)}
            </p>
          </Panel>
        </motion.section>

        {isShort && (
          <Panel className="mt-4 border-[var(--accent)]/35 bg-[var(--accent-soft)] p-6">
            <p className="max-w-[80ch] text-sm leading-relaxed text-[var(--ink-2)]">
              {tr(ui.shortResultWarning)}
            </p>
            <ButtonLink href="/test?mode=full" size="md" className="group/cta mt-5">
              {tr(ui.takeFullTest)}
              <ArrowRight
                aria-hidden
                strokeWidth={1.75}
                className="size-4 transition-transform duration-200 ease-out group-hover/cta:translate-x-1"
              />
            </ButtonLink>
          </Panel>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {/* Απλό link: ο server στέλνει Content-Disposition, ο browser κατεβάζει. */}
          <ButtonLink href={`/api/results/${id}/pdf?locale=${locale}`} variant="outline" download>
            <Download aria-hidden strokeWidth={1.75} className="size-4" />
            {tr(ui.downloadPdf)}
          </ButtonLink>
          <Button variant="outline" onClick={copyLink}>
            <Link2 aria-hidden strokeWidth={1.75} className="size-4" />
            {tr(ui.copyLink)}
          </Button>
          <ButtonLink href={`/test?mode=${mode}`} variant="quiet">
            <RotateCcw aria-hidden strokeWidth={1.75} className="size-4" />
            {tr(ui.retake)}
          </ButtonLink>
        </div>

        {/* Το link είναι ο μόνος μόνιμος τρόπος: το ιστορικό ζει μόνο τοπικά. */}
        <p className="mt-3 max-w-[62ch] text-[12.5px] leading-relaxed text-[var(--ink-4)]">
          {tr(ui.keepLink)}
        </p>

        {/* Κατάταξη */}
        <section className="pt-16">
          <SheetLabel>{tr(ui.allCareers)}</SheetLabel>
          <Panel className="mt-6 p-2 sm:p-3">
            <ul>
              {scores.map((entry, index) => {
                const career = CAREER_BY_ID[entry.careerId];
                const isTop3 = index < 3;
                return (
                  <motion.li
                    key={entry.careerId}
                    whileHover={{ x: 2 }}
                    className={cn(
                      "group/row flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:gap-4",
                      "transition-colors duration-200 ease-out hover:bg-[var(--panel-2)]",
                    )}
                  >
                    <CareerSwatch
                      id={career.id}
                      color={career.color}
                      size="sm"
                      className="transition-transform duration-200 ease-out group-hover/row:scale-110"
                    />
                    <span
                      className={cn(
                        "w-32 shrink-0 truncate text-[14px] transition-colors duration-200 ease-out sm:w-48 sm:text-[15px]",
                        isTop3 ? "font-semibold text-[var(--ink)]" : "text-[var(--ink-2)]",
                        "group-hover/row:text-[var(--ink)]",
                      )}
                    >
                      {tr(career.name)}
                    </span>
                    <SoftBar value={entry.match} color={career.color} muted={!isTop3} />
                    <span className="mono w-10 shrink-0 text-right text-[13px] text-[var(--ink-3)]">
                      {entry.match}%
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </Panel>
        </section>

        {/* Προφίλ */}
        <section className="pt-16">
          <SheetLabel>{tr(ui.yourProfile)}</SheetLabel>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[var(--ink-3)]">
            {tr(ui.profileLead)}
          </p>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,440px)_1fr]">
            <div className="relative flex justify-center">
              <div aria-hidden className="halo absolute inset-0" />
              <RadarChart values={traits} />
            </div>

            <ul className="space-y-4">
              {[...TRAITS]
                .sort((a, b) => (traits[b.id] ?? 0) - (traits[a.id] ?? 0))
                .map((trait) => (
                  <motion.li key={trait.id} whileHover={{ x: 4 }} className="group/trait">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[15px] font-semibold">{tr(trait.name)}</span>
                      <span className="mono text-[13px] text-[var(--ink-3)]">
                        {traits[trait.id] ?? 0}%
                      </span>
                    </div>
                    <SoftBar
                      value={traits[trait.id] ?? 0}
                      color="var(--accent)"
                      className="mt-2"
                    />
                    <p className="mt-1.5 max-w-[60ch] text-[13px] leading-relaxed text-[var(--ink-4)]">
                      {tr(trait.description)}
                    </p>
                  </motion.li>
                ))}
            </ul>
          </div>
        </section>

        {/* Roadmap */}
        <section className="pt-16">
          <SheetLabel>{tr(ui.roadmap)}</SheetLabel>

          <div className="mt-6 inline-flex rounded-full border border-[var(--rule)] bg-[var(--panel)] p-1">
            {top3.map((entry, index) => {
              const career = CAREER_BY_ID[entry.careerId];
              const active = index === tab;
              return (
                <button
                  key={entry.careerId}
                  type="button"
                  onClick={() => setTab(index)}
                  aria-pressed={active}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                    active
                      ? "text-white dark:text-[var(--ink-invert)]"
                      : "text-[var(--ink-3)] hover:text-[var(--ink)]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="roadmap-tab"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                  )}
                  <span className="relative">{tr(career.name)}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <Panel className="mt-5 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <CareerSwatch id={selected.id} color={selected.color} />
                  <h3 className="display text-xl font-bold tracking-tight">{tr(selected.name)}</h3>
                </div>

                <p className="mt-5 max-w-[75ch] text-sm leading-relaxed text-[var(--ink-2)]">
                  <span className="font-medium text-[var(--ink)]">{tr(ui.dayToDay)}: </span>
                  {tr(selected.dayToDay)}
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <Block label={tr(ui.techToLearn)}>
                    <ul className="flex flex-wrap gap-1.5">
                      {selected.tech.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-[var(--rule)] bg-[var(--panel-2)] px-3 py-1 text-xs text-[var(--ink-2)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Block>

                  <Block label={tr(ui.coursesToTake)}>
                    <NumberedList items={selected.courses.map((course) => tr(course))} />
                  </Block>

                  <Block label={tr(ui.portfolioProjects)}>
                    <NumberedList items={selected.projects.map((project) => tr(project))} />
                  </Block>

                  <Block label={tr(ui.juniorMarket)}>
                    <p className="max-w-[52ch] text-sm leading-relaxed text-[var(--ink-2)]">
                      {tr(selected.market)}
                    </p>
                  </Block>

                  {/* Οι πιστοποιήσεις πιάνουν όλο το πλάτος: είναι λίστα με σειρά
                      χρησιμότητας και συνοδεύεται από το πόσο μετράνε στ' αλήθεια. */}
                  <div className="sm:col-span-2">
                    <Block label={tr(ui.certifications)}>
                      <ol className="grid gap-2.5 sm:grid-cols-2">
                        {selected.certifications.map((certification, index) => (
                          <li
                            key={certification.en}
                            className="flex items-start gap-3 rounded-2xl border border-[var(--rule)] bg-[var(--panel-2)] px-3.5 py-2.5"
                          >
                            <span className="mono mt-px grid size-5 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-[10px] font-semibold text-white dark:text-[var(--ink-invert)]">
                              {index + 1}
                            </span>
                            <span className="text-[13px] leading-snug text-[var(--ink-2)]">
                              {tr(certification)}
                            </span>
                          </li>
                        ))}
                      </ol>
                      <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-[var(--ink-3)]">
                        <BadgeCheck
                          aria-hidden
                          strokeWidth={1.75}
                          className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                        />
                        {tr(selected.certsNote)}
                      </p>
                    </Block>
                  </div>
                </div>
              </Panel>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Community Insights — φέρνει το δικό του <section>, ώστε να μην αφήνει
            κενό όταν δεν υπάρχουν αρκετές υποβολές για να δείξει κάτι. */}
        <CommunityInsights yourCareerId={winner.id} />

        <section className="mt-12">
          <p className="max-w-[70ch] text-[13px] leading-relaxed text-[var(--ink-3)]">
            {tr({
              el: "Φυσικά υπάρχουν και άλλες καριέρες που μπορεί κάποιος να ακολουθήσει. Αυτές που εμφανίζονται εδώ είναι απλώς οι πιο συχνές.",
              en: "Of course, there are other careers one can pursue. The ones shown here are simply the most common."
            })}
          </p>
        </section>

        <footer className="mt-16 border-t border-[var(--rule)] pt-8">
          <p className="max-w-[70ch] text-[13px] leading-relaxed text-[var(--ink-3)]">
            {tr(ui.disclaimer)}
          </p>
          <LocalTimestamp value={createdAt} locale={locale} />
        </footer>
      </main>
    </>
  );
}

/**
 * Η ώρα μορφοποιείται μόνο στον browser: ο server τρέχει σε άλλη ζώνη ώρας και σε
 * άλλο ICU, οπότε το ίδιο timestamp έβγαινε διαφορετικό στις δύο πλευρές και η
 * React το ανέφερε ως hydration mismatch.
 */
function LocalTimestamp({ value, locale }: { value: number; locale: "el" | "en" }) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    setText(new Date(value).toLocaleString(locale === "el" ? "el-GR" : "en-GB"));
  }, [value, locale]);

  return (
    <p className="mono mt-3 min-h-[1em] text-[11px] text-[var(--ink-4)]" suppressHydrationWarning>
      {text}
    </p>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow">{label}</h4>
      <div className="mt-3.5">{children}</div>
    </div>
  );
}

/** Η σειρά εδώ σημαίνει προτεραιότητα, γι' αυτό είναι αριθμημένη. */
function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-2)]">
          <span className="mono grid size-5 shrink-0 place-items-center rounded-full bg-[var(--panel-2)] text-[10px] text-[var(--ink-3)]">
            {index + 1}
          </span>
          <span className="max-w-[48ch]">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/** Κυκλικός δείκτης ταιριάσματος: δακτύλιος με το ποσοστό στο κέντρο. */
function Gauge({ value, color }: { value: number; color: string }) {
  const { tr } = useLocale();
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const size = 148;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="relative grid shrink-0 place-items-center">
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--panel-2)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? circumference * (1 - value / 100) : circumference }}
          transition={{ duration: 1, ease: EASE }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="mono block text-[34px] font-bold leading-none tracking-tight">
          {display}%
        </span>
        <span className="mt-1 block text-[11px] text-[var(--ink-4)]">{tr(ui.match)}</span>
      </div>
    </div>
  );
}

function SoftBar({
  value,
  color,
  muted = false,
  className,
}: {
  value: number;
  color: string;
  muted?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <span
      ref={ref}
      className={cn(
        "block h-2 flex-1 overflow-hidden rounded-full bg-[var(--panel-2)]",
        "transition-[height] duration-200 ease-out group-hover/row:h-2.5",
        className,
      )}
      aria-hidden
    >
      <motion.span
        className="block h-full rounded-full transition-opacity duration-200 ease-out group-hover/row:!opacity-100"
        style={{ backgroundColor: color, opacity: muted ? 0.4 : 1 }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      />
    </span>
  );
}
