"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "./LocaleProvider";
import { TRAITS, type TraitId } from "@/lib/traits";

/**
 * Το προφίλ ως όργανο μέτρησης: διακεκομμένοι δακτύλιοι βαθμονόμησης, μία ακτίνα
 * ανά διάσταση, τιμές σε monospace πάνω στον κατακόρυφο άξονα. Καθαρό SVG ώστε
 * να τυπώνεται σωστά σε PDF.
 */
export function RadarChart({
  values,
  size = 360,
}: {
  values: Record<TraitId, number>;
  size?: number;
}) {
  const { tr } = useLocale();
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.29;
  const n = TRAITS.length;

  /** Ίδιος λόγος με το ProfileInstrument: τριγωνομετρία → στρογγυλοποίηση, αλλιώς
   *  server και browser διαφωνούν στα τελευταία δεκαδικά (hydration mismatch). */
  const round = (value: number) => Math.round(value * 1000) / 1000;

  const pointAt = (index: number, ratio: number) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    return [
      round(cx + Math.cos(angle) * radius * ratio),
      round(cy + Math.sin(angle) * radius * ratio),
    ] as const;
  };

  const ratioFor = (id: TraitId) => Math.max(0.04, (values[id] ?? 0) / 100);
  const shape = TRAITS.map((trait, index) => pointAt(index, ratioFor(trait.id)).join(",")).join(" ");

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${size} ${size}`}
      className="h-auto w-full max-w-[420px]"
      role="img"
      aria-label={tr({
        el: "Το προφίλ σου σε 8 διαστάσεις",
        en: "Your profile across 8 dimensions",
      })}
    >
      {[0.25, 0.5, 0.75, 1].map((ring) => (
        <circle
          key={ring}
          cx={cx}
          cy={cy}
          r={radius * ring}
          fill="none"
          stroke="var(--rule)"
          strokeWidth={1}
          strokeDasharray={ring === 1 ? undefined : "2 5"}
        />
      ))}

      {TRAITS.map((_, index) => {
        const [x, y] = pointAt(index, 1);
        return (
          <line key={index} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--rule)" strokeWidth={1} />
        );
      })}

      {/* Βαθμονόμηση στον κατακόρυφο άξονα */}
      {[25, 50, 75, 100].map((value) => (
        <text
          key={value}
          x={cx + 4}
          y={cy - radius * (value / 100) + 3}
          fontSize={size * 0.026}
          className="mono"
          fill="var(--ink-4)"
        >
          {value}
        </text>
      ))}

      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        initial={reduced ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.75, ease: [0.2, 0.9, 0.25, 1] }}
      >
        <polygon
          points={shape}
          fill="var(--accent)"
          fillOpacity={0.14}
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        {TRAITS.map((trait, index) => {
          const [px, py] = pointAt(index, ratioFor(trait.id));
          return (
            <circle
              key={trait.id}
              cx={px}
              cy={py}
              r={3}
              fill="var(--panel)"
              stroke="var(--accent)"
              strokeWidth={1.5}
            />
          );
        })}
      </motion.g>

      {TRAITS.map((trait, index) => {
        const [x, y] = pointAt(index, 1.32);
        const anchor = x < cx - 8 ? "end" : x > cx + 8 ? "start" : "middle";
        return (
          <text
            key={trait.id}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize={size * 0.032}
            fontWeight={500}
            fill="var(--ink-3)"
          >
            {tr(trait.name)}
          </text>
        );
      })}
    </svg>
  );
}
