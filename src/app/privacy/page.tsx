"use client";

import { AppHeader } from "@/components/AppHeader";
import { useLocale } from "@/components/LocaleProvider";

export default function PrivacyPage() {
  const { tr, locale } = useLocale();

  const content = {
    el: {
      title: "Πολιτική Απορρήτου",
      lastUpdated: "Τελευταία ενημέρωση:",
      sections: [
        {
          heading: "1. Τι Δεδομένα Συλλέγουμε",
          items: [
            "✅ Οι απαντήσεις σας στις 60 ερωτήσεις",
            "✅ Οι υπολογισμένοι βαθμοί ταιριάσματος ανά καριέρα",
            "✅ Ο χρόνος που χρειάστηκε για το test",
            "✅ Η γλώσσα που διάλεξατε (Ελληνικά/Αγγλικά)",
            "✅ Το mode που διαλέξατε (Σύντομο/Πλήρες)",
          ],
        },
        {
          heading: "2. Τι ΔΕΝ Συλλέγουμε",
          items: [
            "❌ IP address σας",
            "❌ Email ή όνομα",
            "❌ Cookies ταυτοποίησης",
            "❌ Browser history",
            "❌ Location data",
            "❌ Device fingerprinting",
          ],
        },
        {
          heading: "3. Πώς Χρησιμοποιούμε τα Δεδομένα",
          items: [
            "📊 Για να σας δείξουμε τα αποτελέσματά σας",
            "📈 Για στατιστικά αναλύσεις (ποια καριέρα είναι δημοφιλής)",
            "🔍 Για βελτίωση του test (ποιες ερωτήσεις είναι κακά διατυπωμένες)",
            "⚙️ ΔΕΝ πουλάμε ή μοιράζουμε τα δεδομένα σας",
          ],
        },
        {
          heading: "4. Πόσο Κρατάμε τα Δεδομένα",
          items: [
            "∞ Τα δεδομένα σας αποθηκεύονται διαρκώς στη βάση δεδομένων",
            "🔒 Προστατεύονται με encryption",
            "🗑️ Μπορείτε να ζητήσετε διαγραφή ενημέρωσης",
          ],
        },
        {
          heading: "5. Δικαιώματα Χρήστη (GDPR)",
          items: [
            "📥 Δικαίωμα πρόσβασης: Μπορείτε να δείτε τα δεδομένα σας",
            "📤 Δικαίωμα εξαγωγής: Μπορείτε να λάβετε αντίγραφο",
            "🗑️ Δικαίωμα διαγραφής: Ζητήστε διαγραφή των δεδομένων σας",
            "✏️ Δικαίωμα διόρθωσης: Μπορείτε να ξαναεκτελέσετε το test",
          ],
        },
        {
          heading: "6. Ασφάλεια",
          items: [
            "🔐 Χρησιμοποιούμε HTTPS encryption για όλες τις συνδέσεις",
            "🔒 Τα δεδομένα αποθηκεύονται σε ασφαλή cloud database (Supabase)",
            "⚠️ Δεν μπορούμε να εγγυηθούμε 100% ασφάλεια, αλλά κάνουμε το καλύτερό μας",
          ],
        },
        {
          heading: "7. Cookies",
          items: [
            "🍪 Χρησιμοποιούμε cookies μόνο για το admin panel (login)",
            "🍪 Τα cookies είναι HttpOnly και δεν μπορούν να διαβαστούν από JavaScript",
            "🗑️ Μπορείτε να τα διαγράψετε ανά πάσα στιγμή από τις ρυθμίσεις του browser",
          ],
        },
        {
          heading: "8. Τρίτα Μέρη",
          items: [
            "📦 Χρησιμοποιούμε Supabase για τη βάση δεδομένων",
            "🌐 Supabase προστατεύει τα δεδομένα σύμφωνα με την πολιτική τους",
            "⛔ Δεν χρησιμοποιούμε Google Analytics, Facebook Pixels, ή άλλα tracking tools",
          ],
        },
        {
          heading: "9. Αλλαγές σε Αυτήν την Πολιτική",
          items: [
            "📝 Μπορούμε να ενημερώσουμε αυτήν την πολιτική χωρίς προειδοποίηση",
            "📧 Αν υπάρχουν σημαντικές αλλαγές, θα σας ενημερώσουμε",
          ],
        },
        {
          heading: "10. Επικοινωνία",
          items: [
            "📧 Για ερωτήσεις σχετικά με την απορρήτευσή σας:",
            "✉️ Στείλτε email: kgouridhs@gmail.com",
            "🇬🇧 Ή επισκεφθείτε τη σελίδα Privacy Policy στα Αγγλικά",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      sections: [
        {
          heading: "1. What Data We Collect",
          items: [
            "✅ Your answers to the 60 questions",
            "✅ Your calculated career match scores",
            "✅ Time taken to complete the test",
            "✅ Language preference (Greek/English)",
            "✅ Test mode (Quick/Full)",
          ],
        },
        {
          heading: "2. What We DON'T Collect",
          items: [
            "❌ IP address",
            "❌ Email or name",
            "❌ Authentication cookies",
            "❌ Browser history",
            "❌ Location data",
            "❌ Device fingerprinting",
          ],
        },
        {
          heading: "3. How We Use Your Data",
          items: [
            "📊 To show you your assessment results",
            "📈 For analytics (which careers are popular)",
            "🔍 To improve the test (identify poorly worded questions)",
            "⚙️ We do NOT sell or share your data",
          ],
        },
        {
          heading: "4. Data Retention",
          items: [
            "∞ Your data is stored indefinitely in our database",
            "🔒 Protected with encryption",
            "🗑️ You can request deletion anytime",
          ],
        },
        {
          heading: "5. Your Rights (GDPR)",
          items: [
            "📥 Right of access: You can view your data",
            "📤 Right to export: You can download your data",
            "🗑️ Right to deletion: You can request data deletion",
            "✏️ Right to correction: You can retake the test",
          ],
        },
        {
          heading: "6. Security",
          items: [
            "🔐 All connections use HTTPS encryption",
            "🔒 Data stored in secure cloud database (Supabase)",
            "⚠️ We cannot guarantee 100% security, but we do our best",
          ],
        },
        {
          heading: "7. Cookies",
          items: [
            "🍪 We only use cookies for admin panel login",
            "🍪 Cookies are HttpOnly and cannot be read by JavaScript",
            "🗑️ You can delete them anytime from browser settings",
          ],
        },
        {
          heading: "8. Third Parties",
          items: [
            "📦 We use Supabase for database hosting",
            "🌐 Supabase protects data per their privacy policy",
            "⛔ We do NOT use Google Analytics, Facebook Pixels, or tracking",
          ],
        },
        {
          heading: "9. Changes to This Policy",
          items: [
            "📝 We may update this policy without notice",
            "📧 For major changes, we will notify you",
          ],
        },
        {
          heading: "10. Contact",
          items: [
            "📧 Questions about your privacy?",
            "✉️ Email: kgouridhs@gmail.com",
            "🇬🇷 Or visit the Privacy Policy in Greek",
          ],
        },
      ],
    },
  };

  const text = locale === "el" ? content.el : content.en;

  return (
    <>
      <AppHeader />
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 pb-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">{text.title}</h1>
          <p className="text-sm text-[var(--ink-3)]">
            {text.lastUpdated} August 22, 2026
          </p>
        </div>

        <div className="space-y-8">
          {text.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold mb-4 text-[var(--ink)]">
                {section.heading}
              </h2>
              <ul className="space-y-2 text-[var(--ink-2)] leading-relaxed">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3">
                    <span className="shrink-0 text-sm">{item.split(" ")[0]}</span>
                    <span>{item.substring(item.indexOf(" ") + 1)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--rule)] text-sm text-[var(--ink-4)]">
          <p>
            {locale === "el"
              ? "Αυτή η πολιτική απορρήτου ισχύει για την ιστοσελίδα cscareerpath.vercel.app"
              : "This privacy policy applies to the cscareerpath.vercel.app website"}
          </p>
        </div>
      </main>
    </>
  );
}
