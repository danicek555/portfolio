import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Czech Nationals Open 2026 - Daniel Mitka",
  description:
    "Upcoming Czech Open National Championships 2026 at Podolí, Prague — June 25–28, 2026.",
  alternates: {
    canonical: `${siteUrl}/competitions/czech-open-nationals-2026`,
  },
};

export default async function CzechOpenNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      upcoming
      title={cs ? "Mistrovství ČR OPEN 2026" : "Czech Nationals Open 2026"}
      subtitle={cs ? "Nadcházející závod" : "Upcoming Meet"}
      location={cs ? "Praha – Podolí, Česká republika" : "Prague – Podolí, Czech Republic"}
      date={cs ? "25.–28. června 2026" : "June 25–28, 2026"}
      image="/mcrOpen2026/start-block.jpg"
      summary={
        cs
          ? "Letní mistrovství České republiky OPEN na 50m bazénu v Podolí je jedním z největších domácích mítinků sezóny. Daniel se na tento závod připravuje po PRAHA 2026 s cílem startovat v silném poli napříč prsů, polohového závodu a volného způsobu."
          : "The Czech Open National Championships at Podolí's 50m pool is one of the biggest home meets of the season. Daniel is preparing for this meet after PRAHA 2026, targeting strong performances across breaststroke, individual medley, and freestyle."
      }
      highlights={
        cs
          ? [
              "3. kolo Českého poháru Arena Cup na 50m bazénu.",
              "Venue: plavecký stadion Podolí v Praze.",
              "Cíl: kvalitní výkony v hlavních disciplínách po návratu z USA.",
            ]
          : [
              "Round 3 of the Czech Cup Arena Cup on a 50m long-course pool.",
              "Venue: Podolí swimming stadium in Prague.",
              "Goal: strong performances in key events after returning from the USA.",
            ]
      }
      results={[
        {
          event: cs ? "Status" : "Status",
          time: cs ? "Nadcházející" : "Upcoming",
        },
        {
          event: cs ? "Typ závodu" : "Meet Type",
          time: cs ? "MČR OPEN" : "Czech Open Nationals",
        },
        {
          event: cs ? "Zaměření" : "Focus",
          time: cs ? "Prsa, polohový závod, volný způsob" : "Breast, IM, freestyle",
        },
      ]}
      sourceUrl="https://vysledky.czechswimming.cz/souteze/10130"
    />
  );
}
