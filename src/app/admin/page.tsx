"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { LanguageToggle, LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { CAREER_BY_ID, type CareerId } from "@/lib/careers";
import { ui } from "@/lib/i18n";
import { QUESTIONS } from "@/lib/questions";
import type { AdminStats } from "@/lib/db";

const RANGES = [
  { days: 7, label: { el: "7 ημέρες", en: "7 days" } },
  { days: 30, label: { el: "30 ημέρες", en: "30 days" } },
  { days: 90, label: { el: "90 ημέρες", en: "90 days" } },
  { days: 3650, label: { el: "Όλα", en: "All time" } },
];

export default function AdminPage() {
  return (
    <LocaleProvider>
      <Admin />
    </LocaleProvider>
  );
}

function Admin() {
  const { tr } = useLocale();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (rangeDays: number) => {
    setLoading(true);
    const to = Date.now();
    const from = to - rangeDays * 24 * 60 * 60 * 1000;
    const response = await fetch(`/api/admin/stats?from=${from}&to=${to}`);
    if (response.status === 401) {
      setAuthed(false);
      setLoading(false);
      return;
    }
    setAuthed(true);
    setStats((await response.json()) as AdminStats);
    setLoading(false);
  }, []);

  useEffect(() => {
    void load(days);
  }, [days, load]);

  if (authed === null) {
    return <main className="p-10 text-sm text-[var(--text-muted)]">…</main>;
  }

  if (!authed) {
    return <LoginForm onSuccess={() => void load(days)} />;
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-8 sm:py-12">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/" className="text-sm font-semibold text-[var(--accent)]">
            {tr(ui.appName)}
          </Link>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">{tr(ui.adminTitle)}</h1>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" });
              setAuthed(false);
            }}
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            {tr(ui.logout)}
          </button>
        </div>
      </header>

      <div className="mb-8 inline-flex overflow-hidden rounded-xl border border-[var(--border)] text-sm">
        {RANGES.map((range) => (
          <button
            key={range.days}
            type="button"
            onClick={() => setDays(range.days)}
            className={`px-4 py-2 transition-colors ${
              days === range.days
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {tr(range.label)}
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-[var(--text-muted)]">…</p>}

      {stats && (
        <>
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Metric
              label={tr({ el: "Ολοκληρωμένες υποβολές", en: "Completed submissions" })}
              value={String(stats.totals.submissions)}
            />
            <Metric
              label={tr({ el: "Έναρξεις τεστ", en: "Test starts" })}
              value={String(stats.totals.starts)}
            />
            <Metric
              label={tr({ el: "Ποσοστό ολοκλήρωσης", en: "Completion rate" })}
              value={`${stats.totals.completionRate}%`}
              hint={tr({
                el: `Εγκατάλειψη: ${Math.max(0, 100 - stats.totals.completionRate)}%`,
                en: `Drop-off: ${Math.max(0, 100 - stats.totals.completionRate)}%`,
              })}
            />
            <Metric
              label={tr({ el: "Διάμεσος χρόνος", en: "Median duration" })}
              value={`${stats.totals.medianDurationMin.toFixed(1)} ${tr({ el: "λ", en: "min" })}`}
            />
          </section>

          <p className="mt-3 text-xs text-[var(--text-muted)]">
            {tr({
              el: `Συνολικά από την αρχή: ${stats.totals.allTimeSubmissions} υποβολές. Γλώσσα: `,
              en: `All time: ${stats.totals.allTimeSubmissions} submissions. Language: `,
            })}
            {stats.localeSplit.map((l) => `${l.locale.toUpperCase()} ${l.count}`).join(" · ") || "—"}
          </p>

          <Panel title={tr({ el: "Ποια καριέρα βγαίνει πρώτη", en: "Which career comes out first" })}>
            {stats.topCareerDistribution.length === 0 ? (
              <Empty />
            ) : (
              <ul className="space-y-2.5">
                {stats.topCareerDistribution.map((row) => {
                  const career = CAREER_BY_ID[row.careerId as CareerId];
                  return (
                    <li key={row.careerId} className="flex items-center gap-3">
                      <span className="w-6 text-center" aria-hidden>
                        {career?.emoji ?? "•"}
                      </span>
                      <span className="w-40 shrink-0 truncate text-sm sm:w-56">
                        {career ? tr(career.name) : row.careerId}
                      </span>
                      <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--surface-2)]">
                        <span
                          className="bar-fill block h-full rounded-full"
                          style={{
                            width: `${row.share}%`,
                            backgroundColor: career?.color ?? "var(--accent)",
                          }}
                        />
                      </span>
                      <span className="w-24 shrink-0 text-right text-xs tabular-nums text-[var(--text-muted)]">
                        {row.count} · {row.share}%
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </Panel>

          <Panel
            title={tr({
              el: "Μέσο ταίριασμα ανά καριέρα (σε όλες τις υποβολές)",
              en: "Average match per career (across all submissions)",
            })}
            hint={tr({
              el: "Χρήσιμο για βαθμονόμηση: αν μια καριέρα βγαίνει πάντα πολύ ψηλά ή πολύ χαμηλά, τα βάρη της θέλουν ρύθμιση.",
              en: "Useful for calibration: if a career is always very high or very low, its weights need tuning.",
            })}
          >
            {stats.avgMatchByCareer.length === 0 ? (
              <Empty />
            ) : (
              <ul className="grid gap-2 sm:grid-cols-2">
                {stats.avgMatchByCareer.map((row) => {
                  const career = CAREER_BY_ID[row.careerId as CareerId];
                  return (
                    <li key={row.careerId} className="flex items-center justify-between gap-3 text-sm">
                      <span className="truncate">
                        {career?.emoji} {career ? tr(career.name) : row.careerId}
                      </span>
                      <span className="tabular-nums text-[var(--text-muted)]">{row.avgMatch}%</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </Panel>

          <Panel title={tr({ el: "Υποβολές ανά ημέρα", en: "Submissions per day" })}>
            <DailyChart data={stats.perDay} />
          </Panel>

          <Panel
            title={tr({ el: "Κατανομή απαντήσεων ανά ερώτηση", en: "Answer distribution per question" })}
            hint={tr({
              el: "Αν μια επιλογή δεν τη διαλέγει σχεδόν κανείς, μάλλον είναι κακοδιατυπωμένη.",
              en: "If almost nobody picks an option, it is probably badly worded.",
            })}
          >
            <div className="space-y-6">
              {QUESTIONS.map((question) => {
                const dist = stats.answerDistribution[question.id] ?? {};
                const total = Object.values(dist).reduce((sum, n) => sum + n, 0);
                return (
                  <div key={question.id}>
                    <p className="text-sm font-medium">
                      <span className="text-[var(--text-muted)]">{question.id}. </span>
                      {tr(question.text)}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {question.options.map((option) => {
                        const count = dist[option.id] ?? 0;
                        const share = total > 0 ? Math.round((count / total) * 100) : 0;
                        return (
                          <li key={option.id} className="flex items-center gap-3 text-xs">
                            <span className="w-4 shrink-0 font-mono uppercase text-[var(--text-muted)]">
                              {option.id}
                            </span>
                            <span className="w-56 shrink-0 truncate text-[var(--text-muted)] sm:w-80">
                              {tr(option.label)}
                            </span>
                            <span className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--surface-2)]">
                              <span
                                className="bar-fill block h-full rounded-full bg-[var(--accent)]"
                                style={{ width: `${share}%` }}
                              />
                            </span>
                            <span className="w-16 shrink-0 text-right tabular-nums text-[var(--text-muted)]">
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

          <p className="mt-10 text-xs text-[var(--text-muted)]">
            {tr({
              el: "Όλα τα δεδομένα είναι ανώνυμα: αποθηκεύονται μόνο απαντήσεις, βαθμολογίες και χρόνος. Καμία IP, κανένα email, κανένα cookie ταυτοποίησης.",
              en: "All data is anonymous: only answers, scores and timing are stored. No IP, no email, no identifying cookie.",
            })}
          </p>
        </>
      )}
    </main>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const { tr } = useLocale();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(false);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (response.ok) onSuccess();
    else setError(true);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
      <form onSubmit={submit} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
        <h1 className="text-xl font-bold">{tr(ui.adminLogin)}</h1>
        <label className="mt-5 block text-sm font-medium" htmlFor="password">
          {tr(ui.password)}
        </label>
        <input
          id="password"
          type="password"
          autoFocus
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 outline-none focus:border-[var(--accent)]"
        />
        {error && <p className="mt-3 text-sm text-red-500">{tr(ui.wrongPassword)}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-5 w-full rounded-xl bg-[var(--accent)] px-5 py-2.5 font-semibold text-white disabled:opacity-60"
        >
          {tr(ui.login)}
        </button>
      </form>
    </main>
  );
}

function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-[var(--text-muted)]">{hint}</p>}
    </div>
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
    <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
        {title}
      </h2>
      {hint && <p className="mt-1.5 text-xs text-[var(--text-muted)]">{hint}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function DailyChart({ data }: { data: { day: string; count: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.count));
  if (data.length === 0) return <Empty />;
  return (
    <div className="flex h-32 items-end gap-[2px]">
      {data.map((point) => (
        <div
          key={point.day}
          title={`${point.day}: ${point.count}`}
          className="flex-1 rounded-t bg-[var(--accent)]"
          style={{ height: `${Math.max(2, (point.count / max) * 100)}%`, opacity: point.count ? 1 : 0.15 }}
        />
      ))}
    </div>
  );
}

function Empty() {
  const { tr } = useLocale();
  return (
    <p className="text-sm text-[var(--text-muted)]">
      {tr({ el: "Δεν υπάρχουν ακόμα δεδομένα.", en: "No data yet." })}
    </p>
  );
}
