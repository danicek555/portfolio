import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import OstravaCompetitionClient from "./OstravaCompetitionClient";

const slug = "team-championship-finals-2025";
const title = "Team Championship Finals 2025 (Ostrava) — Daniel Mitka";
const description =
  "Daniel Mitka representing SK Motorlet Praha at the 2025 Czech Team Championship Finals in Ostrava — top-tier club team competition.";
const keywords = [
  "Daniel Mitka",
  "Team Championship Finals 2025",
  "MČR družstev 2025",
  "Ostrava swimming",
  "Czech team championship",
  "SK Motorlet Praha",
  "club swimming",
];
const image = "/ostrava1.jpg";

export const metadata = buildMeetMetadata({
  slug,
  title,
  description,
  keywords,
  image,
});

export default async function OstravaCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <MeetJsonLd
        id="team-championship-finals-2025"
        locale={locale}
        name="Czech Team Championship Finals 2025"
        description="Czech team championship finals in Ostrava."
        startDate="2025-03-22"
        endDate="2025-03-23"
        venue="Ostrava"
        city="Ostrava"
        country="Czech Republic"
        region="Moravian-Silesian"
        level="National"
      />
      <OstravaCompetitionClient />
    </>
  );
}
