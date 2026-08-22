"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleAlert, Info } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type ToastTone = "success" | "error" | "info";

type Toast = {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
};

type ToastInput = { title: string; description?: string; tone?: ToastTone };

const ToastContext = createContext<(toast: ToastInput) => void>(() => {});

const icons: Record<ToastTone, typeof Check> = {
  success: Check,
  error: CircleAlert,
  info: Info,
};

const toneClasses: Record<ToastTone, string> = {
  success: "text-[var(--success)]",
  error: "text-[var(--danger)]",
  info: "text-[var(--accent)]",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = useRef(0);

  const push = useCallback((input: ToastInput) => {
    const id = ++counter.current;
    const toast: Toast = { id, tone: input.tone ?? "info", title: input.title, description: input.description };
    setToasts((current) => [...current, toast].slice(-3));
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 3200);
  }, []);

  const value = useMemo(() => push, [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-2 p-4 sm:items-end sm:p-6"
      >
        <AnimatePresence initial={false}>
          {toasts.map((toast) => {
            const Icon = icons[toast.tone];
            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl",
                  "border border-[var(--rule)] bg-[var(--panel)] px-4 py-3 shadow-[0_12px_32px_-16px_rgba(21,34,52,0.35)]",
                )}
              >
                <Icon
                  aria-hidden
                  strokeWidth={1.75}
                  className={cn("mt-0.5 size-4 shrink-0", toneClasses[toast.tone])}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug">{toast.title}</p>
                  {toast.description && (
                    <p className="mt-0.5 text-[13px] leading-snug text-[var(--ink-3)]">
                      {toast.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
