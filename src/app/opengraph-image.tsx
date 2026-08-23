import { ImageResponse } from "next/og";
import { CAREERS } from "@/lib/careers";

export const alt = "CS Career Path — Τεστ καριέρας για φοιτητές πληροφορικής";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "CS Career Path";
const LEAD = "Τεστ καριέρας για φοιτητές πληροφορικής";
const SUB = "12 κατευθύνσεις · 20 ή 60 ερωτήσεις · χωρίς email";

/**
 * Τα χρώματα του σκούρου θέματος (globals.css). Η κάρτα είναι σκούρα επίτηδες:
 * το feed του LinkedIn είναι λευκό, οπότε ξεχωρίζει.
 */
const INK = "#e9eff7";
const INK_3 = "#95a3b6";
const PAPER = "#0b0f15";
const ACCENT = "#8fb2e8";

/**
 * Κατεβάζει τη γραμματοσειρά σε TrueType — το Satori δεν διαβάζει woff2, και ο
 * παλιός User-Agent είναι αυτό που κάνει το Google Fonts να σερβίρει ttf. Το
 * `text` περιορίζει το subset στους χαρακτήρες που χρησιμοποιούμε, ώστε να
 * μπουν σίγουρα τα ελληνικά χωρίς να κατεβάσουμε ολόκληρη τη γραμματοσειρά.
 */
async function loadFont(weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Commissioner:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36",
      },
    }).then((response) => response.text());

    const source = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
    if (!source) return null;

    return await fetch(source[1]).then((response) => response.arrayBuffer());
  } catch {
    // Χωρίς τη γραμματοσειρά η εικόνα βγαίνει με την προεπιλεγμένη αντί να
    // αποτύχει το request — καλύτερα άσχημη κάρτα παρά καθόλου κάρτα.
    return null;
  }
}

export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([
    loadFont(700, TITLE + LEAD),
    loadFont(400, SUB),
  ]);

  const fonts = [
    bold && { name: "Commissioner", data: bold, weight: 700 as const, style: "normal" as const },
    regular && {
      name: "Commissioner",
      data: regular,
      weight: 400 as const,
      style: "normal" as const,
    },
  ].filter((font): font is NonNullable<typeof font> => font !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "Commissioner",
          position: "relative",
        }}
      >
        {/* Ομόκεντροι κύκλοι — το ίδιο μοτίβο με το λογότυπο και το radar. */}
        <div style={{ display: "flex", position: "absolute", top: -260, right: -200 }}>
          <svg width="820" height="820" viewBox="0 0 820 820">
            {[400, 320, 240, 160, 80].map((r, i) => (
              <circle
                key={r}
                cx="410"
                cy="410"
                r={r}
                fill="none"
                stroke={ACCENT}
                strokeWidth="2"
                opacity={0.07 + i * 0.03}
              />
            ))}
            <circle cx="410" cy="410" r="26" fill={ACCENT} opacity="0.5" />
          </svg>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 28 28">
            <circle cx="14" cy="14" r="10.5" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0.3" />
            <path
              d="M14 3.5 A10.5 10.5 0 0 1 23.093 19.25"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="3" fill={ACCENT} />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 700, color: INK, letterSpacing: "-0.01em" }}>
            {TITLE}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            {LEAD}
          </div>
          <div style={{ fontSize: 30, color: INK_3, letterSpacing: "-0.01em" }}>{SUB}</div>
        </div>

        {/* Τα 12 χρώματα των καριερών: η μόνη έγχρωμη νότα, όπως και στο site. */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {CAREERS.map((career) => (
            <div
              key={career.id}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                background: career.color,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined },
  );
}
