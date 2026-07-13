import type { Metadata } from "next";
import MeetJsonLd from "../../../../components/MeetJsonLd";
import { buildMeetMetadata } from "../../../../lib/meetSeo";
import AustraliaCompetitionClient from "./AustraliaCompetitionClient";

const slug = "lifesaving-worlds-australia";
const title = "Lifesaving World Championships 2024 (Australia) — Daniel Mitka";
const description =
  "Daniel Mitka's run to World Vice-Champion at the 2024 Lifesaving World Championships in Australia — elite international lifesaving competition.";
const keywords = [
  "Daniel Mitka",
  "Lifesaving World Championships 2024",
  "lifesaving Australia",
  "world vice-champion",
  "ILS",
  "záchranářství",
  "international lifesaving",
  "Czech lifesaving",
];
const image = "/winPhoto.jpg";

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

export default async function AustraliaCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <MeetJsonLd
        id="lifesaving-worlds-australia"
        locale={locale}
        name="Lifesaving World Championships 2024"
        description="Lifesaving World Championships in Australia where Daniel Mitka became World Vice-Champion."
        startDate="2024-08-01"
        endDate="2024-08-11"
        venue="Gold Coast"
        city="Gold Coast"
        country="Australia"
        region="Queensland"
        level="International"
        awards={["World Vice-Champion"]}
        sport="Lifesaving"
      />
      <AustraliaCompetitionClient />
    </>
  );
}
