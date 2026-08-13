"use client";

import { TRAITS, type TraitId } from "@/lib/traits";
import { useLocale } from "./LocaleProvider";

/**
 * Ένα απλό radar chart σε καθαρό SVG — χωρίς εξωτερική βιβλιοθήκη, ώστε να
 * τυπώνεται σωστά και σε PDF.
 */
export function RadarChart({
  values,
  size = 320,
}: {
  values: Record<TraitId, number>;
  size?: number;
}) {
  const { tr } = useLocale();
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.32;
  const n = TRAITS.length;

  const pointAt = (index: number, ratio: number) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    return [cx + Math.cos(angle) * radius * ratio, cy + Math.sin(angle) * radius * ratio] as const;
  };

  const rings = [0.25, 0.5, 0.75, 1];

  const polygon = TRAITS.map((trait, i) => {
    const ratio = Math.max(0.04, (values[trait.id] ?? 0) / 100);
    return pointAt(i, ratio).join(",");
  }).join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="h-auto w-full max-w-[420px]"
      role="img"
      aria-label={tr({ el: "Το προφίλ σου σε 8 διαστάσεις", en: "Your profile across 8 dimensions" })}
    >
      {rings.map((ring) => (
        <polygon
          key={ring}
          points={TRAITS.map((_, i) => pointAt(i, ring).join(",")).join(" ")}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1}
        />
      ))}
      {TRAITS.map((_, i) => {
        const [x, y] = pointAt(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--border)" strokeWidth={1} />;
      })}

      <polygon points={polygon} fill="var(--accent)" fillOpacity={0.25} stroke="var(--accent)" strokeWidth={2} />

      {TRAITS.map((trait, i) => {
        const [px, py] = pointAt(i, Math.max(0.04, (values[trait.id] ?? 0) / 100));
        return <circle key={trait.id} cx={px} cy={py} r={3} fill="var(--accent)" />;
      })}

      {TRAITS.map((trait, i) => {
        const [x, y] = pointAt(i, 1.28);
        const anchor = x < cx - 8 ? "end" : x > cx + 8 ? "start" : "middle";
        return (
          <text
            key={trait.id}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize={size * 0.036}
            fill="var(--text-muted)"
          >
            {tr(trait.name)}
          </text>
        );
      })}
    </svg>
  );
}
