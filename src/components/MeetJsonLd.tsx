import Script from "next/script";
import { generateSportsEventSchema, createJsonLd } from "../lib/schema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

/**
 * Injects schema.org SportsEvent structured data for a meet page so the
 * competition can surface as a rich result in Google. Rendered from the
 * server component of each competition page.
 */
export default function MeetJsonLd({
  id,
  locale,
  name,
  description,
  startDate,
  endDate,
  venue,
  city,
  country,
  region,
  level,
  awards,
  sport = "Swimming",
}: {
  id: string;
  locale: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  venue: string;
  city: string;
  country: string;
  region?: string;
  level: "International" | "National" | "Regional";
  awards?: string[];
  sport?: string;
}) {
  const eventSchema = generateSportsEventSchema(
    {
      name,
      description,
      startDate,
      endDate,
      location: { name: venue, city, country, region },
      sport,
      level,
      awards,
    },
    locale,
  );

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "cs" ? "Domů" : "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "cs" ? "Závody" : "Competitions",
        item: `${siteUrl}/${locale}#competitions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${siteUrl}/${locale}/competitions/${id}`,
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [eventSchema, breadcrumb],
  };

  return (
    <Script
      id={`meet-schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: createJsonLd(graph) }}
    />
  );
}
