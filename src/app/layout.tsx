import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS Career Path — Τεστ καριέρας για φοιτητές πληροφορικής",
  description:
    "50 ερωτήσεις που δείχνουν ποιο μονοπάτι της πληροφορικής σου ταιριάζει, ανάμεσα σε 12 καριέρες.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
