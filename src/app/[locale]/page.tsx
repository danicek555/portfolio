import { Metadata } from "next";
import Script from "next/script";
import Hero from "../../components/hero";
import About from "../../components/about";
import Competitions from "../../components/competitions";
import Projects from "../../components/projects";
import { generatePersonSchema, createJsonLd } from "../../lib/schema";

// Environment variables for metadata
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Daniel Mitka - Czech Swimming Champion & Developer Portfolio",
    description:
      "Official portfolio of Daniel Mitka - Czech Youth Swimming Champion, lifesaving medalist, and full-stack developer. Explore my swimming achievements, competition highlights, and development projects.",

    keywords: [
      "Daniel Mitka portfolio",
      "Czech swimming champion",
      "youth swimming athlete",
      "competitive swimmer Czech Republic",
      "lifesaving medalist",
      "swimming competitions Australia",
      "Slovakia Cup swimming",
      "Plzen swimming",
      "Ostrava swimming",
      "Samorin swimming",
      "Podoli swimming",
      "swimming athlete portfolio",
      "sports achievements",
      "full-stack developer",
      "web developer portfolio",
      "swimming and technology",
      "Czech Republic athlete",
      "competitive swimming portfolio",
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
      title: "Daniel Mitka - Czech Swimming Champion & Developer",
      description:
        "Czech Youth Swimming Champion & lifesaving medalist. Competitive swimmer with international experience. Full-stack developer passionate about technology and sports.",
      url: `${siteUrl}/${locale}`,
      siteName: siteName,
      images: [
        {
          url: `${siteUrl}/openGraphImage.png`,
          width: 1200,
          height: 630,
          alt: "Daniel Mitka - Professional swimming athlete and developer",
          type: "image/png",
        },
      ],
      locale: locale === "cs" ? "cs_CZ" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Daniel Mitka - Czech Swimming Champion & Developer",
      description:
        "Czech Youth Swimming Champion & lifesaving medalist. Competitive swimmer with international experience. Full-stack developer.",
      images: [`${siteUrl}/openGraphImage.png`],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
    },

    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        cs: `${siteUrl}/cs`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/en`,
      },
    },

    category: "Sports & Technology",

    other: {
      // Facebook specific (only if provided)
      ...(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID && {
        "fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
      }),
      "og:type": "profile",
      "profile:first_name": "Daniel",
      "profile:last_name": "Mitka",
      "profile:gender": "male",

      // Additional SEO
      "theme-color": "#0ea5e9",
      "color-scheme": "light dark",
      "format-detection": "telephone=no",

      // Sports specific schema
      "sports:athlete": "Daniel Mitka",
      "sports:sport": "Swimming",
      "sports:nationality": "Czech Republic",
      "sports:achievements": "Youth Champion, Lifesaving Medalist",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate breadcrumb and portfolio-specific schema with locale support
  const personSchema = generatePersonSchema(locale);

  // Breadcrumb navigation schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com",
      },
    ],
  };

  // Portfolio page schema
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema,
    about: personSchema,
    description:
      locale === "cs"
        ? "Oficiální portfolio Daniela Mitky předvádějící plavecké úspěchy, závodní vrcholy a vývojové projekty."
        : "Official portfolio showcasing Daniel Mitka's swimming achievements, competition highlights, and development projects.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com",
    inLanguage: locale === "cs" ? "cs-CZ" : "en-US",
  };

  // Combined schema for this page
  const combinedPageSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, portfolioSchema],
  };

  return (
    <>
      {/* Schema.org JSON-LD for portfolio page */}
      <Script
        id="portfolio-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(combinedPageSchema),
        }}
      />

      <Hero />
      <About />
      <Competitions />
      <Projects />
    </>
  );
}
