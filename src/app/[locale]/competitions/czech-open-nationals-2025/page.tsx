import { Metadata } from "next";
import Script from "next/script";
import PlzenCompetitionClient from "./PlzenCompetitionClient";
import {
  generateSportsEventSchema,
  createJsonLd,
} from "../../../../lib/schema";

// Environment variables for metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export const metadata: Metadata = {
  title: "Plzen Regional Swimming Championship 2024 - Daniel Mitka",
  description:
    "Daniel Mitka's performance at Plzen Regional Swimming Championship 2024. Regional excellence in Western Bohemia with freestyle, medley and butterfly events. Czech Republic regional swimming competition.",

  keywords: [
    "Plzen Regional Swimming Championship 2024",
    "Daniel Mitka Plzen",
    "regional swimming competition Plzen",
    "Western Bohemia swimming",
    "Czech regional championship",
    "Plzen swimming 2024",
    "regional swimming excellence",
    "competitive swimming Plzen",
    "Czech Republic regional swimming",
    "freestyle swimming Plzen",
    "butterfly swimming competition",
    "individual medley Plzen",
    "Daniel Mitka achievements",
    "regional level competition",
    "swimming development Czech",
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
    title: "Plzen Regional Swimming Championship 2024 - Daniel Mitka",
    description:
      "Regional swimming excellence in Western Bohemia. Multiple events at Plzen Regional Championship with strong performances in freestyle and medley.",
    url: `${siteUrl}/competitions/czech-open-nationals-2025`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/plzen.jpg`,
        width: 1200,
        height: 630,
        alt: "Plzen Regional Swimming Championship 2024 - Daniel Mitka",
        type: "image/jpeg",
      },
    ],
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2024-06-01",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Plzen Regional Swimming Championship 2024 - Daniel Mitka",
    description:
      "🏊‍♂️ Regional excellence at Plzen Swimming Championship! Competing in Western Bohemia regional competition.",
    images: [`${siteUrl}/plzen.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/czech-open-nationals-2025`,
    languages: {
      cs: `${siteUrl}/cs/competitions/czech-open-nationals-2025`,
      en: `${siteUrl}/en/competitions/czech-open-nationals-2025`,
      "x-default": `${siteUrl}/competitions/czech-open-nationals-2025`,
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
      "Plzen",
      "Regional Championship",
      "Czech Republic",
      "Western Bohemia",
    ],

    // Competition specific
    "sports:competition": "Plzen Regional Swimming Championship",
    "sports:year": "2024",
    "sports:location": "Plzen, Czech Republic",
    "sports:achievement": "Regional Competition",
    "sports:category": "Regional Championship",
    "sports:level": "Regional",
    "sports:region": "Western Bohemia",
    "sports:events": "Freestyle, Butterfly, Individual Medley",

    // Schema.org
    "schema:event": "Plzen Regional Swimming Championship 2024",
    "schema:location": "Plzen, Czech Republic",
    "schema:participant": "Daniel Mitka",
    "schema:sportType": "Swimming",
    "schema:region": "Western Bohemia",
  },
};

export default async function PlzenCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate SportsEvent Schema.org structured data with locale support
  const eventNames = {
    en: "Plzen Regional Swimming Championship 2024",
    cs: "Plzeň Czech Open Mistrovství 2024",
  };

  const eventDescriptions = {
    en: "Regional swimming excellence in Western Bohemia. Multiple events featuring freestyle, butterfly, and individual medley competitions at Plzen swimming facility.",
    cs: "Regionální plavecká excelence v západních Čechách. Mnoho disciplín zahrnujících volný způsob, motýl a polohové závody na plaveckém zařízení v Plzni.",
  };

  const organizers = {
    en: "Western Bohemia Swimming Association",
    cs: "Západočeský plavecký svaz",
  };

  const awards = {
    en: ["Regional Championship Achievement"],
    cs: ["Úspěch v regionálním mistrovství"],
  };

  const eventSchema = generateSportsEventSchema(
    {
      name: eventNames[locale as keyof typeof eventNames] || eventNames.en,
      description:
        eventDescriptions[locale as keyof typeof eventDescriptions] ||
        eventDescriptions.en,
      startDate: "2024-06-01",
      endDate: "2024-06-03",
      location: {
        name:
          locale === "cs" ? "Plzeň Swimming Centre" : "Plzen Swimming Centre",
        city: locale === "cs" ? "Plzeň" : "Plzen",
        country: locale === "cs" ? "Česká republika" : "Czech Republic",
        region: locale === "cs" ? "Západní Čechy" : "Western Bohemia",
      },
      sport: locale === "cs" ? "Plavání" : "Swimming",
      awards: awards[locale as keyof typeof awards] || awards.en,
      level: "Regional",
      organizer: organizers[locale as keyof typeof organizers] || organizers.en,
    },
    locale
  );

  return (
    <>
      {/* Schema.org JSON-LD for this specific event */}
      <Script
        id="plzen-competition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(eventSchema),
        }}
      />
      <PlzenCompetitionClient />
    </>
  );
}
