// app/not-found.tsx
import { NextIntlClientProvider } from "next-intl";
import enMessages from "../../messages/en.json";
import { ThemeProvider } from "../components/ThemeProvider";
import NotFoundClient from "../components/NotFoundClient";
import type { Metadata } from "next";
import Script from "next/script";
import { generatePersonSchema, createJsonLd } from "../lib/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Daniel Mitka's portfolio homepage or explore swimming competitions and achievements.",
  robots: {
    index: false,
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

export default function GlobalNotFound() {
  const locale = "en" as const;
  const personSchema = generatePersonSchema(locale);
  const errorPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "404 - Page Not Found",
    description: "Page not found. Return to Daniel Mitka's portfolio homepage.",
    url: `${siteUrl}/${locale}`,
    inLanguage: "en-US",
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
          item: `${siteUrl}/${locale}`,
        },
      ],
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: `${siteUrl}/${locale}`,
        name: "Return Home",
      },
      {
        "@type": "SearchAction",
        target: `${siteUrl}/${locale}/#competitions`,
        name: "View Competitions",
      },
    ],
  } as const;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [errorPageSchema, personSchema],
  };

  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <ThemeProvider>
        <>
          <Script
            id="error-page-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: createJsonLd(combinedSchema) }}
          />
          <NotFoundClient />
        </>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
