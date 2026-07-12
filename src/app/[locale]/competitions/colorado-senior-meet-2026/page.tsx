import type { Metadata } from "next";
import MeetRecap from "../../../../components/MeetRecap";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Colorado Senior Meet 2026 - Daniel Mitka",
  description:
    "Colorado Senior Meet, Feb 20-22, 2026, Denver: three wins from three events — 100Y breast (55.49), 200Y breast (2:02.09) and 400Y IM (3:59.33).",
  alternates: {
    canonical: `${siteUrl}/competitions/colorado-senior-meet-2026`,
  },
};

export default async function ColoradoSeniorMeet2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetRecap
      badge={cs ? "Šampionátní mítink" : "Championship-Level Meet"}
      title="Colorado Senior Meet"
      subtitle={
        cs
          ? "Krátký bazén (25 y) · Hilltoppers"
          : "Short course yards · Hilltoppers"
      }
      location="Denver, Colorado"
      dateLabel={cs ? "20.–22. února 2026" : "February 20–22, 2026"}
      altitudeNote={cs ? "1 600 m n. m." : "5,280 ft altitude"}
      heroImage="/sectionals2026/tops-duo.jpg"
      intro={
        cs
          ? "Generálka měsíc před Sectionals — a stoprocentní bilance. Tři starty, tři vítězství: obě prsařské tratě v tehdejších osobních rekordech a k tomu 400 y polohový závod. Poslední ostrý test formy před vrcholem yardové sezóny."
          : "A tune-up one month before Sectionals — and a perfect record. Three swims, three wins: both breaststroke events in then-personal bests, plus the 400Y IM. The last sharp test of form before the peak of the yards season."
      }
      stats={[
        {
          value: "3×",
          label: cs ? "vítězství ze 3 startů" : "wins from 3 swims",
          medal: true,
        },
        { value: "2", label: cs ? "osobní rekordy" : "personal bests" },
        { value: "25 y", label: cs ? "krátký bazén" : "short course" },
      ]}
      results={[
        {
          event: cs ? "100 y prsa" : "100Y Breaststroke",
          finalTime: "55.49",
          placement: cs ? "1. místo" : "1st",
          medal: "gold",
          pb: true,
        },
        {
          event: cs ? "200 y prsa" : "200Y Breaststroke",
          finalTime: "2:02.09",
          placement: cs ? "1. místo" : "1st",
          medal: "gold",
          pb: true,
          adjusted: "2:00.89",
        },
        {
          event: cs ? "400 y polohový závod" : "400Y Individual Medley",
          finalTime: "3:59.33",
          placement: cs ? "1. místo" : "1st",
          medal: "gold",
          adjusted: "3:54.33",
        },
      ]}
      highlights={
        cs
          ? [
              "Tři vítězství ze tří startů — 100 y prsa, 200 y prsa a 400 y polohový závod.",
              "Tehdejší osobní rekordy 55.49 na 100 y prsa a 2:02.09 na 200 y prsa — o měsíc později padly na Sectionals.",
              "Poslední velký test před Four Corners Speedo Sectionals.",
              "Denver leží v 1 600 m n. m. — časy od 200 y se oficiálně přepočítávají (−1,2 s na 200 y, −5 s na 400/500 y).",
            ]
          : [
              "Three wins from three swims — 100Y breast, 200Y breast and 400Y IM.",
              "Then-personal bests of 55.49 in the 100Y breast and 2:02.09 in the 200Y breast — both fell a month later at Sectionals.",
              "The last big test before the Four Corners Speedo Sectionals.",
              "Denver sits at 5,280 ft — times from 200Y up get an official altitude adjustment (−1.2 s per 200Y, −5 s per 400/500Y).",
            ]
      }
      gallery={[]}
      videos={[
        {
          type: "local",
          src: "/seniorMeet/race-video.mp4",
          title: cs
            ? "Momentka ze závodu — z ochozů s týmem"
            : "Race moment — poolside with the team",
        },
      ]}
      links={[
        {
          label: cs ? "Výsledky na SwimCloud" : "Results on SwimCloud",
          url: "https://www.swimcloud.com/results/379806/",
        },
      ]}
    />
  );
}
