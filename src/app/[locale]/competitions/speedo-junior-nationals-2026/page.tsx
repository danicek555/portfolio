import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Speedo Junior National Championships 2026 - Daniel Mitka",
  description:
    "Upcoming 2026 Speedo Junior National Championships in Irvine, California — August 3–7, 2026.",
  alternates: {
    canonical: `${siteUrl}/competitions/speedo-junior-nationals-2026`,
  },
};

export default async function SpeedoJuniorNationals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      upcoming
      title={
        cs
          ? "Speedo Junior Nationals 2026"
          : "Speedo Junior National Championships 2026"
      }
      subtitle={cs ? "Nadcházející závod" : "Upcoming Meet"}
      location={cs ? "Irvine, Kalifornie, USA" : "Irvine, California, USA"}
      date={cs ? "3.–7. srpna 2026" : "August 3–7, 2026"}
      image="/sectionals2026/pre-race.jpg"
      summary={
        cs
          ? "Speedo Junior National Championships jsou vrcholným letním juniorským mítinkem USA Swimming na 50m bazénu. Daniel se připravuje na start v Irvine, kde se sjede nejsilnější juniorská konkurence v zemi."
          : "The Speedo Junior National Championships are USA Swimming's premier long-course summer junior meet. Daniel is preparing to compete in Irvine, racing against the nation's top junior field."
      }
      highlights={
        cs
          ? [
              "Oficiální juniorské mistrovství USA Swimming — long course 50m.",
              "Místo: William Woollett Jr. Aquatics Center, Irvine, CA.",
              "Formát: 5 dní závodů, rozplavby dopoledne a finále večer.",
            ]
          : [
              "Official USA Swimming junior national championship — long course 50m.",
              "Venue: William Woollett Jr. Aquatics Center, Irvine, CA.",
              "Format: 5 days of racing with morning heats and evening finals.",
            ]
      }
      results={[
        {
          event: cs ? "Status" : "Status",
          time: cs ? "Nadcházející" : "Upcoming",
        },
        {
          event: cs ? "Organizátor" : "Organizer",
          time: "USA Swimming",
        },
        {
          event: cs ? "Tým" : "Team",
          time: "University of Denver Hilltoppers",
        },
      ]}
      sourceUrl="https://www.usaswimming.org/events"
    />
  );
}
