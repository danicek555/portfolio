import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Czech Open Nationals 2026 - Daniel Mitka",
  description:
    "Czech Open Nationals 2026 at Podolí: bronze in the 400m IM (4:38.84), five final swims and two personal bests.",
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
    <MeetShowcase
      badge={cs ? "Mistrovství České republiky" : "Czech National Championships"}
      title={cs ? "Letní MČR OPEN 2026" : "Czech Open Nationals 2026"}
      subtitle={
        cs
          ? "Dlouhý bazén (50 m) · SK Motorlet Praha"
          : "Long course (50m) · SK Motorlet Praha"
      }
      location={cs ? "Praha – Podolí" : "Prague – Podolí"}
      dateLabel={cs ? "25.–28. června 2026" : "June 25–28, 2026"}
      heroImage="/mcrOpen2026/wall.jpg"
      intro={
        cs
          ? "Domácí vrchol sezóny na venkovním padesátimetrovém bazénu v Podolí. Čtyři dny závodů v nejsilnější domácí konkurenci, pět finálových startů a bronzová medaile na 400 m polohový závod v novém sezónním maximu."
          : "The home highlight of the season at Podolí's outdoor 50m pool. Four days of racing against the strongest domestic field, five final swims, and a bronze medal in the 400m IM."
      }
      stats={[
        {
          value: "3.",
          label: cs ? "místo · 400 m PZ" : "place · 400m IM",
          medal: true,
        },
        { value: "5", label: cs ? "finálových startů" : "final swims" },
        { value: "2", label: cs ? "osobní rekordy" : "personal bests" },
        {
          value: "50 m",
          label: cs ? "venkovní bazén Podolí" : "outdoor pool Podolí",
        },
      ]}
      results={[
        {
          event: cs ? "400 m polohový závod" : "400m Individual Medley",
          finalTime: "4:38.84",
          placement: cs ? "3. místo" : "3rd place",
          medal: "bronze",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "4:45.24" },
            { stage: cs ? "Finále" : "Final", time: "4:38.84" },
          ],
        },
        {
          event: cs ? "100 m volný způsob" : "100m Freestyle",
          finalTime: "54.39",
          placement: cs ? "7. místo" : "7th place",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "52.81" },
            { stage: cs ? "Semifinále" : "Semifinal", time: "52.94" },
            { stage: cs ? "Finále" : "Final", time: "54.39" },
          ],
        },
        {
          event: cs ? "200 m polohový závod" : "200m Individual Medley",
          finalTime: "2:11.78",
          placement: cs ? "9. místo" : "9th place",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "2:12.06" },
            { stage: cs ? "Finále" : "Final", time: "2:11.78" },
          ],
        },
        {
          event: cs ? "200 m prsa" : "200m Breaststroke",
          finalTime: "2:28.64",
          pb: true,
          placement: cs ? "13. místo" : "13th place",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "2:29.98", pb: true },
            { stage: cs ? "Finále" : "Final", time: "2:28.64", pb: true },
          ],
        },
      ]}
      highlights={
        cs
          ? [
              "Bronzová medaile na 400 m polohový závod — 4:38.84.",
              "Pět finálových startů během čtyř dnů.",
              "Dva osobní rekordy na 200 m prsa.",
              "Domácí šampionát v Podolí v dresu SK Motorlet Praha.",
            ]
          : [
              "Bronze medal in the 400m Individual Medley — 4:38.84.",
              "Five final swims across four days.",
              "Two personal bests in the 200m breaststroke.",
              "Home championships at Podolí racing for SK Motorlet Praha.",
            ]
      }
      gallery={[
        {
          src: "/mcrOpen2026/podium-400im.jpg",
          caption: cs ? "Bronz na 400 m polohový závod" : "400m IM bronze",
        },
        {
          src: "/mcrOpen2026/podium-medal.jpg",
          caption: cs ? "Stupně vítězů" : "On the podium",
        },
        {
          src: "/mcrOpen2026/after-race.jpg",
          caption: cs ? "Po doplavání" : "After the race",
        },
        {
          src: "/mcrOpen2026/ceremony.jpg",
          caption: cs ? "Medailový ceremoniál" : "Medal ceremony",
        },
        {
          src: "/mcrOpen2026/start-block.jpg",
          caption: cs ? "Soustředění před startem" : "Focused before the start",
        },
      ]}
      videos={[]}
      links={[
        {
          label: cs ? "Oficiální výsledky" : "Official results",
          url: "https://vysledky.czechswimming.cz/souteze/10130",
        },
        {
          label: cs
            ? "ČT sport — reportáž z MČR"
            : "ČT sport — meet report (Czech)",
          url: "https://sport.ceskatelevize.cz/clanek/plavani/knedla-ziskal-na-plaveckem-mcr-sest-zlatych-medaili-157680",
        },
      ]}
    />
  );
}
