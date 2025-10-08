import { Metadata } from "next";
import Script from "next/script";
import PodoliCompetitionClient from "./PodoliCompetitionClient";
import {
  generateSportsEventSchema,
  createJsonLd,
} from "../../../../lib/schema";

// Environment variables for metadata
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export const metadata: Metadata = {
  title: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
  description:
    "Daniel Mitka's performance at Czech National Swimming Championship in Podolí 2024. National level competition at the prestigious Podolí swimming complex in Prague, Czech Republic.",

  keywords: [
    "Czech National Swimming Championship Podolí 2024",
    "Daniel Mitka Podolí",
    "national swimming championship Czech",
    "Podolí swimming complex Prague",
    "Czech Republic national championships",
    "swimming competition Prague",
    "national level swimming Czech",
    "Podolí aquatic center",
    "competitive swimming Czech Republic",
    "Czech national swimming team",
    "swimming championships Prague",
    "Daniel Mitka national competition",
    "Czech swimming federation",
    "national swimming pool Podolí",
    "Prague swimming competition",
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
    title: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
    description:
      "National level competition at the prestigious Podolí swimming complex in Prague. Czech Republic's premier swimming championship.",
    url: `${siteUrl}/competitions/czech-youth-nationals-2024`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/podoliFoto.jpg`,
        width: 1200,
        height: 630,
        alt: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
        type: "image/jpeg",
      },
    ],
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2024-07-01",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
    description:
      "🇨🇿 Competing at Czech National Swimming Championship in Podolí! Premier national competition in Prague.",
    images: [`${siteUrl}/podoliFoto.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/czech-youth-nationals-2024`,
    languages: {
      cs: `${siteUrl}/cs/competitions/czech-youth-nationals-2024`,
      en: `${siteUrl}/en/competitions/czech-youth-nationals-2024`,
      "x-default": `${siteUrl}/competitions/czech-youth-nationals-2024`,
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
      "Podolí",
      "National Championship",
      "Czech Republic",
      "Prague",
    ],

    // Competition specific
    "sports:competition": "Czech National Swimming Championship",
    "sports:year": "2024",
    "sports:location": "Podolí, Prague, Czech Republic",
    "sports:achievement": "National Competition",
    "sports:category": "National Championship",
    "sports:level": "National",
    "sports:venue": "Podolí Swimming Complex",
    "sports:events": "Multiple Swimming Events",

    // Schema.org
    "schema:event": "Czech National Swimming Championship Podolí 2024",
    "schema:location": "Podolí Swimming Complex, Prague, Czech Republic",
    "schema:participant": "Daniel Mitka",
    "schema:sportType": "Swimming",
    "schema:venue": "Podolí Aquatic Center",
  },
};

export default async function PodoliCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate SportsEvent Schema.org structured data with locale support
  const eventNames = {
    en: "Czech National Swimming Championship Podolí 2024",
    cs: "České národní mistrovství v plavání Podolí 2024",
  };

  const eventDescriptions = {
    en: "National level competition at the prestigious Podolí swimming complex in Prague. Czech Republic's premier swimming championship featuring multiple swimming events.",
    cs: "Národní soutěž na prestižním plaveckém komplexu Podolí v Praze. Premiérové české plavecké mistrovství s mnoha plaveckými disciplínami.",
  };

  const organizers = {
    en: "Czech Swimming Federation",
    cs: "Český svaz plavání",
  };

  const awards = {
    en: ["National Championship Title", "Czech Swimming Records"],
    cs: ["Titul národního mistra", "České plavecké rekordy"],
  };

  const eventSchema = generateSportsEventSchema(
    {
      name: eventNames[locale as keyof typeof eventNames] || eventNames.en,
      description:
        eventDescriptions[locale as keyof typeof eventDescriptions] ||
        eventDescriptions.en,
      startDate: "2024-07-01",
      endDate: "2024-07-07",
      location: {
        name:
          locale === "cs"
            ? "Plavecký komplex Podolí"
            : "Podolí Swimming Complex",
        city: locale === "cs" ? "Praha" : "Prague",
        country: locale === "cs" ? "Česká republika" : "Czech Republic",
        region: "Prague",
        coordinates: { lat: 50.0647, lng: 14.4124 },
      },
      sport: locale === "cs" ? "Plavání" : "Swimming",
      awards: awards[locale as keyof typeof awards] || awards.en,
      level: "National",
      organizer: organizers[locale as keyof typeof organizers] || organizers.en,
    },
    locale
  );

  return (
    <>
      {/* Schema.org JSON-LD for this specific event */}
      <Script
        id="podoli-competition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(eventSchema),
        }}
      />
      <PodoliCompetitionClient />
    </>
  );
}
