import { Metadata } from "next";
import Script from "next/script";
import PodoliCompetitionClient25 from "./PodoliCompetitionClient25";
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
  title: "Czech National Junior Championship Podolí 2025 - Daniel Mitka",
  description:
    "Daniel Mitka's outstanding performance at Czech National Junior Championship in Podolí 2025. Bronze medal in 400m IM and multiple top finishes at the prestigious junior national competition in Prague.",

  keywords: [
    "Czech National Junior Championship 2025",
    "Daniel Mitka Podolí 2025",
    "junior swimming championship Czech",
    "Podolí swimming complex Prague 2025",
    "Czech Republic junior championships",
    "swimming competition Prague 2025",
    "junior national swimming Czech",
    "Podolí aquatic center 2025",
    "competitive swimming Czech Republic junior",
    "Czech junior swimming team",
    "swimming championships Prague 2025",
    "Daniel Mitka junior competition",
    "Czech swimming federation junior",
    "national swimming pool Podolí 2025",
    "Prague swimming competition junior",
    "400m IM bronze medal",
    "junior swimming results 2025",
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
    title: "Czech National Junior Championship Podolí 2025 - Daniel Mitka",
    description:
      "Bronze medal performance at Czech National Junior Championship in Podolí. Outstanding results in 400m IM and multiple events at Prague's premier junior competition.",
    url: `${siteUrl}/competitions/czech-junior-nationals-2025`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/podoliFoto.jpg`,
        width: 1200,
        height: 630,
        alt: "Czech National Junior Championship Podolí 2025 - Daniel Mitka",
        type: "image/jpeg",
      },
    ],
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2025-06-15",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Czech National Junior Championship Podolí 2025 - Daniel Mitka",
    description:
      "🥉 Bronze medal at Czech National Junior Championship! Outstanding performance in 400m IM at Podolí.",
    images: [`${siteUrl}/podoliFoto.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/czech-junior-nationals-2025`,
    languages: {
      cs: `${siteUrl}/cs/competitions/czech-junior-nationals-2025`,
      en: `${siteUrl}/en/competitions/czech-junior-nationals-2025`,
      "x-default": `${siteUrl}/competitions/czech-junior-nationals-2025`,
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
      "Junior Championship",
      "Czech Republic",
      "Prague",
      "Bronze Medal",
      "400m IM",
    ],

    // Competition specific
    "sports:competition": "Czech National Junior Championship",
    "sports:year": "2025",
    "sports:location": "Podolí, Prague, Czech Republic",
    "sports:achievement": "Bronze Medal 400m IM",
    "sports:category": "Junior National Championship",
    "sports:level": "Junior National",
    "sports:venue": "Podolí Swimming Complex",
    "sports:events": "400m IM, 200m IM, 200m Freestyle, 200m Breaststroke",

    // Schema.org
    "schema:event": "Czech National Junior Championship Podolí 2025",
    "schema:location": "Podolí Swimming Complex, Prague, Czech Republic",
    "schema:participant": "Daniel Mitka",
    "schema:sportType": "Swimming",
    "schema:venue": "Podolí Aquatic Center",
  },
};

export default async function PodoliCompetitionPage25({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate SportsEvent Schema.org structured data with locale support
  const eventNames = {
    en: "Czech Junior National Championship Podolí 2025",
    cs: "České juniorské mistrovství Podolí 2025",
  };

  const eventDescriptions = {
    en: "Prestigious junior national championship held at Podolí swimming complex in Prague. Czech Republic's premier junior swimming championship featuring multiple swimming events.",
    cs: "Prestižní juniorské mistrovství republiky konané v plaveckém komplexu Podolí v Praze. Premiérové české juniorské plavecké mistrovství s mnoha plaveckými disciplínami.",
  };

  const organizers = {
    en: "Czech Swimming Federation",
    cs: "Český svaz plavání",
  };

  const awards = {
    en: ["Bronze Medal 400m IM", "4th Place 200m IM", "Multiple Top Finishes"],
    cs: [
      "Bronzová medaile 400m PZ",
      "4. místo 200m PZ",
      "Více nejlepších umístění",
    ],
  };

  const eventSchema = generateSportsEventSchema(
    {
      name: eventNames[locale as keyof typeof eventNames] || eventNames.en,
      description:
        eventDescriptions[locale as keyof typeof eventDescriptions] ||
        eventDescriptions.en,
      startDate: "2025-06-13",
      endDate: "2025-06-15",
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
      organizer: organizers[locale as keyof typeof organizers] || organizers.en,
      level: "National",
    },
    locale
  );

  return (
    <>
      {/* Schema.org JSON-LD for this specific event */}
      <Script
        id="podoli-competition-2025-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(eventSchema),
        }}
      />
      <PodoliCompetitionClient25 />
    </>
  );
}
