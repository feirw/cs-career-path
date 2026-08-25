"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { Clock3, Gauge, ListChecks, LogOut, Percent, Send, Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { CareerSwatch } from "@/components/CareerIcon";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Panel as Sheet, SheetLabel } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { Tooltip } from "@/components/ui/Tooltip";
import { CAREER_BY_ID, type CareerId } from "@/lib/careers";
import { cn } from "@/lib/cn";
import type { AdminStats } from "@/lib/db";
import { ui } from "@/lib/i18n";
import { EVERY_QUESTION } from "@/lib/questions";

const RANGES = [
  { days: 7, label: { el: "7 ημέρες", en: "7 days" } },
  { days: 30, label: { el: "30 ημέρες", en: "30 days" } },
  { days: 90, label: { el: "90 ημέρες", en: "90 days" } },
  { days: 3650, label: { el: "Όλα", en: "All time" } },
];

const EASE = [0.2, 0.9, 0.25, 1] as const;

export default function AdminPage() {
  const { tr } = useLocale();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(false);

  // Initialize CSRF token and check auth once on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        await fetch("/api/admin/login");
      } catch {
        // Ignore init errors
      }
      // Try to load stats to check if authenticated
      const to = Date.now();
      const from = to - 30 * 24 * 60 * 60 * 1000;
      const token = getCookie("cscp_csrf");
      if (!token) {
        setAuthed(false);
        return;
      }

      const response = await fetch(`/api/admin/stats?from=${from}&to=${to}`, {
        headers: { "x-csrf-token": token },
      });
      if (response.status === 401 || response.status === 403) {
        setAuthed(false);
      } else {
        setAuthed(true);
        setStats((await response.json()) as AdminStats);
      }
    };
    void initAuth();
  }, []);

  // Load stats when days changes (only if authenticated)
  useEffect(() => {
    if (authed !== true) return;

    const load = async () => {
      setLoading(true);
      const to = Date.now();
      const from = to - days * 24 * 60 * 60 * 1000;
      const token = getCookie("cscp_csrf");

      if (!token) {
        setAuthed(false);
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/admin/stats?from=${from}&to=${to}`, {
        headers: { "x-csrf-token": token },
      });
      if (response.status === 401 || response.status === 403) {
        setAuthed(false);
      } else {
        setStats((await response.json()) as AdminStats);
      }
      setLoading(false);
    };
    void load();
  }, [days, authed]);

  if (authed === null) {
    return (
      <>
        <AppHeader />
        <main className="mx-auto max-w-5xl px-5 py-10">
          <Skeleton className="h-8 w-56" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-24 rounded-2xl" />
            ))}
          </div>
          <Skeleton className="mt-8 h-64 rounded-2xl" />
        </main>
      </>
    );
  }

  if (!authed) return <LoginForm onSuccess={() => setAuthed(true)} />;

  return (
    <>
      <AppHeader />

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SheetLabel>Admin</SheetLabel>
            <h1 className="display mt-2 text-3xl font-bold tracking-tight">{tr(ui.adminTitle)}</h1>
          </div>
          <Button
            variant="quiet"
            size="sm"
            onClick={async () => {
              const token = getCookie("cscp_csrf");
              if (token) {
                await fetch("/api/admin/logout", {
                  method: "POST",
                  headers: { "x-csrf-token": token },
                });
              }
              setAuthed(false);
              // Get new CSRF token for next login
              await fetch("/api/admin/login");
            }}
          >
            <LogOut aria-hidden strokeWidth={1.75} className="size-4" />
            {tr(ui.logout)}
          </Button>
        </div>

        <div className="mt-7 inline-flex gap-1 rounded-2xl border border-[var(--rule)] bg-[var(--panel)] p-1">
          {RANGES.map((range) => {
            const active = days === range.days;
            return (
              <button
                key={range.days}
                type="button"
                onClick={() => setDays(range.days)}
                aria-pressed={active}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  active ? "text-white dark:text-[var(--ink-invert)]" : "text-[var(--ink-3)] hover:text-[var(--ink)]",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="range-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                )}
                <span className="relative">{tr(range.label)}</span>
              </button>
            );
          })}
        </div>

        {loading || !stats ? (
          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-24 rounded-2xl" />
              ))}
            </div>
            <Skeleton className="h-72 rounded-2xl" />
            <Skeleton className="h-56 rounded-2xl" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Metric
                icon={Send}
                label={tr({ el: "Υποβολές", en: "Submissions" })}
                value={String(stats.totals.submissions)}
              />
              <Metric
                icon={Users}
                label={tr({ el: "Έναρξεις", en: "Starts" })}
                value={String(stats.totals.starts)}
              />
              <Metric
                icon={Percent}
                label={tr({ el: "Ολοκλήρωση", en: "Completion" })}
                value={`${stats.totals.completionRate}%`}
                hint={tr({
                  el: `Εγκατάλειψη ${Math.max(0, 100 - stats.totals.completionRate)}%`,
                  en: `Drop-off ${Math.max(0, 100 - stats.totals.completionRate)}%`,
                })}
              />
              <Metric
                icon={Clock3}
                label={tr({ el: "Διάμεσος χρόνος", en: "Median time" })}
                value={`${stats.totals.medianDurationMin.toFixed(1)} ${tr({ el: "λ", en: "min" })}`}
              />
            </section>

            <p className="mt-3 text-xs text-[var(--ink-4)]">
              {tr({
                el: `Σύνολο από την αρχή: ${stats.totals.allTimeSubmissions} υποβολές · Γλώσσα: `,
                en: `All time: ${stats.totals.allTimeSubmissions} submissions · Language: `,
              })}
              {stats.localeSplit.map((row) => `${row.locale.toUpperCase()} ${row.count}`).join(" · ") ||
                "—"}
            </p>

            <Panel title={tr({ el: "Σύντομο vs πλήρες", en: "Quick vs full" })}>
              <div className="grid gap-3 sm:grid-cols-2">
                {stats.modeSplit.map((row) => (
                  <div
                    key={row.mode}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--rule)] bg-[var(--panel-2)] px-4 py-3"
                  >
                    <span className="grid size-8 place-items-center rounded-full border border-[var(--rule)] bg-[var(--panel)] text-[var(--ink-3)]">
                      {row.mode === "short" ? (
                        <Gauge aria-hidden strokeWidth={1.75} className="size-4" />
                      ) : (
                        <ListChecks aria-hidden strokeWidth={1.75} className="size-4" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">
                        {row.mode === "short"
                          ? tr({ el: "Σύντομο (20)", en: "Quick (20)" })
                          : tr({ el: "Πλήρες (60)", en: "Full (60)" })}
                      </p>
                      <p className="text-xs tabular-nums text-[var(--ink-3)]">
                        {row.submissions} / {row.starts} {tr({ el: "έναρξεις", en: "starts" })}
                      </p>
                    </div>
                    <span className="text-sm font-semibold tabular-nums">{row.completionRate}%</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title={tr({ el: "Ποια καριέρα βγαίνει πρώτη", en: "Which career comes first" })}>
              {stats.topCareerDistribution.length === 0 ? (
                <Empty />
              ) : (
                <ul className="space-y-2">
                  {stats.topCareerDistribution.map((row) => {
                    const career = CAREER_BY_ID[row.careerId as CareerId];
                    return (
                      <li key={row.careerId} className="flex items-center gap-3">
                        {career && <CareerSwatch id={career.id} color={career.color} size="sm" />}
                        <span className="w-36 shrink-0 truncate text-sm sm:w-52">
                          {career ? tr(career.name) : row.careerId}
                        </span>
                        <Bar value={row.share} color={career?.color ?? "var(--accent)"} />
                        <span className="w-20 shrink-0 text-right text-xs tabular-nums text-[var(--ink-3)]">
                          {row.count} · {row.share}%
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Panel>

            <Panel
              title={tr({ el: "Μέσο ταίριασμα ανά καριέρα", en: "Average match per career" })}
              hint={tr({
                el: "Βαθμονόμηση: αν μια καριέρα βγαίνει πάντα πολύ ψηλά ή πολύ χαμηλά, τα βάρη της θέλουν ρύθμιση.",
                en: "Calibration: if a career is always very high or very low, its weights need tuning.",
              })}
            >
              <ul className="space-y-2">
                {stats.avgMatchByCareer.map((row) => {
                  const career = CAREER_BY_ID[row.careerId as CareerId];
                  return (
                    <li key={row.careerId} className="flex items-center gap-3">
                      <span className="w-36 shrink-0 truncate text-sm sm:w-52">
                        {career ? tr(career.name) : row.careerId}
                      </span>
                      <Bar value={row.avgMatch} color={career?.color ?? "var(--accent)"} />
                      <span className="w-10 shrink-0 text-right text-xs tabular-nums text-[var(--ink-3)]">
                        {row.avgMatch}%
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Panel>

            <Panel title={tr({ el: "Υποβολές ανά ημέρα", en: "Submissions per day" })}>
              <DailyChart data={stats.perDay} />
            </Panel>

            <Panel
              title={tr({ el: "Κατανομή απαντήσεων", en: "Answer distribution" })}
              hint={tr({
                el: "Αν μια επιλογή δεν τη διαλέγει σχεδόν κανείς, μάλλον είναι κακοδιατυπωμένη.",
                en: "If almost nobody picks an option, it is probably badly worded.",
              })}
            >
              <div className="space-y-7">
                {EVERY_QUESTION.map((question) => {
                  const distribution = stats.answerDistribution[question.id] ?? {};
                  const total = Object.values(distribution).reduce((sum, n) => sum + n, 0);
                  return (
                    <div key={question.id}>
                      <p className="text-sm font-medium leading-snug">
                        <span className="mr-1.5 font-mono text-xs text-[var(--ink-4)]">
                          {question.id}
                        </span>
                        {tr(question.text)}
                      </p>
                      <ul className="mt-2.5 space-y-1.5">
                        {question.options.map((option) => {
                          const count = distribution[option.id] ?? 0;
                          const share = total > 0 ? Math.round((count / total) * 100) : 0;
                          return (
                            <li key={option.id} className="flex items-center gap-3 text-xs">
                              <span className="w-4 shrink-0 font-mono uppercase text-[var(--ink-4)]">
                                {option.id}
                              </span>
                              <span className="w-52 shrink-0 truncate text-[var(--ink-3)] sm:w-80">
                                {tr(option.label)}
                              </span>
                              <Bar value={share} color="var(--accent)" thin />
                              <span className="w-16 shrink-0 text-right tabular-nums text-[var(--ink-4)]">
                                {count} · {share}%
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Panel>

            <p className="mt-10 text-xs leading-relaxed text-[var(--ink-4)]">
              {tr({
                el: "Όλα τα δεδομένα είναι ανώνυμα: αποθηκεύονται μόνο απαντήσεις, βαθμολογίες και χρόνος. Καμία IP, κανένα email, κανένα cookie ταυτοποίησης.",
                en: "All data is anonymous: only answers, scores and timing are stored. No IP, no email, no identifying cookie.",
              })}
            </p>
          </motion.div>
        )}
      </main>
    </>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const { tr } = useLocale();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  // Ensure CSRF token exists when form loads
  useEffect(() => {
    const token = getCookie("cscp_csrf");
    if (!token) {
      void fetch("/api/admin/login");
    }
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(false);

    // Get CSRF token from cookie
    const csrfToken = getCookie("cscp_csrf");
    if (!csrfToken) {
      setError(true);
      setBusy(false);
      return;
    }

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, csrf: csrfToken }),
    });
    setBusy(false);
    if (response.ok) onSuccess();
    else setError(true);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        onSubmit={submit}
        className="rounded-3xl border border-[var(--rule)] bg-[var(--panel)] p-7"
      >
        <h1 className="text-lg font-bold tracking-tight">{tr(ui.adminLogin)}</h1>
        <label className="mt-6 block text-sm font-medium" htmlFor="password">
          {tr(ui.password)}
        </label>
        <input
          id="password"
          type="password"
          autoFocus
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={cn(
            "mt-2 h-11 w-full rounded-2xl border border-[var(--rule)] bg-[var(--paper)] px-4 text-sm outline-none",
            "transition-colors duration-200 ease-out placeholder:text-[var(--ink-4)]",
            "focus:border-[var(--ink)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
          )}
        />
        {error && <p className="mt-3 text-sm text-[var(--danger)]">{tr(ui.wrongPassword)}</p>}
        <Button type="submit" loading={busy} size="lg" className="mt-6 w-full">
          {tr(ui.login)}
        </Button>
      </motion.form>
    </main>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Send;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Sheet className="p-4">
      <div className="flex items-center gap-2 text-[var(--ink-3)]">
        <Icon aria-hidden strokeWidth={1.75} className="size-3.5" />
        <p className="text-[11px] font-medium uppercase tracking-[0.1em]">{label}</p>
      </div>
      <p className="mt-2 text-2xl font-bold tabular-nums tracking-tight">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-[var(--ink-4)]">{hint}</p>}
    </Sheet>
  );
}

function Panel({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <Sheet className="mt-6 p-6">
      <SheetLabel>{title}</SheetLabel>
      {hint && <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[var(--ink-4)]">{hint}</p>}
      <div className="mt-5">{children}</div>
    </Sheet>
  );
}

function Bar({ value, color, thin = false }: { value: number; color: string; thin?: boolean }) {
  return (
    <span
      className={cn(
        "flex-1 overflow-hidden rounded-full bg-[var(--panel-2)]",
        thin ? "h-1.5" : "h-2",
      )}
    >
      <motion.span
        className="block h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </span>
  );
}

function DailyChart({ data }: { data: { day: string; count: number }[] }) {
  const max = Math.max(1, ...data.map((point) => point.count));
  if (data.length === 0) return <Empty />;

  return (
    <div className="flex h-36 items-end gap-[3px]">
      {data.map((point, index) => (
        <Tooltip key={point.day} label={`${point.day} · ${point.count}`} className="h-full flex-1">
          <motion.span
            initial={{ height: 0 }}
            animate={{ height: `${Math.max(2, (point.count / max) * 100)}%` }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.01, 0.3), ease: EASE }}
            className={cn(
              "mt-auto w-full rounded-t-[3px] bg-[var(--accent)] transition-opacity duration-200 ease-out hover:opacity-80",
              point.count === 0 && "opacity-20",
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

function Empty() {
  const { tr } = useLocale();
  return (
    <p className="text-sm text-[var(--ink-3)]">
      {tr({ el: "Δεν υπάρχουν ακόμα δεδομένα.", en: "No data yet." })}
    </p>
  );
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop()?.split(";").shift() || null : null;
}
