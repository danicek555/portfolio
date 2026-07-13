import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka";
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel";

/**
 * Rich, SEO-focused metadata for a single competition (meet) page:
 * unique title/description, keywords, canonical + hreflang alternates,
 * OpenGraph (article) and Twitter card. Shared by every meet page.
 */
export function buildMeetMetadata(opts: {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  publishedTime?: string;
  /** When provided, canonical & OG url self-reference this locale. */
  locale?: string;
}): Metadata {
  const enUrl = `${siteUrl}/en/competitions/${opts.slug}`;
  const csUrl = `${siteUrl}/cs/competitions/${opts.slug}`;
  // Self-referencing canonical per locale (falls back to English).
  const url = opts.locale === "cs" ? csUrl : enUrl;
  const imagePath = opts.image ?? "/openGraphImage.png";
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${siteUrl}${imagePath}`;
  const images = [
    { url: imageUrl, width: 1200, height: 630, alt: opts.title },
  ];

  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    authors: [{ name: "Daniel Mitka" }],
    category: "Sports",
    alternates: {
      canonical: url,
      languages: {
        cs: csUrl,
        en: enUrl,
        "cs-CZ": csUrl,
        "en-US": enUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName,
      type: "article",
      locale: opts.locale === "cs" ? "cs_CZ" : "en_US",
      alternateLocale: opts.locale === "cs" ? "en_US" : "cs_CZ",
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: images.map((i) => i.url),
      creator: twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
