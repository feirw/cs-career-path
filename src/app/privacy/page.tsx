"use client";

import { AppHeader } from "@/components/AppHeader";
import { useLocale } from "@/components/LocaleProvider";

type Section = { heading: string; items: string[] };

const CONTENT: Record<"el" | "en", { title: string; updated: string; sections: Section[] }> = {
  el: {
    title: "Πολιτική Απορρήτου",
    updated: "Τελευταία ενημέρωση: 22 Αυγούστου 2026",
    sections: [
      {
        heading: "Τι δεδομένα συλλέγουμε",
        items: [
          "Τις απαντήσεις σου στο τεστ",
          "Τους υπολογισμένους βαθμούς ταιριάσματος ανά καριέρα",
          "Τον χρόνο που χρειάστηκε για την ολοκλήρωση",
          "Τη γλώσσα που διάλεξες (Ελληνικά / Αγγλικά)",
          "Το τεστ που διάλεξες (σύντομο / πλήρες)",
        ],
      },
      {
        heading: "Τι δεν συλλέγουμε",
        items: [
          "Διεύθυνση IP",
          "Email ή όνομα",
          "Cookies ταυτοποίησης",
          "Ιστορικό περιήγησης",
          "Τοποθεσία",
          "Αποτύπωμα συσκευής",
        ],
      },
      {
        heading: "Πώς χρησιμοποιούμε τα δεδομένα",
        items: [
          "Για να σου δείξουμε τα αποτελέσματά σου",
          "Για συγκεντρωτικά στατιστικά (ποιες καριέρες βγαίνουν συχνότερα)",
          "Για βελτίωση του τεστ (ποιες ερωτήσεις είναι κακοδιατυπωμένες)",
          "Δεν πουλάμε ούτε μοιραζόμαστε τα δεδομένα σου",
        ],
      },
      {
        heading: "Πόσο τα κρατάμε",
        items: [
          "Τα αποτελέσματα μένουν στη βάση ώστε το link να ανοίγει για πάντα",
          "Προστατεύονται με κρυπτογράφηση",
          "Μπορείς να ζητήσεις διαγραφή όποτε θέλεις",
        ],
      },
      {
        heading: "Δικαιώματα (GDPR)",
        items: [
          "Πρόσβαση: μπορείς να δεις τα δεδομένα σου μέσω του link του αποτελέσματος",
          "Εξαγωγή: μπορείς να κατεβάσεις το αποτέλεσμα σε PDF",
          "Διαγραφή: ζήτησέ την με email",
          "Διόρθωση: μπορείς να ξανακάνεις το τεστ",
        ],
      },
      {
        heading: "Ασφάλεια",
        items: [
          "Όλες οι συνδέσεις γίνονται με HTTPS",
          "Τα δεδομένα αποθηκεύονται σε cloud βάση (Supabase)",
          "Δεν μπορούμε να εγγυηθούμε απόλυτη ασφάλεια — κάνουμε ό,τι μπορούμε",
        ],
      },
      {
        heading: "Cookies",
        items: [
          "Cookies χρησιμοποιούνται μόνο για το admin panel (σύνδεση)",
          "Είναι HttpOnly και δεν διαβάζονται από JavaScript",
          "Μπορείς να τα διαγράψεις από τις ρυθμίσεις του browser",
        ],
      },
      {
        heading: "Τρίτα μέρη",
        items: [
          "Χρησιμοποιούμε Supabase για τη βάση δεδομένων",
          "Το Supabase προστατεύει τα δεδομένα σύμφωνα με τη δική του πολιτική",
          "Δεν χρησιμοποιούμε Google Analytics, Facebook Pixel ή άλλα εργαλεία παρακολούθησης",
        ],
      },
      {
        heading: "Αλλαγές",
        items: [
          "Μπορούμε να ενημερώσουμε αυτή την πολιτική",
          "Για ουσιώδεις αλλαγές θα το σημειώσουμε στη σελίδα",
        ],
      },
      {
        heading: "Επικοινωνία",
        items: ["Για ερωτήσεις σχετικά με το απόρρητό σου, στείλε email στο kgouridhs@gmail.com"],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 22 August 2026",
    sections: [
      {
        heading: "What data we collect",
        items: [
          "Your test answers",
          "Calculated career match scores",
          "Time taken to complete the test",
          "Language preference (Greek / English)",
          "Test mode (quick / full)",
        ],
      },
      {
        heading: "What we don't collect",
        items: [
          "IP address",
          "Email or name",
          "Authentication cookies",
          "Browser history",
          "Location data",
          "Device fingerprinting",
        ],
      },
      {
        heading: "How we use your data",
        items: [
          "To show you your results",
          "For aggregate analytics (which careers come up most often)",
          "To improve the test (identify poorly worded questions)",
          "We do not sell or share your data",
        ],
      },
      {
        heading: "How long we keep it",
        items: [
          "Results stay in the database so the link keeps working",
          "Protected with encryption",
          "You can request deletion at any time",
        ],
      },
      {
        heading: "Your rights (GDPR)",
        items: [
          "Access: you can view your data via the result link",
          "Export: you can download the result as a PDF",
          "Deletion: request it by email",
          "Correction: you can retake the test",
        ],
      },
      {
        heading: "Security",
        items: [
          "All connections use HTTPS",
          "Data is stored in a cloud database (Supabase)",
          "We cannot guarantee absolute security — we do our best",
        ],
      },
      {
        heading: "Cookies",
        items: [
          "Cookies are used only for admin panel login",
          "They are HttpOnly and cannot be read by JavaScript",
          "You can delete them from your browser settings",
        ],
      },
      {
        heading: "Third parties",
        items: [
          "We use Supabase for database hosting",
          "Supabase protects data per their privacy policy",
          "We do not use Google Analytics, Facebook Pixel, or other tracking tools",
        ],
      },
      {
        heading: "Changes",
        items: [
          "We may update this policy",
          "Material changes will be noted on this page",
        ],
      },
      {
        heading: "Contact",
        items: ["Questions about your privacy: email kgouridhs@gmail.com"],
      },
    ],
  },
};

export default function PrivacyPage() {
  const { locale } = useLocale();
  const text = CONTENT[locale];

  return (
    <>
      <AppHeader />
      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="eyebrow">CS Career Path</p>
        <h1 className="display mt-3 text-[32px] font-extrabold tracking-[-0.03em] sm:text-[40px]">
          {text.title}
        </h1>
        <p className="mt-3 text-[13px] text-[var(--ink-4)]">{text.updated}</p>

        <div className="mt-12 space-y-10">
          {text.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="display text-lg font-bold tracking-tight">{section.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink-2)]">
                    <span
                      aria-hidden
                      className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    <span>
                      {item.includes("kgouridhs@gmail.com") ? (
                        <>
                          {item.replace("kgouridhs@gmail.com", "")}
                          <a
                            href="mailto:kgouridhs@gmail.com"
                            className="rounded-full font-medium text-[var(--accent)] underline decoration-[var(--rule-strong)] underline-offset-4 hover:decoration-[var(--accent)]"
                          >
                            kgouridhs@gmail.com
                          </a>
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-14 text-[13px] text-[var(--ink-4)]">
          {locale === "el"
            ? "Ισχύει για την ιστοσελίδα cscareerpath.vercel.app."
            : "Applies to the cscareerpath.vercel.app website."}
        </p>
      </main>
    </>
  );
}
