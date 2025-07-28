import { Metadata } from "next";
import Script from "next/script";
import AustraliaCompetitionClient from "./AustraliaCompetitionClient";
import {
  generateSportsEventSchema,
  createJsonLd,
} from "../../../../lib/schema";

// Environment variables for metadata
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.vercel.app";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export const metadata: Metadata = {
  title: "Australia Youth Swimming Championship 2023 - Daniel Mitka",
  description:
    "Daniel Mitka's outstanding performance at the Australia Youth Swimming Championship 2023, winning silver medal in Mixed Rescue with Adam Pekař. International competition experience in Australia.",

  keywords: [
    "Australia Youth Swimming Championship",
    "Daniel Mitka Australia",
    "youth swimming championship Australia",
    "mixed rescue silver medal",
    "Adam Pekař swimming partner",
    "international swimming competition",
    "Czech swimmer Australia",
    "lifesaving competition Australia",
    "swimming championship 2023",
    "youth athlete Australia",
    "competitive swimming Australia",
    "Daniel Mitka silver medal",
    "swimming achievements Australia",
    "international swimming experience",
    "Czech Republic swimming team",
  ],

  authors: [{ name: authorName }],
  creator: authorName,
  publisher: authorName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Australia Youth Swimming Championship 2023 - Daniel Mitka",
    description:
      "Silver medal performance at Australia Youth Swimming Championship. Mixed Rescue event with Adam Pekař. International competitive swimming experience.",
    url: `${siteUrl}/competitions/lifesaving-worlds-australia`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/winPhoto.jpg`,
        width: 1200,
        height: 630,
        alt: "Daniel Mitka victory moment at Australia Youth Swimming Championship",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2023-12-01",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Australia Youth Swimming Championship 2023 - Daniel Mitka",
    description:
      "🥈 Silver medal at Australia Youth Swimming Championship! Mixed Rescue event with Adam Pekař. International swimming achievement.",
    images: [`${siteUrl}/winPhoto.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/lifesaving-worlds-australia`,
    languages: {
      cs: `${siteUrl}/cs/competitions/lifesaving-worlds-australia`,
      en: `${siteUrl}/en/competitions/lifesaving-worlds-australia`,
      "x-default": `${siteUrl}/competitions/lifesaving-worlds-australia`,
    },
  },

  category: "Sports Competition",

  other: {
    // Facebook specific
    ...(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID && {
      "fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    }),
    "og:type": "article",
    "article:author": authorName,
    "article:section": "Swimming Competitions",
    "article:tag": [
      "Swimming",
      "Australia",
      "Youth Championship",
      "Silver Medal",
      "Mixed Rescue",
    ],

    // Competition specific
    "sports:competition": "Australia Youth Swimming Championship",
    "sports:year": "2023",
    "sports:location": "Australia",
    "sports:achievement": "Silver Medal - Mixed Rescue",
    "sports:partner": "Adam Pekař",
    "sports:category": "Youth",
    "sports:level": "International",

    // Schema.org
    "schema:event": "Australia Youth Swimming Championship 2023",
    "schema:location": "Australia",
    "schema:participant": "Daniel Mitka",
    "schema:award": "Silver Medal",
  },
};

export default async function AustraliaCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate SportsEvent Schema.org structured data with locale support
  const eventNames = {
    en: "Australia Youth Swimming Championship 2023",
    cs: "Mistrovství světa v záchranářství Austrálie 2023",
  };

  const eventDescriptions = {
    en: "International youth swimming championship featuring lifesaving and competitive swimming events. Daniel Mitka achieved silver medal in Mixed Rescue event with partner Adam Pekař.",
    cs: "Mezinárodní juniorské mistrovství v plavání zahrnující záchranářství a závodní plavecké disciplíny. Daniel Mitka dosáhl stříbrné medaile v disciplíně Smíšené záchranářství s partnerem Adamem Pekařem.",
  };

  const awards = {
    en: ["Silver Medal - Mixed Rescue Event"],
    cs: ["Stříbrná medaile - Smíšené záchranářství"],
  };

  const organizers = {
    en: "Swimming Australia",
    cs: "Swimming Australia",
  };

  const eventSchema = generateSportsEventSchema(
    {
      name: eventNames[locale as keyof typeof eventNames] || eventNames.en,
      description:
        eventDescriptions[locale as keyof typeof eventDescriptions] ||
        eventDescriptions.en,
      startDate: "2023-12-01",
      endDate: "2023-12-10",
      location: {
        name:
          locale === "cs"
            ? "Gold Coast Aquatic Centre"
            : "Gold Coast Aquatic Centre",
        city: "Gold Coast",
        country: locale === "cs" ? "Austrálie" : "Australia",
        region: "Queensland",
        coordinates: { lat: -27.9706, lng: 153.4185 },
      },
      sport: locale === "cs" ? "Plavání" : "Swimming",
      awards: awards[locale as keyof typeof awards] || awards.en,
      level: "International",
      organizer: organizers[locale as keyof typeof organizers] || organizers.en,
    },
    locale
  );

  return (
    <>
      {/* Schema.org JSON-LD for this specific event */}
      <Script
        id="australia-competition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(eventSchema),
        }}
      />
      <AustraliaCompetitionClient />
    </>
  );
}
