import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import PodoliCompetitionClient25 from "./PodoliCompetitionClient25";

const slug = "czech-junior-nationals-2025";
const title = "Czech Junior Nationals 2025 (Podolí) — Daniel Mitka";
const description =
  "Daniel Mitka at the 2025 Czech Junior National Championships at Podolí, Prague — long-course finals across breaststroke, IM and freestyle for SK Motorlet Praha.";
const keywords = [
  "Daniel Mitka",
  "Czech Junior Nationals 2025",
  "MČR juniorů 2025",
  "Podolí",
  "Prague swimming",
  "long course",
  "breaststroke",
  "individual medley",
  "SK Motorlet Praha",
];
const image = "/podoliFoto.jpg";

export const metadata = buildMeetMetadata({
  slug,
  title,
  description,
  keywords,
  image,
});

export default async function PodoliCompetitionPage25({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <MeetJsonLd
        id="czech-junior-nationals-2025"
        locale={locale}
        name="Czech Junior National Championships 2025"
        description="Czech Junior long-course national championships at Podolí, Prague."
        startDate="2025-06-13"
        endDate="2025-06-15"
        venue="Plavecký stadion Podolí"
        city="Prague"
        country="Czech Republic"
        region="Prague"
        level="National"
      />
      <PodoliCompetitionClient25 />
    </>
  );
}
