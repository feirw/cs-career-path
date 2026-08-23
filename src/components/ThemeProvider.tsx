"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "cscp_theme";

type Ctx = { theme: Theme; setTheme: (theme: Theme) => void; resolved: "light" | "dark" };

const ThemeContext = createContext<Ctx>({ theme: "system", setTheme: () => {}, resolved: "light" });

/** Το `--paper` των δύο θεμάτων — το χρώμα της μπάρας του browser στο κινητό. */
const THEME_COLOR = { light: "#f3f6fa", dark: "#0b0f15" } as const;

/**
 * Το ίδιο script τρέχει και στο <head> (βλ. layout.tsx) ώστε να μην υπάρχει
 * αναλαμπή λευκού πριν φορτώσει η React.
 *
 * Το `localStorage` έχει δικό του try/catch: σε ιδιωτική περιήγηση και σε
 * in-app browsers (LinkedIn, Instagram) η ανάγνωση πετάει, και αν την αφήναμε
 * να ρίξει όλο το block δεν θα έμπαινε ούτε η κλάση `dark` — η σελίδα θα
 * άνοιγε λευκή ακόμα κι όταν το λειτουργικό ζητάει σκούρο.
 */
export const themeInitScript = `
try {
  var stored = null;
  try { stored = localStorage.getItem("${STORAGE_KEY}"); } catch (e) {}
  var dark = stored === "dark" || ((!stored || stored === "system") && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", dark ? "${THEME_COLOR.dark}" : "${THEME_COLOR.light}");
} catch (e) {}
`;

/**
 * Η μπάρα διευθύνσεων του κινητού ακολουθεί την επιλογή του χρήστη, όχι το
 * λειτουργικό: με media-based theme-color, το σκούρο θέμα εμφανιζόταν κάτω από
 * λευκή μπάρα όταν το τηλέφωνο ήταν σε light.
 */
function applyThemeColor(dark: boolean): void {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", dark ? THEME_COLOR.dark : THEME_COLOR.light);
}

/**
 * Το storage είναι βοήθημα, όχι προϋπόθεση: αν δεν διαβάζεται, πέφτουμε στο
 * "system" αντί να ρίξουμε τη σελίδα. Ίδια λογική με το `storageKeys.ts`.
 */
function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

function writeStoredTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Γεμάτο ή απενεργοποιημένο storage — η επιλογή ισχύει για τη συνεδρία.
  }
}

function apply(theme: Theme): "light" | "dark" {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  applyThemeColor(dark);
  return dark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => {
    const initial = readStoredTheme();
    setThemeState(initial);
    setResolved(apply(initial));
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme === "system") setResolved(apply("system"));
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  // Πρώτα η ορατή αλλαγή, μετά η αποθήκευση: αν το storage πετάξει, το πάτημα
  // του κουμπιού πρέπει να έχει ήδη κάνει τη δουλειά του.
  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    setResolved(apply(next));
    writeStoredTheme(next);
  }, []);

  const value = useMemo(() => ({ theme, setTheme, resolved }), [theme, setTheme, resolved]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

const options: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
];

/** Segmented control τριών θέσεων· ο δείκτης γλιστράει με layoutId. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-[var(--rule)] bg-[var(--panel)] p-0.5",
        className,
      )}
    >
      {options.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-pressed={active}
            aria-label={label}
            className={cn(
              "relative grid size-8 place-items-center rounded-full transition-colors duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
              active ? "text-white dark:text-[var(--ink-invert)]" : "text-[var(--ink-4)] hover:text-[var(--ink-2)]",
            )}
          >
            {active && <span className="absolute inset-0 rounded-full bg-[var(--accent)]" aria-hidden />}
            <Icon aria-hidden strokeWidth={1.75} className="relative size-3.5" />
          </button>
        );
      })}
    </div>
  );
}
