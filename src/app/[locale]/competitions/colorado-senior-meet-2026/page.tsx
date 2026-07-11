import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Colorado Senior Meet 2026 - Daniel Mitka",
  description:
    "Colorado Senior Meet 2026 results: 1st in 100 Breast (55.49), 1st in 200 Breast (2:02.09), and 1st in 400 IM (3:59.33).",
  alternates: {
    canonical: `${siteUrl}/competitions/colorado-senior-meet-2026`,
  },
};

export default async function ColoradoSeniorMeet2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      title={cs ? "Colorado Senior Meet 2026" : "Colorado Senior Meet 2026"}
      subtitle={cs ? "Šampionátní úroveň" : "Championship-Level Meet"}
      location={cs ? "Denver, Colorado, USA" : "Denver, Colorado, USA"}
      date={cs ? "20.-22. února 2026" : "February 20-22, 2026"}
      image="/sectionals2026/tops-duo.jpg"
      summary={
        cs
          ? "Colorado Senior Meet přinesl velmi silné výkony, zejména v prsových disciplínách. Závod potvrdil výbornou formu a schopnost zvládat více tratí na vysoké úrovni."
          : "Colorado Senior Meet delivered standout performances, especially in breaststroke events. The meet confirmed strong form and the ability to compete at a high level across multiple races."
      }
      highlights={
        cs
          ? [
              "1. místo na 100y prsa.",
              "1. místo na 200y prsa.",
              "1. místo na 400y polohový závod.",
            ]
          : [
              "1st place in 100 Breast.",
              "1st place in 200 Breast.",
              "1st place in 400 IM.",
            ]
      }
      results={[
        {
          event: cs ? "100y prsa" : "100 Breast",
          time: "55.49",
          placement: cs ? "1. místo" : "1st",
        },
        {
          event: cs ? "200y prsa" : "200 Breast",
          time: "2:02.09",
          placement: cs ? "1. místo" : "1st",
        },
        {
          event: cs ? "400y polohový závod" : "400 IM",
          time: "3:59.33",
          placement: cs ? "1. místo" : "1st",
        },
      ]}
      sourceUrl="https://www.swimcloud.com/results/379806/"
    />
  );
}
