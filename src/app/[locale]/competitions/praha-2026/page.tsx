import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "PRAHA 2026 - Daniel Mitka",
  description:
    "PRAHA 2026 international meet at Podolí: four long-course personal bests and two podium finishes.",
  alternates: {
    canonical: `${siteUrl}/competitions/praha-2026`,
  },
};

export default async function Praha2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetShowcase
      badge={cs ? "Mezinárodní mítink" : "International Invitational"}
      title="PRAHA 2026"
      subtitle={cs ? "Venkovní 50m bazén · Podolí" : "Outdoor 50m pool · Podolí"}
      location={cs ? "Praha – Podolí" : "Prague – Podolí"}
      dateLabel={cs ? "13.–14. června 2026" : "June 13–14, 2026"}
      heroImage="/praha2026/tops-wall.jpg"
      intro={
        cs
          ? "Mezinárodní generálka na domácí šampionát. Dva dny na venkovním bazénu v Podolí přinesly čtyři osobní rekordy v dlouhém bazénu a dvě umístění na stupních vítězů."
          : "An international tune-up for the national championships. Two days at Podolí's outdoor pool brought four long-course personal bests and two podium finishes."
      }
      stats={[
        {
          value: "2×",
          label: cs ? "stupně vítězů" : "podium finishes",
          medal: true,
        },
        { value: "4", label: cs ? "osobní rekordy (50m)" : "long-course PBs" },
        { value: "5", label: cs ? "disciplín" : "events raced" },
      ]}
      results={[
        {
          event: cs ? "100 m prsa" : "100m Breaststroke",
          finalTime: "1:05.89",
          pb: true,
          placement: cs ? "vítězství v rozplavbě" : "won the heat",
        },
        {
          event: cs ? "400 m polohový závod" : "400m Individual Medley",
          finalTime: "4:37.17",
          pb: true,
        },
        {
          event: cs ? "100 m motýlek" : "100m Butterfly",
          finalTime: "58.15",
          pb: true,
        },
        {
          event: cs ? "400 m volný způsob" : "400m Freestyle",
          finalTime: "4:11.03",
          pb: true,
        },
        {
          event: cs ? "200 m polohový závod" : "200m Individual Medley",
          finalTime: "2:08.83",
          placement: cs ? "vítězství v rozplavbě" : "won the heat",
        },
      ]}
      highlights={
        cs
          ? [
              "Čtyři osobní rekordy v dlouhém bazénu.",
              "Dvakrát na stupních vítězů.",
              "Ideální příprava na MČR OPEN o dva týdny později.",
            ]
          : [
              "Four long-course personal bests.",
              "Two podium finishes.",
              "Ideal preparation for the Czech Open Nationals two weeks later.",
            ]
      }
      gallery={[
        {
          src: "/praha2026/podium.jpg",
          caption: cs ? "Stupně vítězů" : "On the podium",
        },
        {
          src: "/praha2026/podium-red.jpg",
          caption: cs ? "Druhé místo" : "Second place",
        },
        {
          src: "/praha2026/podium-black.jpg",
          caption: cs ? "Další medailový ceremoniál" : "Another medal ceremony",
        },
        {
          src: "/praha2026/podium-trio.jpg",
          caption: cs ? "Medailisté" : "Medalists",
        },
        {
          src: "/praha2026/tops-wall.jpg",
          caption: cs ? "U stěny po závodě" : "At the wall after the race",
        },
      ]}
      videos={[]}
      links={[
        {
          label: cs ? "Oficiální výsledky" : "Official results",
          url: "https://vysledky.czechswimming.cz/souteze/10550",
        },
      ]}
    />
  );
}
