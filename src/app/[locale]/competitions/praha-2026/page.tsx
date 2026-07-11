import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "PRAHA 2026 - Daniel Mitka",
  description:
    "Daniel Mitka's results from the international PRAHA 2026 swimming meet at Podolí, Prague.",
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
    <MeetSummaryClient
      title="PRAHA 2026"
      subtitle={cs ? "Mezinárodní plavecké závody" : "International Swimming Meet"}
      location={cs ? "Praha – Podolí, Česká republika" : "Prague – Podolí, Czech Republic"}
      date={cs ? "13.–14. června 2026" : "June 13–14, 2026"}
      image="/podoliFoto.jpg"
      summary={
        cs
          ? "PRAHA 2026 je mezinárodní mítink na venkovním 50m bazénu v Podolí. Daniel reprezentoval SK Motorlet Praha v prsou, motýlku, volném způsobu i polohovém závodě a předvedl silné výkony napříč celým programem."
          : "PRAHA 2026 is an international meet at the outdoor 50m pool in Podolí. Daniel represented SK Motorlet Praha across breaststroke, butterfly, freestyle, and individual medley with strong performances throughout the meet."
      }
      highlights={
        cs
          ? [
              "100m prsa: 1:05.89 – vítězství v rozplavbě.",
              "200m polohový závod: 2:08.83 – vítězství v rozplavbě.",
              "400m volný způsob: 4:11.03 a 400m polohový závod: 4:37.17.",
            ]
          : [
              "100m breaststroke: 1:05.89 – 1st in the heat.",
              "200m IM: 2:08.83 – 1st in the heat.",
              "400m freestyle: 4:11.03 and 400m IM: 4:37.17.",
            ]
      }
      results={[
        {
          event: cs ? "100m prsa" : "100m Breaststroke",
          time: "1:05.89",
          placement: cs ? "1. rozplavba" : "1st heat",
        },
        {
          event: cs ? "200m polohový závod" : "200m IM",
          time: "2:08.83",
          placement: cs ? "1. rozplavba" : "1st heat",
        },
        {
          event: cs ? "100m motýlek" : "100m Butterfly",
          time: "58.15",
          placement: cs ? "1. rozplavba" : "1st heat",
        },
        {
          event: cs ? "400m volný způsob" : "400m Freestyle",
          time: "4:11.03",
          placement: cs ? "1. rozplavba" : "1st heat",
        },
        {
          event: cs ? "400m polohový závod" : "400m IM",
          time: "4:37.17",
          placement: cs ? "2. rozplavba" : "2nd heat",
        },
      ]}
      sourceUrl="https://vysledky.czechswimming.cz/souteze/10550"
    />
  );
}
