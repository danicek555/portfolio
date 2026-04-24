import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Colorado Senior Meet 2026 - Daniel Mitka",
  description:
    "Colorado Senior Meet 2026 results: 1st in 100 Breast (55.49), 1st in 200 Breast (2:02.09), and 2nd in 100 Free (45.98).",
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
      image="/mcr2025.jpg"
      summary={
        cs
          ? "Colorado Senior Meet přinesl velmi silné výkony, zejména v prsových disciplínách. Závod potvrdil výbornou formu a schopnost zvládat více tratí na vysoké úrovni."
          : "Colorado Senior Meet delivered standout performances, especially in breaststroke events. The meet confirmed strong form and the ability to compete at a high level across multiple races."
      }
      highlights={
        cs
          ? [
              "1. místo na 100m prsa.",
              "1. místo na 200m prsa.",
              "2. místo na 100m volný způsob.",
            ]
          : [
              "1st place in 100 Breast.",
              "1st place in 200 Breast.",
              "2nd place in 100 Free.",
            ]
      }
      results={[
        {
          event: cs ? "100m prsa" : "100 Breast",
          time: "55.49",
          placement: cs ? "1. místo" : "1st",
        },
        {
          event: cs ? "200m prsa" : "200 Breast",
          time: "2:02.09",
          placement: cs ? "1. místo" : "1st",
        },
        {
          event: cs ? "100m volný způsob" : "100 Free",
          time: "45.98",
          placement: cs ? "2. místo" : "2nd",
        },
      ]}
      sourceUrl="https://www.swimcloud.com/results/379806/"
    />
  );
}
