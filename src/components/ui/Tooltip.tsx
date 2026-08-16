"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Ελαφρύ tooltip χωρίς εξάρτηση: εμφανίζεται σε hover και σε focus (πληκτρολόγιο),
 * με fade + slide 4px. Δεν παγιδεύει pointer events.
 */
export function Tooltip({
  label,
  side = "top",
  children,
  className,
}: {
  label: string;
  side?: "top" | "bottom";
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={() => setOpen(false)}
    >
      {/* `contents` ώστε το παιδί να κληρονομεί το layout του γονέα (π.χ. flex bars). */}
      <span aria-describedby={open ? id : undefined} className="contents">
        {children}
      </span>
      <AnimatePresence>
        {open && (
          <motion.span
            id={id}
            role="tooltip"
            initial={{ opacity: 0, y: side === "top" ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: side === "top" ? 2 : -2 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "mono pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full",
              "bg-[var(--ink)] px-2.5 py-1 text-[11px] text-[var(--ink-invert)]",
              side === "top" ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]",
            )}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
