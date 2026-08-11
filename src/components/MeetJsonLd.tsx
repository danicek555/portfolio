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
  images = [],
  videos = [],
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
  images?: Array<{ src: string; caption: string }>;
  videos?: Array<{
    id: string;
    title: string;
    uploadDate: string;
  }>;
  sport?: string;
}) {
  const pageUrl = `${siteUrl}/${locale}/competitions/${id}`;
  const language = locale === "cs" ? "cs-CZ" : "en-US";
  const absoluteUrl = (url: string) =>
    url.startsWith("http") ? url : `${siteUrl}${url}`;
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
  const imageNodes = images.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${pageUrl}#image-${index + 1}`,
    name: image.caption,
    caption: image.caption,
    contentUrl: absoluteUrl(image.src),
    url: absoluteUrl(image.src),
    representativeOfPage: index === 0,
    inLanguage: language,
  }));
  const videoNodes = videos.map((video, index) => ({
    "@type": "VideoObject",
    "@id": `${pageUrl}#video-${index + 1}`,
    name: video.title,
    description: `${video.title}. ${description}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    uploadDate: video.uploadDate,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    inLanguage: language,
    isPartOf: { "@id": `${pageUrl}#webpage` },
  }));
  const eventNode = {
    ...eventSchema,
    "@context": undefined,
    "@id": `${pageUrl}#event`,
    url: pageUrl,
    image: imageNodes.length
      ? imageNodes.map((image) => ({ "@id": image["@id"] }))
      : undefined,
    subjectOf: videoNodes.length
      ? videoNodes.map((video) => ({ "@id": video["@id"] }))
      : undefined,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
        item: pageUrl,
      },
    ],
  };
  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: language,
    breadcrumb: { "@id": breadcrumb["@id"] },
    about: { "@id": eventNode["@id"] },
    primaryImageOfPage: imageNodes[0]
      ? { "@id": imageNodes[0]["@id"] }
      : undefined,
    image: imageNodes.length
      ? imageNodes.map((image) => ({ "@id": image["@id"] }))
      : undefined,
    video: videoNodes.length
      ? videoNodes.map((video) => ({ "@id": video["@id"] }))
      : undefined,
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [webPage, eventNode, breadcrumb, ...imageNodes, ...videoNodes],
  };

  return (
    <Script
      id={`meet-schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: createJsonLd(graph) }}
    />
  );
}
