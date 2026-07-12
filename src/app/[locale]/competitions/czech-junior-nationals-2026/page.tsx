import type { Metadata } from "next";
import MeetShowcase from "../../../../components/MeetShowcase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Czech Junior & U22 Nationals 2026 - Daniel Mitka",
  description:
    "Two silver medals at the Czech Junior and U22 National Championships 2026 in Ústí nad Labem — 200m freestyle 1:55.31 and 200m IM 2:06.50, five A-finals across six events.",
  alternates: {
    canonical: `${siteUrl}/competitions/czech-junior-nationals-2026`,
  },
};

export default async function CzechJuniorNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
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
        },
        {
          event: cs ? "200 m polohový závod" : "200m Individual Medley",
          finalTime: "2:06.50",
          placement: cs ? "2. místo" : "2nd place",
          medal: "silver",
        },
        {
          event: cs ? "100 m volný způsob" : "100m Freestyle",
          finalTime: "52.65",
          placement: cs ? "5. místo ve finále" : "5th in the final",
        },
        {
          event: cs ? "100 m prsa" : "100m Breaststroke",
          finalTime: "1:07.91",
          placement: cs ? "6. místo ve finále" : "6th in the final",
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
        },
      ]}
      highlights={
        cs
          ? [
              "Stříbro na 200 m volný způsob (1:55.31) i na 200 m polohový závod (2:06.50) — dvakrát jen kousek od juniorského titulu.",
              "Pět finále A ze šesti startů, rychlé rozplavby ve večerních finále ještě zrychlil.",
              "V barvách SK Motorlet Praha potvrdil všestrannost: sprinterský kraul, prsa i polohový závod na špici českého juniorského pole.",
              "Vicemistr ČR na 200 m volný způsob a 200 m polohový závod.",
            ]
          : [
              "Silver in both the 200m freestyle (1:55.31) and the 200m individual medley (2:06.50) — twice just short of a national junior title.",
              "Five A-finals from six events, backing up fast heats with faster finals.",
              "Racing for SK Motorlet Praha, Daniel confirmed his versatility: sprint freestyle, breaststroke and medley at the sharp end of the national field.",
              "Vice-champion of the Czech Republic, 200m free & 200m IM.",
            ]
      }
      gallery={[
        {
          src: "/mcrJunior2026/diplom.jpg",
          caption: cs
            ? "Diplom za 2. místo na 200 m polohový závod — 2:06.50"
            : "Diploma for 2nd place in the 200m IM — 2:06.50",
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
      ]}
    />
  );
}
