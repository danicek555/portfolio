import type { Metadata } from "next";
import MeetSummaryClient from "../../../../components/MeetSummaryClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Czech Junior Nationals 2026 - Daniel Mitka",
  description:
    "Daniel Mitka's results from the Czech Junior and U22 National Championships 2026 in Ústí nad Labem.",
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
    <MeetSummaryClient
      title={
        cs
          ? "Mistrovství ČR juniorů a U22 2026"
          : "Czech Junior & U22 Nationals 2026"
      }
      subtitle={cs ? "Národní juniorské mistrovství" : "National Junior Championship"}
      location={cs ? "Ústí nad Labem, Česká republika" : "Ústí nad Labem, Czech Republic"}
      date={cs ? "28.–31. května 2026" : "May 28–31, 2026"}
      image="/mcr2025.jpg"
      summary={
        cs
          ? "Letní mistrovství ČR juniorů a U22 v Ústí nad Labem bylo důležitým vrcholem domácí sezóny. Daniel startoval v širokém programu sprintů i středních tratí a ve finále potvrdil silnou formu zejména na 200m volným způsobem a 200m polohovém závodě."
          : "The Czech Junior and U22 National Championships in Ústí nad Labem were a major home-season highlight. Daniel raced a wide sprint and middle-distance program and backed up strong heats with solid final performances, especially in the 200m freestyle and 200m individual medley."
      }
      highlights={
        cs
          ? [
              "Finále 200m volný způsob: 1:55.31 (2. místo ve finále).",
              "Finále 200m polohový závod: 2:06.50 (2. místo ve finále).",
              "Silné rozplavby včetně 200m volný způsob 1:56.69 a 50m prsa 30.20.",
            ]
          : [
              "200m freestyle final: 1:55.31 (2nd in the final).",
              "200m IM final: 2:06.50 (2nd in the final).",
              "Strong heats including 1:56.69 in the 200m free and 30.20 in the 50m breast.",
            ]
      }
      results={[
        {
          event: cs ? "200m volný způsob" : "200m Freestyle",
          time: "1:55.31",
          placement: cs ? "2. finále" : "2nd final",
        },
        {
          event: cs ? "200m polohový závod" : "200m IM",
          time: "2:06.50",
          placement: cs ? "2. finále" : "2nd final",
        },
        {
          event: cs ? "100m volný způsob" : "100m Freestyle",
          time: "52.65",
          placement: cs ? "5. finále" : "5th final",
        },
        {
          event: cs ? "100m prsa" : "100m Breaststroke",
          time: "1:07.91",
          placement: cs ? "6. finále" : "6th final",
        },
        {
          event: cs ? "50m prsa" : "50m Breaststroke",
          time: "30.85",
          placement: cs ? "8. finále" : "8th final",
        },
        {
          event: cs ? "200m prsa" : "200m Breaststroke",
          time: "2:30.58",
          placement: cs ? "Rozplavby" : "Heats",
        },
      ]}
      sourceUrl="https://vysledky.czechswimming.cz/souteze/10124"
    />
  );
}
