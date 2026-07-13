import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import PodoliCompetitionClient from "./PodoliCompetitionClient";

const slug = "czech-youth-nationals-2024";
const title = "Czech Nationals 2024 (Podolí) — Daniel Mitka";
const description =
  "Daniel Mitka at the 2024 Czech National Championships at Podolí, Prague — long-course national racing for SK Motorlet Praha.";
const keywords = [
  "Daniel Mitka",
  "Czech Nationals 2024",
  "MČR 2024",
  "Podolí",
  "Prague swimming",
  "long course",
  "SK Motorlet Praha",
  "Czech swimming championships",
];
const image = "/podoliFoto.jpg";

export const metadata = buildMeetMetadata({
  slug,
  title,
  description,
  keywords,
  image,
});

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
        name="Czech National Championships 2024 (Podolí)"
        description="Czech national long-course championships at Podolí, Prague."
        startDate="2024-07-04"
        endDate="2024-07-07"
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
