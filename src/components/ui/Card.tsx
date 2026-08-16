"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type PanelProps = {
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">;

/** Απαλό πάνελ με μεγάλη ακτίνα — καμία αιχμηρή γωνία πουθενά στη σελίδα. */
export function Panel({ interactive = false, className, children, ...props }: PanelProps) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-[var(--rule)] bg-[var(--panel)]",
        "transition-all duration-200 ease-out",
        interactive &&
          "hover:-translate-y-0.5 hover:border-[var(--rule-strong)] hover:shadow-[0_8px_24px_-12px_rgba(21,34,52,0.18)]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Ετικέτα ενότητας με μια μικρή κουκκίδα αντί για γραμμή. */
export function SheetLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-[var(--accent)]" />
      <h2 className="eyebrow">{children}</h2>
    </div>
  );
}
