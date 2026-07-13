import type { Metadata } from "next";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import PlzenCompetitionClient from "./PlzenCompetitionClient";

const slug = "czech-open-nationals-2025";
const title = "Czech Open Nationals 2025 (Plzeň) — Daniel Mitka";
const description =
  "Daniel Mitka at the 2025 Czech Open Swimming Championships in Plzeň — elite long-course national racing across breaststroke and individual medley for SK Motorlet Praha.";
const keywords = [
  "Daniel Mitka",
  "Czech Open Nationals 2025",
  "MČR OPEN 2025",
  "Plzeň swimming",
  "long course",
  "breaststroke",
  "individual medley",
  "SK Motorlet Praha",
  "Czech swimming championships",
];
const image = "/plzen.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMeetMetadata({
    locale,
  slug,
  title,
  description,
  keywords,
  image,
  });
}

export default async function PlzenCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <MeetJsonLd
        id="czech-open-nationals-2025"
        locale={locale}
        name="Czech Open Swimming Championships 2025"
        description="Czech Open long-course national championships in Plzeň."
        startDate="2025-05-15"
        endDate="2025-05-18"
        venue="Bazén Slovany"
        city="Plzeň"
        country="Czech Republic"
        region="Plzeň"
        level="National"
      />
      <PlzenCompetitionClient />
    </>
  );
}
