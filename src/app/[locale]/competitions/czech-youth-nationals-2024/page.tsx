import type { Metadata } from "next";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import PodoliCompetitionClient from "./PodoliCompetitionClient";

const slug = "czech-youth-nationals-2024";
const title = "Czech Junior Summer Championship 2024 — Daniel Mitka";
const description =
  "Daniel Mitka at the 2024 Czech Junior Summer Championship at Podolí, Prague (May 24–26) — long-course junior national racing for SK Motorlet Praha.";
const keywords = [
  "Daniel Mitka",
  "Czech Junior Summer Championship 2024",
  "Letní MČR juniorů 2024",
  "Podolí",
  "Prague swimming",
  "long course",
  "SK Motorlet Praha",
  "Czech swimming championships",
];
const image = "/podoliFoto.jpg";

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

export default async function PodoliCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <MeetJsonLd
        id="czech-youth-nationals-2024"
        locale={locale}
        name="Czech Junior Summer Championship 2024"
        description="Czech junior summer long-course championship at Podolí, Prague."
        startDate="2024-05-24"
        endDate="2024-05-26"
        venue="Plavecký stadion Podolí"
        city="Prague"
        country="Czech Republic"
        region="Prague"
        level="National"
      />
      <PodoliCompetitionClient />
    </>
  );
}
