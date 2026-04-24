import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Denver Invitational 2026 - Daniel Mitka",
  description:
    "Competition recap from Denver Invitational 2026 featuring race execution improvements and early-season speed.",
  alternates: {
    canonical: `${siteUrl}/competitions/invitational-2026`,
  },
};

export default async function Invitational2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      title={cs ? "Denver Invitational 2026" : "Denver Invitational 2026"}
      subtitle={cs ? "Pozvánkový závod" : "Invitational Meet"}
      location={cs ? "Denver, Colorado, USA" : "Denver, Colorado, USA"}
      date={cs ? "2026" : "2026"}
      image="/ostrava1.jpg"
      summary={
        cs
          ? "Denver Invitational byl důležitý závod na začátku sezóny, zaměřený na kvalitu provedení a závodní rytmus. Výsledky z tohoto mítinku pomohly nastavit další tréninkové cíle před vrcholem sezóny."
          : "Denver Invitational was an important early-season meet focused on race execution and consistency. The races provided a strong baseline for training adjustments before championship meets."
      }
      highlights={
        cs
          ? [
              "Důraz na kvalitní obrátky a podvodní fáze.",
              "Stabilní výkony napříč více disciplínami.",
              "Silný krok směrem k dalším závodům sezóny.",
            ]
          : [
              "Focused on cleaner turns and underwater phases.",
              "Consistent races across multiple events.",
              "Strong setup for upcoming championship meets.",
            ]
      }
      results={[
        { event: "Key Events", time: cs ? "Více disciplín" : "Multiple events" },
        {
          event: "Goal",
          time: cs ? "Konzistence a rychlost" : "Consistency and speed",
        },
      ]}
      sourceUrl="https://www.swimcloud.com/swimmer/1828936/"
    />
  );
}
