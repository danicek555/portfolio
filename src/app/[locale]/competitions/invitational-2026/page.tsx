import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "CO TOPS Denver Invitational - Daniel Mitka",
  description:
    "CO TOPS Denver Invitational, Nov 7-9, 2025: Daniel's first meet in the USA and first short-course-yards meet ever — personal bests in nearly every event.",
  alternates: {
    canonical: `${siteUrl}/competitions/invitational-2026`,
  },
};

export default async function DenverInvitational2025Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetShowcase
      badge={cs ? "První závod v USA" : "First Meet in the USA"}
      title="CO TOPS Denver Invitational"
      subtitle={
        cs
          ? "První yardový závod · Hilltoppers"
          : "First yards meet · Hilltoppers"
      }
      location="Denver, Colorado"
      dateLabel={cs ? "7.–9. listopadu 2025" : "November 7–9, 2025"}
      altitudeNote={cs ? "1 600 m n. m." : "5,280 ft altitude"}
      heroImage="/sectionals2026/tops-team.jpg"
      intro={
        cs
          ? "Úplně první závod v USA — a zároveň úplně první start v pětadvacetiyardovém bazénu. Tři dny seznamování s americkým formátem závodění, novým týmem a novým prostředím, ze kterých se téměř každý start proměnil v osobní rekord."
          : "The very first meet in the USA — and the very first start in a 25-yard pool. Three days of learning the American racing format with a new team, and nearly every swim turned into a personal best."
      }
      stats={[
        { value: "1.", label: cs ? "závod v USA" : "meet in the USA" },
        { value: "7", label: cs ? "disciplín" : "events raced" },
        {
          value: "6",
          label: cs ? "osobních rekordů (yardy)" : "yards personal bests",
        },
      ]}
      results={[
        {
          event: cs ? "400 y polohový závod" : "400Y Individual Medley",
          finalTime: "3:56.83",
          pb: true,
          adjusted: "3:51.83",
        },
        {
          event: cs ? "200 y polohový závod" : "200Y Individual Medley",
          finalTime: "1:51.17",
          pb: true,
          adjusted: "1:49.97",
        },
        {
          event: cs ? "100 y prsa" : "100Y Breaststroke",
          finalTime: "56.63",
          pb: true,
        },
        {
          event: cs ? "200 y prsa" : "200Y Breaststroke",
          finalTime: "2:05.66",
          pb: true,
          adjusted: "2:04.46",
        },
        {
          event: cs ? "50 y volný způsob" : "50Y Freestyle",
          finalTime: "21.05",
          pb: true,
        },
        {
          event: cs ? "100 y volný způsob" : "100Y Freestyle",
          finalTime: "46.72",
          pb: true,
        },
        {
          event: cs ? "200 y volný způsob" : "200Y Freestyle",
          finalTime: "1:40.74",
          adjusted: "1:39.54",
        },
      ]}
      highlights={
        cs
          ? [
              "Vůbec první start v americkém závodě a v yardovém bazénu.",
              "Osobní rekordy téměř v každé disciplíně.",
              "Seznámení s americkým formátem závodění v dresu Hilltoppers.",
              "Denver leží v 1 600 m n. m. — časy od 200 y se oficiálně přepočítávají (−1,2 s na 200 y, −5 s na 400/500 y).",
            ]
          : [
              "The first-ever start at an American meet and in a yards pool.",
              "Personal bests in nearly every event.",
              "Learning the American racing format with the Hilltoppers.",
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
