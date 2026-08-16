"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLocale } from "./LocaleProvider";

const PORTFOLIO = "https://kgouridis.vercel.app";

/** Υπογραφή δημιουργού, στο κάτω μέρος κάθε σελίδας. */
export function Credit({ className }: { className?: string }) {
  const { tr } = useLocale();

  return (
    <p className={cn("text-[13px] text-[var(--ink-4)]", className)}>
      {tr({ el: "Developed by", en: "Developed by" })}{" "}
      <a
        href={PORTFOLIO}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "group/credit inline-flex items-center gap-0.5 rounded-full font-semibold text-[var(--ink-2)]",
          "underline decoration-[var(--rule-strong)] decoration-1 underline-offset-4",
          "transition-colors duration-200 ease-out hover:text-[var(--accent)] hover:decoration-[var(--accent)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]",
        )}
      >
        Konstantinos Gouridis
        <ArrowUpRight
          aria-hidden
          strokeWidth={2}
          className="size-3.5 transition-transform duration-200 ease-out group-hover/credit:-translate-y-0.5 group-hover/credit:translate-x-0.5"
        />
      </a>
    </p>
  );
}
