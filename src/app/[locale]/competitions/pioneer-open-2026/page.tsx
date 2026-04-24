import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Colorado Pioneer Open 2026 - Daniel Mitka",
  description:
    "Colorado Pioneer Open 2026 competition page with highlights and Swimcloud source reference.",
  alternates: {
    canonical: `${siteUrl}/competitions/pioneer-open-2026`,
  },
};

export default async function PioneerOpen2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      title={cs ? "Colorado Pioneer Open 2026" : "Colorado Pioneer Open 2026"}
      subtitle={cs ? "Regionální otevřený mítink" : "Regional Open Meet"}
      location={cs ? "Colorado, USA" : "Colorado, USA"}
      date={cs ? "2026" : "2026"}
      image="/mcrplzen252.jpg"
      summary={
        cs
          ? "Pioneer Open je kvalitní otevřený závod v Coloradu, kde se závodí s vysokou intenzitou. Tento mítink sloužil jako test rychlosti a závodní připravenosti."
          : "Pioneer Open is a high-quality open meet in Colorado. It served as a race-speed test and a checkpoint for championship readiness."
      }
      highlights={
        cs
          ? [
              "Silná konkurence na regionální úrovni.",
              "Zaměření na závodní tempo a technickou přesnost.",
              "Důležitá kontrola formy před vrcholem sezóny.",
            ]
          : [
              "Strong regional-level field.",
              "Focus on race pace and technical precision.",
              "Useful form check before major meets.",
            ]
      }
      results={[
        { event: "Meet Type", time: cs ? "Open" : "Open" },
        { event: "Focus", time: cs ? "Rychlost + technika" : "Speed + technique" },
      ]}
      sourceUrl="https://www.swimcloud.com/results/239328/"
    />
  );
}
