import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Commissioner, JetBrains_Mono, Manrope } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Footer } from "@/components/Footer";
import "./globals.css";

/** Commissioner: ουμανιστικό, με χαρακτήρα στα τερματικά, με πλήρη ελληνικά. */
const commissioner = Commissioner({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-commissioner",
});

/** Manrope: γεωμετρική, ψηλό x-height, με πλήρη ελληνικά — μόνο για τίτλους. */
const manrope = Manrope({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-display-face",
});

/** Ό,τι μετριέται —αριθμοί, υποδιαιρέσεις, ποσοστά— μπαίνει σε monospace. */
const mono = JetBrains_Mono({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-mono-face",
});

export const metadata: Metadata = {
  title: "CS Career Path — Τεστ καριέρας για φοιτητές πληροφορικής",
  description:
    "Δύο τεστ, 20 ή 50 ερωτήσεις, που δείχνουν ποιο μονοπάτι της πληροφορικής σου ταιριάζει ανάμεσα σε 12 καριέρες.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f15" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${commissioner.variable} ${manrope.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Τρέχει πριν το πρώτο paint ώστε να μην υπάρχει αναλαμπή. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <ThemeProvider>
          <LocaleProvider>
            <ToastProvider>
              <div className="flex-1">{children}</div>
              <Footer />
              {/* Επισκεψιμότητα χωρίς cookies και χωρίς προσωπικά δεδομένα. */}
              <Analytics />
            </ToastProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
