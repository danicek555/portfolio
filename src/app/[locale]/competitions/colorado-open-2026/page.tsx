import type { Metadata } from "next";
import MeetRecap from "../../../../components/MeetRecap";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "CO TOPS Colorado Open 2026 - Daniel Mitka",
  description:
    "CO TOPS Colorado Open, Jan 23-25, 2026, Denver: the Winter Juniors standard finally achieved in the 200Y IM (1:50.39), two individual wins and four winning relays.",
  alternates: {
    canonical: `${siteUrl}/competitions/colorado-open-2026`,
  },
};

export default async function ColoradoOpen2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetRecap
      badge={cs ? "Limit splněn" : "Cut Achieved"}
      title="CO TOPS Colorado Open"
      subtitle={
        cs
          ? "Krátký bazén (25 y) · Hilltoppers"
          : "Short course yards · Hilltoppers"
      }
      location="Denver, Colorado"
      dateLabel={cs ? "23.–25. ledna 2026" : "January 23–25, 2026"}
      altitudeNote={cs ? "1 600 m n. m." : "5,280 ft altitude"}
      heroImage="/sectionals2026/tops-duo.jpg"
      intro={
        cs
          ? "Závod, kde to konečně cinklo. Dvoustovka polohově za 1:50.39 znamenala splnění limitu, který v prosinci na Pioneer Open těsně unikl. K tomu druhé individuální vítězství na 400 y polohově, osobní rekordy na 100 y znak i 100 y motýlek a čtyři vyhrané štafety s Hilltoppers."
          : "The meet where it finally clicked. A 1:50.39 in the 200Y IM meant the standard that had slipped away at the Pioneer Open in December was finally achieved. Add a second individual win in the 400Y IM, personal bests in the 100Y back and 100Y fly, and four winning relays with the Hilltoppers."
      }
      stats={[
        {
          value: "2×",
          label: cs ? "individuální vítězství" : "individual wins",
          medal: true,
        },
        { value: "4×", label: cs ? "vítězné štafety" : "winning relays" },
        { value: "2", label: cs ? "osobní rekordy" : "personal bests" },
      ]}
      results={[
        {
          event: cs ? "200 y polohový závod" : "200Y Individual Medley",
          finalTime: "1:50.39",
          placement: cs ? "1. místo · limit splněn" : "1st · cut achieved",
          medal: "gold",
          adjusted: "1:49.19",
        },
        {
          event: cs ? "400 y polohový závod" : "400Y Individual Medley",
          finalTime: "4:23.99",
          placement: cs ? "1. místo" : "1st",
          medal: "gold",
          adjusted: "4:18.99",
        },
        {
          event: cs ? "100 y znak" : "100Y Backstroke",
          finalTime: "54.93",
          placement: cs ? "3. místo" : "3rd",
          medal: "bronze",
          pb: true,
        },
        {
          event: cs ? "100 y prsa" : "100Y Breaststroke",
          finalTime: "59.52",
          placement: cs ? "2. místo" : "2nd",
          medal: "silver",
        },
        {
          event: cs ? "100 y motýlek" : "100Y Butterfly",
          finalTime: "53.77",
          placement: cs ? "7. místo" : "7th",
          pb: true,
        },
        {
          event: cs ? "500 y volný způsob" : "500Y Freestyle",
          finalTime: "4:56.03",
          placement: cs ? "5. místo" : "5th",
          adjusted: "4:51.03",
        },
      ]}
      highlights={
        cs
          ? [
              "200 y polohový závod za 1:50.39 — splnění limitu, který v prosinci unikl.",
              "Dvě individuální vítězství (200 y a 400 y polohový závod).",
              "Osobní rekordy na 100 y znak (54.93) a 100 y motýlek (53.77).",
              "Čtyři vítězné štafety: kraulové 200 y (úsek 21.65) a 400 y (48.38), polohové 200 y (motýlek 23.12) a 400 y (prsa 58.54).",
              "Denver leží v 1 600 m n. m. — časy od 200 y se oficiálně přepočítávají (−1,2 s na 200 y, −5 s na 400/500 y).",
            ]
          : [
              "A 1:50.39 in the 200Y IM — the standard that slipped away in December, finally achieved.",
              "Two individual wins (200Y and 400Y IM).",
              "Personal bests in the 100Y back (54.93) and 100Y fly (53.77).",
              "Four winning relays: 200Y free (21.65 split), 400Y free (48.38), 200Y medley (23.12 fly) and 400Y medley (58.54 breast).",
              "Denver sits at 5,280 ft — times from 200Y up get an official altitude adjustment (−1.2 s per 200Y, −5 s per 400/500Y).",
            ]
      }
      gallery={[]}
      links={[
        {
          label: cs ? "Výsledky na SwimCloud" : "Results on SwimCloud",
          url: "https://www.swimcloud.com/swimmer/1828936/meets/",
        },
      ]}
    />
  );
}
