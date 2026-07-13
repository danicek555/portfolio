import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";
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
  slug: "czech-junior-nationals-2026",
  title: "Czech Junior & U22 Nationals 2026 — Daniel Mitka | Two Silvers",
  description:
    "Daniel Mitka at the 2026 Czech Junior & U22 National Championships in Ústí nad Labem, May 28–31: silver in the 200m freestyle (1:55.31) and 200m IM (2:06.50), plus five A-finals for SK Motorlet Praha.",
  keywords: [
    "Daniel Mitka",
    "Czech Junior Nationals 2026",
    "MČR juniorů 2026",
    "U22 nationals",
    "Ústí nad Labem",
    "200m freestyle",
    "200m IM",
    "SK Motorlet Praha",
    "Czech swimming",
    "vicemistr ČR",
  ],
  image: "/mcrJunior2026/diplom.jpg",
  publishedTime: "2026-05-31",
  });
}

export default async function CzechJuniorNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <>
      <MeetJsonLd
        id="czech-junior-nationals-2026"
        locale={locale}
        name="Czech Junior & U22 National Championships 2026"
        description="Czech Junior and U22 long-course national championships in Ústí nad Labem. Daniel Mitka won two silver medals."
        startDate="2026-05-28"
        endDate="2026-05-31"
        venue="Plavecký areál Klíše"
        city="Ústí nad Labem"
        country="Czech Republic"
        region="Ústí nad Labem"
        level="National"
        awards={[
          "Silver — 200m Freestyle (1:55.31)",
          "Silver — 200m Individual Medley (2:06.50)",
        ]}
      />
      <MeetShowcase
      badge={cs ? "Mistrovství ČR" : "National Championship"}
      title={cs ? "MČR juniorů a U22 2026" : "Czech Junior & U22 Nationals 2026"}
      subtitle={
        cs
          ? "Dlouhý bazén (50 m) · SK Motorlet Praha"
          : "Long course (50 m) · SK Motorlet Praha"
      }
      location={cs ? "Ústí nad Labem" : "Ústí nad Labem, Czech Republic"}
      dateLabel={cs ? "28.–31. května 2026" : "May 28–31, 2026"}
      heroImage="/mcrJunior2026/venue-usti.jpg"
      intro={
        cs
          ? "Letní mistrovství ČR juniorů a U22 v Ústí nad Labem bylo vrcholem domácí sezóny. Daniel během čtyř dnů absolvoval nabitý program šesti disciplín, probojoval se do pěti finále A a rychlé rozplavby dokázal ve večerních finále ještě zrychlit."
          : "The Czech Junior and U22 National Championships in Ústí nad Labem were the highlight of the home season. Daniel raced a packed program of six events over four days and made five A-finals, backing up fast heats with even faster swims at night."
      }
      stats={[
        {
          value: "2×",
          label: cs ? "stříbrné medaile" : "silver medals",
          medal: true,
          medalTone: "silver",
        },
        { value: "5", label: cs ? "finálových startů" : "A-finals" },
        { value: "6", label: cs ? "disciplín" : "events raced" },
      ]}
      results={[
        {
          event: cs ? "200 m volný způsob" : "200m Freestyle",
          finalTime: "1:55.31",
          placement: cs ? "2. místo" : "2nd place",
          medal: "silver",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "1:56.69" },
            { stage: cs ? "Finále" : "Final", time: "1:55.31" },
          ],
          splits: [
            { distance: "50", time: "27.24" },
            { distance: "100", time: "56.06" },
            { distance: "150", time: "1:25.56" },
            { distance: "200", time: "1:55.31" },
          ],
        },
        {
          event: cs ? "200 m polohový závod" : "200m Individual Medley",
          finalTime: "2:06.50",
          placement: cs ? "2. místo" : "2nd place",
          medal: "silver",
          splits: [
            { distance: "50", time: "27.48", label: cs ? "M" : "FLY" },
            { distance: "100", time: "59.91", label: cs ? "Z" : "BK" },
            { distance: "150", time: "1:36.09", label: cs ? "P" : "BR" },
            { distance: "200", time: "2:06.50", label: cs ? "VZ" : "FR" },
          ],
        },
        {
          event: cs ? "100 m volný způsob" : "100m Freestyle",
          finalTime: "52.65",
          placement: cs ? "5. místo ve finále" : "5th in the final",
          splits: [
            { distance: "50", time: "25.36" },
            { distance: "100", time: "52.65" },
          ],
        },
        {
          event: cs ? "100 m prsa" : "100m Breaststroke",
          finalTime: "1:07.91",
          placement: cs ? "6. místo ve finále" : "6th in the final",
          splits: [
            { distance: "50", time: "31.84" },
            { distance: "100", time: "1:07.91" },
          ],
        },
        {
          event: cs ? "50 m prsa" : "50m Breaststroke",
          finalTime: "30.85",
          placement: cs ? "8. místo ve finále" : "8th in the final",
          progression: [
            { stage: cs ? "Rozplavby" : "Heats", time: "30.20" },
            { stage: cs ? "Finále" : "Final", time: "30.85" },
          ],
        },
        {
          event: cs ? "200 m prsa" : "200m Breaststroke",
          finalTime: "2:30.58",
          placement: cs ? "Rozplavby" : "Heats",
          splits: [
            { distance: "50", time: "34.20" },
            { distance: "100", time: "1:11.93" },
            { distance: "150", time: "1:51.03" },
            { distance: "200", time: "2:30.58" },
          ],
        },
      ]}
      highlights={
        cs
          ? [
              "Stříbro na 200 m volný způsob (1:55.31) i na 200 m polohový závod (2:06.50) — dvakrát jen kousek od juniorského titulu.",
              "Pět finále A ze šesti startů, rychlé rozplavby ve večerních finále ještě zrychlil.",
              "V barvách SK Motorlet Praha potvrdil všestrannost: sprinterský kraul, prsa i polohový závod na špici českého juniorského pole.",
              "Vicemistr ČR na 200 m volný způsob a 200 m polohový závod.",
              "Splněný limit SCM I.",
            ]
          : [
              "Silver in both the 200m freestyle (1:55.31) and the 200m individual medley (2:06.50) — twice just short of a national junior title.",
              "Five A-finals from six events, backing up fast heats with faster finals.",
              "Racing for SK Motorlet Praha, Daniel confirmed his versatility: sprint freestyle, breaststroke and medley at the sharp end of the national field.",
              "Vice-champion of the Czech Republic, 200m free & 200m IM.",
              "Achieved the SCM I qualifying standard (Czech youth-programme level).",
            ]
      }
      gallery={[
        {
          src: "/mcrJunior2026/diplom.jpg",
          caption: cs
            ? "Diplom za 2. místo na 200 m polohový závod — 2:06.50"
            : "Diploma for 2nd place in the 200m IM — 2:06.50",
          objectPosition: "50% 38%",
        },
        {
          src: "/mcrJunior2026/venue-usti.jpg",
          caption: cs
            ? "Bazén v Ústí nad Labem během MČR juniorů 2026"
            : "The pool in Ústí nad Labem during the championships",
        },
      ]}
      videos={[]}
      links={[
        {
          label: cs ? "Výsledky na SwimCloud" : "Results on SwimCloud",
          url: "https://www.swimcloud.com/swimmer/2805887/",
        },
        {
          label: cs ? "Článek SK Motorlet" : "SK Motorlet — article (Czech)",
          url: "https://www.skmop.cz/view.php?cisloclanku=2026060201",
        },
      ]}
      />
    </>
  );
}
