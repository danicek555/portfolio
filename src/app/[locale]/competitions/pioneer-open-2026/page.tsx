import type { Metadata } from "next";
import MeetRecap from "../../../../components/MeetRecap";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMeetMetadata({
    locale,
  slug: "pioneer-open-2026",
  title: "Pioneer Open 2025 — Daniel Mitka | Three Silvers in Denver",
  description:
    "Daniel Mitka at the Pioneer Open in Denver, Dec 5–7, 2025: three silver-medal finals and three personal bests (100y breast 56.14, 200y breast 2:03.57) for the University of Denver Hilltoppers — narrowly missing the Winter Juniors cut.",
  keywords: [
    "Daniel Mitka",
    "Pioneer Open 2025",
    "Denver swimming",
    "100y breaststroke",
    "200y breaststroke",
    "200y IM",
    "short course yards",
    "University of Denver Hilltoppers",
    "Winter Juniors",
    "personal best",
  ],
  image: "/sectionals2026/tops_picture.jpg",
  publishedTime: "2025-12-07",
  });
}

export default async function PioneerOpen2025Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <>
      <MeetJsonLd
        id="pioneer-open-2026"
        locale={locale}
        name="Pioneer Open 2025"
        description="Short-course-yards meet in Denver where Daniel Mitka won three silver medals and set three personal bests."
        startDate="2025-12-05"
        endDate="2025-12-07"
        venue="Denver"
        city="Denver"
        country="United States"
        region="Colorado"
        level="Regional"
        awards={[
          "Silver — 100y Breaststroke (56.14)",
          "Silver — 200y Breaststroke (2:03.57)",
          "Silver — 200y IM",
        ]}
      />
      <MeetRecap
      badge={cs ? "Útok na Winter Juniors" : "Chasing Winter Juniors"}
      title="Pioneer Open"
      subtitle={
        cs
          ? "Krátký bazén (25 y) · Hilltoppers"
          : "Short course yards · Hilltoppers"
      }
      location="Denver, Colorado"
      dateLabel={cs ? "5.–7. prosince 2025" : "December 5–7, 2025"}
      altitudeNote={cs ? "1 600 m n. m." : "5,280 ft altitude"}
      heroImage="/sectionals2026/tops_picture.jpg"
      intro={
        cs
          ? "Prosincový útok na kvalifikaci na Speedo Winter Junior Championships. Limit nakonec o kousek unikl — velká škoda. O to víc ale platily obrovské posuny: tři osobní rekordy, tři stříbra z finále a jistota, že se limit blíží."
          : "A December run at the Speedo Winter Junior Championships cut. The qualifying time slipped away by a whisker — a real shame. But the improvements were massive: three personal bests, three silver-medal finals and the certainty that the cut was coming."
      }
      stats={[
        {
          value: "3×",
          label: cs ? "stříbro z finále" : "silver-medal finals",
          medal: true,
        },
        { value: "3", label: cs ? "osobní rekordy" : "personal bests" },
        { value: "3", label: cs ? "finálové starty" : "finals swims" },
      ]}
      results={[
        {
          event: cs ? "100 y prsa" : "100Y Breaststroke",
          finalTime: "56.14",
          placement: cs ? "2. místo" : "2nd",
          medal: "silver",
          pb: true,
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "59.29" },
            { stage: cs ? "Finále" : "Finals", time: "56.14", pb: true },
          ],
        },
        {
          event: cs ? "200 y prsa" : "200Y Breaststroke",
          finalTime: "2:03.57",
          placement: cs ? "2. místo" : "2nd",
          medal: "silver",
          pb: true,
          adjusted: "2:02.37",
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "2:05.27", pb: true },
            { stage: cs ? "Finále" : "Finals", time: "2:03.57", pb: true },
          ],
        },
        {
          event: cs ? "200 y polohový závod" : "200Y Individual Medley",
          finalTime: "1:51.28",
          placement: cs ? "2. místo" : "2nd",
          medal: "silver",
          adjusted: "1:50.08",
          progression: [
            { stage: cs ? "Rozplavby" : "Prelims", time: "1:51.24" },
            { stage: cs ? "Finále" : "Finals", time: "1:51.28" },
          ],
        },
        {
          event: cs ? "400 y polohový závod" : "400Y Individual Medley",
          finalTime: "4:05.68",
          placement: cs ? "3. místo v rozplavbách" : "3rd in prelims",
          adjusted: "4:00.68",
        },
        {
          event: cs
            ? "200 y polohová štafeta — motýlkový úsek"
            : "200Y Medley Relay — fly leg",
          finalTime: "22.78",
          placement: cs ? "3. místo" : "3rd",
        },
      ]}
      highlights={
        cs
          ? [
              "Tři stříbrné medaile z finále — 100 y prsa, 200 y prsa a 200 y polohový závod.",
              "Osobní rekordy 56.14 na 100 y prsa a 2:03.57 na 200 y prsa.",
              "Limit na Winter Juniors těsně unikl — padl o měsíc později na Colorado Open.",
              "Denver leží v 1 600 m n. m. — časy od 200 y se oficiálně přepočítávají (−1,2 s na 200 y, −5 s na 400/500 y).",
            ]
          : [
              "Three silver-medal finals — 100Y breast, 200Y breast and 200Y IM.",
              "Personal bests of 56.14 in the 100Y breast and 2:03.57 in the 200Y breast.",
              "The Winter Juniors cut slipped away narrowly — it fell a month later at the Colorado Open.",
              "Denver sits at 5,280 ft — times from 200Y up get an official altitude adjustment (−1.2 s per 200Y, −5 s per 400/500Y).",
            ]
      }
      gallery={[]}
      links={[
        {
          label: cs ? "Výsledky na SwimCloud" : "Results on SwimCloud",
          url: "https://www.swimcloud.com/results/364267/swimmer/1828936/",
        },
      ]}
      />
    </>
  );
}
