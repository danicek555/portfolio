import MeetShowcase from "../../../../components/MeetShowcase";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";

export const metadata = buildMeetMetadata({
  slug: "czech-open-nationals-2026",
  title:
    "Czech Open Nationals 2026 — Daniel Mitka | 400m IM Bronze at Podolí",
  description:
    "Daniel Mitka at the 2026 Czech Open Swimming Championships (Letní MČR OPEN) in Podolí, Prague, June 25–28, 2026: bronze in the 400m IM (4:38.84), five A-final swims and two personal bests for SK Motorlet Praha.",
  keywords: [
    "Daniel Mitka",
    "Czech Open Nationals 2026",
    "Letní MČR OPEN 2026",
    "MČR Podolí 2026",
    "400m IM",
    "400 polohový závod",
    "SK Motorlet Praha",
    "Czech swimming championships",
    "long course swimming",
    "Podolí Prague",
  ],
  image: "/mcrOpen2026/start-block.jpg",
  publishedTime: "2026-06-28",
});

export default async function CzechOpenNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <>
      <MeetJsonLd
        id="czech-open-nationals-2026"
        locale={locale}
        name="Czech Open Swimming Championships 2026 (Letní MČR OPEN)"
        description="Czech Open long-course national championships at Podolí, Prague. Daniel Mitka won bronze in the 400m IM (4:38.84) with five A-final swims."
        startDate="2026-06-25"
        endDate="2026-06-28"
        venue="Plavecký stadion Podolí"
        city="Prague"
        country="Czech Republic"
        region="Prague"
        level="National"
        awards={["Bronze — 400m Individual Medley (4:38.84)"]}
      />
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
          ? "Domácí vrchol sezóny na venkovním padesátimetrovém bazénu v Podolí. Čtyři dny závodů v nejsilnější domácí konkurenci a extrémním vedru přes 40 °C, pět finálových startů a bronzová medaile na 400 m polohový závod."
          : "The home highlight of the season at Podolí's outdoor 50m pool. Four days of racing against the strongest domestic field in extreme 40°C heat, five final swims, and a bronze medal in the 400m IM."
      }
      stats={[
        {
          value: "3.",
          label: cs ? "místo · 400 m PZ" : "place · 400m IM",
          medal: true,
        },
        { value: "5", label: cs ? "finálových startů" : "final swims" },
        {
          value: "40 °C",
          label: cs ? "vedro u bazénu" : "poolside heat",
        },
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
          splits: [
            { distance: "50", time: "28.99", label: cs ? "M" : "FLY" },
            { distance: "100", time: "1:02.50", label: cs ? "M" : "FLY" },
            { distance: "150", time: "1:38.94", label: cs ? "Z" : "BK" },
            { distance: "200", time: "2:14.70", label: cs ? "Z" : "BK" },
            { distance: "250", time: "2:53.85", label: cs ? "P" : "BR" },
            { distance: "300", time: "3:34.67", label: cs ? "P" : "BR" },
            { distance: "350", time: "4:07.54", label: cs ? "VZ" : "FR" },
            { distance: "400", time: "4:38.84", label: cs ? "VZ" : "FR" },
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
          splits: [
            { distance: "50", time: "26.03" },
            { distance: "100", time: "54.39" },
          ],
        },
        {
          event: cs ? "200 m polohový závod" : "200m Individual Medley",
          finalTime: "2:11.78",
          placement: cs ? "7. místo" : "7th place",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "2:12.06" },
            { stage: cs ? "Finále" : "Final", time: "2:11.78" },
          ],
          splits: [
            { distance: "50", time: "27.64", label: cs ? "M" : "FLY" },
            { distance: "100", time: "1:01.89", label: cs ? "Z" : "BK" },
            { distance: "150", time: "1:40.05", label: cs ? "P" : "BR" },
            { distance: "200", time: "2:11.78", label: cs ? "VZ" : "FR" },
          ],
        },
        {
          event: cs ? "200 m prsa" : "200m Breaststroke",
          finalTime: "2:28.64",
          placement: cs ? "13. místo" : "13th place",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "2:29.98" },
            { stage: cs ? "Finále" : "Final", time: "2:28.64" },
          ],
          splits: [
            { distance: "50", time: "34.33" },
            { distance: "100", time: "1:12.42" },
            { distance: "150", time: "1:50.29" },
            { distance: "200", time: "2:28.64" },
          ],
        },
      ]}
      highlights={
        cs
          ? [
              "Bronzová medaile na 400 m polohový závod — 4:38.84.",
              "Pět finálových startů během čtyř dnů.",
              "Závodění v extrémním vedru přes 40 °C — cenná zkušenost v náročných podmínkách.",
              "Domácí šampionát v Podolí v dresu SK Motorlet Praha.",
            ]
          : [
              "Bronze medal in the 400m Individual Medley — 4:38.84.",
              "Five final swims across four days.",
              "Racing in extreme 40°C heat — valuable experience in brutal conditions.",
              "Home championships at Podolí racing for SK Motorlet Praha.",
            ]
      }
      gallery={[
        {
          src: "/mcrOpen2026/podium-400im.jpg",
          caption: cs ? "Bronz na 400 m polohový závod" : "400m IM bronze",
          objectPosition: "50% 20%",
        },
        {
          src: "/mcrOpen2026/ceremony.jpg",
          caption: cs ? "Medailový ceremoniál" : "Medal ceremony",
        },
        {
          src: "/mcrOpen2026/start-block.jpg",
          caption: cs ? "Soustředění před startem" : "Focused before the start",
          objectPosition: "50% 15%",
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
        {
          label: cs ? "SK Motorlet — článek" : "SK Motorlet — article (Czech)",
          url: "https://www.skmop.cz/view.php?cisloclanku=2026062901",
        },
      ]}
      />
    </>
  );
}
