import type { Metadata } from "next";
import Script from "next/script";
import NotFoundClient from "./NotFoundClient";
import { generatePersonSchema, createJsonLd } from "../../../lib/schema";

// Environment variables for schema
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";

// Metadata for 404 page
export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Daniel Mitka's portfolio homepage or explore swimming competitions and achievements.",
  robots: {
    index: false, // Don't index 404 pages
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    title: "404 - Page Not Found | Daniel Mitka",
    description:
      "This page doesn't exist. Return to Daniel Mitka's portfolio to explore swimming achievements and development projects.",
    type: "website",
  },
  twitter: {
    title: "404 - Page Not Found | Daniel Mitka",
    description:
      "This page doesn't exist. Return to Daniel Mitka's portfolio homepage.",
  },
};

export default async function NotFoundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate schema data for 404 page
  const personSchema = generatePersonSchema(locale);

  // Error page schema
  const errorPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 - Page Not Found",
    description:
      locale === "cs"
        ? "Stránka nebyla nalezena. Vraťte se na hlavní stránku portfolia Daniela Mitky."
        : "Page not found. Return to Daniel Mitka's portfolio homepage.",
    url: `${siteUrl}/${locale}/404`,
    inLanguage: locale === "cs" ? "cs-CZ" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    mainEntity: personSchema,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "404 Error",
          item: `${siteUrl}/${locale}/404`,
        },
      ],
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: `${siteUrl}/${locale}`,
        name: locale === "cs" ? "Návrat domů" : "Return Home",
      },
      {
        "@type": "SearchAction",
        target: `${siteUrl}/${locale}/#competitions`,
        name: locale === "cs" ? "Prohlédnout soutěže" : "View Competitions",
      },
    ],
  };

  // Combined schema for error page
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [errorPageSchema, personSchema],
  };

  return (
    <>
      {/* Schema.org JSON-LD for 404 error page */}
      <Script
        id="error-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(combinedSchema),
        }}
      />

      <NotFoundClient />
    </>
  );
}
