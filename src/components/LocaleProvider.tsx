"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
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

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={`no-print inline-flex overflow-hidden rounded-full border border-[var(--border)] text-xs font-medium ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["el", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`px-3 py-1.5 transition-colors ${
            locale === code
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)]"
          }`}
        >
          {code === "el" ? "ΕΛ" : "EN"}
        </button>
      ))}
    </div>
  );
}
