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
  slug: "invitational-2026",
  title: "CO TOPS Denver Invitational 2025 — Daniel Mitka | First US Meet",
  description:
    "Daniel Mitka's first meet in the USA and first short-course-yards competition ever — the CO TOPS Denver Invitational, Nov 7–9, 2025: personal bests in nearly every event for the University of Denver Hilltoppers.",
  keywords: [
    "Daniel Mitka",
    "CO TOPS Denver Invitational",
    "Denver swimming",
    "first US meet",
    "short course yards",
    "100y breaststroke",
    "200y IM",
    "University of Denver Hilltoppers",
    "yards swimming",
    "personal best",
  ],
  image: "/sectionals2026/tops-team.jpg",
  publishedTime: "2025-11-09",
  });
}

export default async function DenverInvitational2025Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <>
      <MeetJsonLd
        id="invitational-2026"
        locale={locale}
        name="CO TOPS Denver Invitational 2025"
        description="Daniel Mitka's first meet in the USA and first short-course-yards competition, held in Denver, with personal bests in nearly every event."
        startDate="2025-11-07"
        endDate="2025-11-09"
        venue="Denver"
        city="Denver"
        country="United States"
        region="Colorado"
        level="Regional"
        awards={["Personal bests in nearly every event"]}
      />
      <MeetRecap
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
          finalTime: "4:01.83",
          pb: true,
          adjusted: "3:56.83",
        },
        {
          event: cs ? "200 y polohový závod" : "200Y Individual Medley",
          finalTime: "1:52.37",
          pb: true,
          adjusted: "1:51.17",
        },
        {
          event: cs ? "100 y prsa" : "100Y Breaststroke",
          finalTime: "56.63",
          pb: true,
        },
        {
          event: cs ? "200 y prsa" : "200Y Breaststroke",
          finalTime: "2:06.86",
          pb: true,
          adjusted: "2:05.66",
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
          finalTime: "1:41.94",
          adjusted: "1:40.74",
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
          url: "https://www.swimcloud.com/results/361256/swimmer/1828936/",
        },
      ]}
      />
    </>
  );
}
