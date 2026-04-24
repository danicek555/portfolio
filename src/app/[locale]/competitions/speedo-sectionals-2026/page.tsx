import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Speedo Sectionals 2026 - Daniel Mitka",
  description:
    "Speedo Sectionals 2026 page with key highlights and Swimcloud source reference.",
  alternates: {
    canonical: `${siteUrl}/competitions/speedo-sectionals-2026`,
  },
};

export default async function SpeedoSectionals2026Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cs = locale === "cs";

  return (
    <MeetSummaryClient
      title={cs ? "Speedo Sectionals 2026" : "Speedo Sectionals 2026"}
      subtitle={cs ? "Elitní sectional závod" : "Elite Sectional Meet"}
      location={cs ? "USA" : "USA"}
      date={cs ? "2026" : "2026"}
      image="/podoliFoto.jpg"
      summary={
        cs
          ? "Speedo Sectionals patří mezi velmi náročné závody s elitní konkurencí. Cílem bylo potvrdit výkonnost pod tlakem a bojovat o kvalitní časy."
          : "Speedo Sectionals is a high-level meet with elite competition. The goal was to execute under pressure and race for top-quality times."
      }
      highlights={
        cs
          ? [
              "Závodění proti špičkovým plavcům v regionu.",
              "Důraz na výkon pod tlakem a závodní strategii.",
              "Důležitý krok pro další vývoj výkonnosti.",
            ]
          : [
              "Racing against top swimmers in the region.",
              "Emphasis on pressure execution and race strategy.",
              "Important milestone for continued progression.",
            ]
      }
      results={[
        {
          event: cs ? "Úroveň soutěže" : "Competition Level",
          time: cs ? "Sectionals" : "Sectionals",
        },
        {
          event: cs ? "Zaměření" : "Focus",
          time: cs ? "Výkon pod tlakem" : "Pressure execution",
        },
      ]}
      sourceUrl="https://www.swimcloud.com/swimmer/1828936/"
    />
  );
}
