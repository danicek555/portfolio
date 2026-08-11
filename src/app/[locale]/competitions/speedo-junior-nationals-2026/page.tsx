import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";
import { buildMeetMetadata } from "../../../../lib/meetSeo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildMeetMetadata({
    locale,
    slug: "speedo-junior-nationals-2026",
    title: "Speedo Junior National Championships 2026 — Daniel Mitka",
    description:
      "Daniel Mitka reached the C finals of the 200m freestyle and 200m individual medley at the 2026 Speedo Junior National Championships in Irvine, California.",
    keywords: [
      "Daniel Mitka",
      "Speedo Junior Nationals 2026",
      "USA Swimming",
      "Irvine swimming",
      "Junior Nationals",
      "long course swimming",
    ],
    image: "/juniors2026/woollett.jpg",
  });
}

export default async function SpeedoJuniorNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      title={
        cs
          ? "Speedo Junior Nationals 2026"
          : "Speedo Junior National Championships 2026"
      }
      subtitle={cs ? "Juniorské mistrovství USA" : "USA Swimming Junior Nationals"}
      location={cs ? "Irvine, Kalifornie, USA" : "Irvine, California, USA"}
      date={cs ? "3.–7. srpna 2026" : "August 3–7, 2026"}
      image="/juniors2026/woollett.jpg"
      summary={
        cs
          ? "Daniel reprezentoval University of Denver Hilltoppers na vrcholném letním juniorském mistrovství USA Swimming v Irvine. V konkurenci nejlepších amerických juniorů postoupil do finále C na 200 m volný způsob i 200 m polohový závod a pomohl štafetě TOPS na 4×200 m volný způsob k 10. místu."
          : "Daniel represented the University of Denver Hilltoppers at USA Swimming's premier long-course summer junior championship in Irvine. Racing the nation's top junior field, he advanced to the C finals of both the 200m freestyle and 200m individual medley and helped TOPS place 10th in the 4x200m freestyle relay."
      }
      highlights={
        cs
          ? [
              "Dvě finále C: 200 m volný způsob a 200 m polohový závod.",
              "10. místo štafety TOPS na 4×200 m volný způsob v čase 7:38.85.",
              "Šest individuálních startů na 50m bazénu za University of Denver Hilltoppers.",
            ]
          : [
              "Two C-final appearances: 200m freestyle and 200m individual medley.",
              "10th in the 4x200m freestyle relay with TOPS in 7:38.85.",
              "Six individual long-course events for the University of Denver Hilltoppers.",
            ]
      }
      results={[
        {
          event: cs ? "200 m polohový závod" : "200m Individual Medley",
          time: "2:06.11",
          placement: cs ? "5. místo ve finále C · rozplavby 2:06.38" : "5th in C final · 2:06.38 heats",
        },
        {
          event: cs ? "200 m volný způsob" : "200m Freestyle",
          time: "1:53.27",
          placement: cs ? "7. místo ve finále C · rozplavby 1:52.61" : "7th in C final · 1:52.61 heats",
        },
        {
          event: cs ? "4×200 m volný způsob" : "4x200m Freestyle Relay",
          time: "7:38.85",
          placement: cs ? "10. místo · Danielův úsek 1:54.50" : "10th · Daniel split 1:54.50",
        },
        {
          event: cs ? "100 m prsa" : "100m Breaststroke",
          time: "1:04.70",
        },
        {
          event: cs ? "50 m prsa" : "50m Breaststroke",
          time: "29.90",
        },
        {
          event: cs ? "100 m volný způsob" : "100m Freestyle",
          time: "52.80",
        },
      ]}
      sourceUrl="https://www.omegatiming.com/2026/speedo-junior-national-champs-live-results"
    />
  );
}
