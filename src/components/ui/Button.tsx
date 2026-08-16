"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "quiet";
type Size = "sm" | "md" | "lg" | "xl";

/** Πλήρως στρογγυλεμένα κουμπιά — το κυκλικό σχήμα είναι η βάση της γλώσσας. */
const base =
  "relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[0_6px_20px_-8px_rgba(74,114,184,0.65)] " +
    "hover:bg-[var(--accent-strong)] hover:shadow-[0_10px_28px_-8px_rgba(74,114,184,0.7)] " +
    "dark:text-[var(--ink-invert)]",
  outline:
    "border border-[var(--rule-strong)] bg-[var(--panel)] text-[var(--ink)] " +
    "hover:border-[var(--accent)] hover:text-[var(--accent)]",
  quiet: "text-[var(--ink-3)] hover:bg-[var(--panel-2)] hover:text-[var(--ink)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px] font-semibold",
  /** Για την κύρια ενέργεια της αρχικής: αρκετά μεγάλο ώστε να μη χρειάζεται εξήγηση. */
  xl: "h-[68px] px-8 text-[17px] font-semibold",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** Τρεις κουκκίδες σε κύκλο, στο ίδιο σχήμα με τα υπόλοιπα. */
function Dots() {
  return (
    <span aria-hidden className="inline-flex items-center gap-1">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="size-1.5 animate-pulse rounded-full bg-current"
          style={{ animationDelay: `${index * 150}ms`, animationDuration: "1s" }}
        />
      ))}
    </span>
  );
}

export const Button = forwardRef<
  HTMLButtonElement,
  CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(
  { variant = "primary", size = "md", loading = false, className, children, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {loading && <Dots />}
      {children}
    </button>
  );
});

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
