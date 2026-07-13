import Script from "next/script";
import { generateSportsEventSchema, createJsonLd } from "../lib/schema";

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
  const schema = generateSportsEventSchema(
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

  return (
    <Script
      id={`meet-schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: createJsonLd(schema) }}
    />
  );
}
