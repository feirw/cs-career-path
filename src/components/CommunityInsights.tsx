"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CareerSwatch } from "./CareerIcon";
import { useLocale } from "./LocaleProvider";
import { Panel, SheetLabel } from "./ui/Card";
import { CAREER_BY_ID, type CareerId } from "@/lib/careers";
import { cn } from "@/lib/cn";
import { ui } from "@/lib/i18n";

type Entry = { careerId: CareerId; count: number; share: number };
type Payload = { total: number; enough: boolean; top: Entry[] };

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Πόσο συχνά βγαίνει πρώτη κάθε κατεύθυνση σε όλες τις υποβολές.
 *
 * Φορτώνεται μετά το πρώτο render αντί να έρθει με τη σελίδα: το αποτέλεσμα
 * του χρήστη δεν πρέπει να περιμένει ένα ερώτημα συγκεντρωτικών. Όσο δεν
 * υπάρχουν δεδομένα —ή δεν είναι αρκετά— η ενότητα απλώς δεν εμφανίζεται.
 */
export function CommunityInsights({ yourCareerId }: { yourCareerId?: CareerId }) {
  const { tr } = useLocale();
  const [data, setData] = useState<Payload | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/community", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: Payload | null) => {
        if (payload?.enough && payload.top.length > 0) setData(payload);
      })
      .catch(() => {
        // Τα συγκεντρωτικά είναι συμπλήρωμα: αν πέσουν, το αποτέλεσμα στέκει
        // μια χαρά χωρίς αυτά.
      });

    return () => controller.abort();
  }, []);

  if (!data) return null;

  const leader = data.top[0].share || 1;

  return (
    <section className="pt-16">
      <SheetLabel>{tr(ui.communityTitle)}</SheetLabel>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[var(--ink-3)]">
        {tr(ui.communityLead)}{" "}
        <span className="whitespace-nowrap text-[var(--ink-4)]">
          ({tr(ui.communityBasis).replace("{n}", String(data.total))})
        </span>
      </p>

      <Panel className="mt-6 p-2 sm:p-3">
        <ul>
          {data.top.map((entry, index) => {
            const career = CAREER_BY_ID[entry.careerId];
            const isYours = entry.careerId === yourCareerId;

            return (
              <motion.li
                key={entry.careerId}
                whileHover={{ x: 2 }}
                className={cn(
                  "group/row flex items-center gap-3 rounded-2xl px-3 py-2.5 sm:gap-4",
                  "transition-colors duration-200 ease-out hover:bg-[var(--panel-2)]",
                  isYours && "bg-[var(--accent-soft)]",
                )}
              >
                <span className="mono w-4 shrink-0 text-[12px] text-[var(--ink-4)]">
                  {index + 1}
                </span>
                <CareerSwatch
                  id={career.id}
                  color={career.color}
                  size="sm"
                  className="transition-transform duration-200 ease-out group-hover/row:scale-110"
                />
                <span className="flex min-w-0 w-36 shrink-0 items-baseline gap-2 sm:w-56 lg:w-64">
                  <span
                    className={cn(
                      "text-[13.5px] leading-snug sm:text-[15px]",
                      isYours ? "font-semibold text-[var(--ink)]" : "text-[var(--ink-2)]",
                      "transition-colors duration-200 ease-out group-hover/row:text-[var(--ink)]",
                    )}
                  >
                    {tr(career.name)}
                  </span>
                  {isYours && (
                    <span className="hidden shrink-0 text-[11px] font-semibold text-[var(--accent)] sm:inline">
                      {tr(ui.communityYours)}
                    </span>
                  )}
                </span>

                {/*
                 * Οι μπάρες κλιμακώνονται ως προς την πρώτη, όχι ως προς το 100:
                 * με πέντε κατευθύνσεις γύρω στο 10-15% όλες θα ήταν γραμμούλες
                 * και δεν θα φαινόταν η μεταξύ τους διαφορά.
                 */}
                <span
                  aria-hidden
                  className="block h-2 flex-1 overflow-hidden rounded-full bg-[var(--panel-2)] transition-[height] duration-200 ease-out group-hover/row:h-2.5"
                >
                  <motion.span
                    className="block h-full rounded-full"
                    style={{ backgroundColor: career.color, opacity: isYours ? 1 : 0.55 }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.round((entry.share / leader) * 100)}%` }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ duration: 0.8, ease: EASE, delay: index * 0.06 }}
                  />
                </span>

                <span className="mono w-10 shrink-0 text-right text-[13px] text-[var(--ink-3)]">
                  {entry.share}%
                </span>
              </motion.li>
            );
          })}
        </ul>
      </Panel>

      <p className="mt-4 max-w-[70ch] text-[13px] leading-relaxed text-[var(--ink-4)]">
        {tr(ui.communityNote)}
      </p>
    </section>
  );
}
