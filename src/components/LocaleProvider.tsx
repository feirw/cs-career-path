"use client";

import { motion } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { DEFAULT_LOCALE, type LS, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "cscp_locale";

type Ctx = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Σύντομο helper: tr({el, en}) */
  tr: (value: LS) => string;
};

const LocaleContext = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  tr: (value) => value[DEFAULT_LOCALE],
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "el" || stored === "en") setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const tr = useCallback((value: LS) => value[locale], [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, tr }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

/** Segmented control· ο δείκτης μετακινείται με shared layout animation. */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-[var(--rule)]",
        "bg-[var(--panel)] p-0.5 text-[11px] font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["el", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "relative rounded-full px-2.5 py-1.5 transition-colors duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
              active ? "text-white dark:text-[var(--ink-invert)]" : "text-[var(--ink-4)] hover:text-[var(--ink-2)]",
            )}
          >
            {active && (
              <motion.span
                layoutId="locale-pill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-full bg-[var(--accent)]"
                aria-hidden
              />
            )}
            <span className="relative">{code === "el" ? "ΕΛ" : "EN"}</span>
          </button>
        );
      })}
    </div>
  );
}
