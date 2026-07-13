import type { Metadata } from "next";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import SamorinCompetitionClient from "./SamorinCompetitionClient";

const slug = "slovakia-cup-2024";
const title = "Slovakia Cup 2024 (Šamorín) — Daniel Mitka";
const description =
  "Daniel Mitka at the 2024 Slovakia Swimming Cup in Šamorín — international short-course racing across multiple disciplines for SK Motorlet Praha.";
const keywords = [
  "Daniel Mitka",
  "Slovakia Cup 2024",
  "Slovakia Swimming Cup",
  "Šamorín",
  "x-bionic",
  "international swimming",
  "short course",
  "SK Motorlet Praha",
];
const image = "/samorin.jpg";

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

export default async function SamorinCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <MeetJsonLd
        id="slovakia-cup-2024"
        locale={locale}
        name="Slovakia Swimming Cup 2024"
        description="International short-course swimming cup in Šamorín, Slovakia."
        startDate="2024-10-25"
        endDate="2024-10-27"
        venue="x-bionic sphere"
        city="Šamorín"
        country="Slovakia"
        region="Trnava"
        level="International"
      />
      <SamorinCompetitionClient />
    </>
  );
}
