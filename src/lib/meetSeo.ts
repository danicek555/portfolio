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
}): Metadata {
  const url = `${siteUrl}/competitions/${opts.slug}`;
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
        cs: `${siteUrl}/cs/competitions/${opts.slug}`,
        en: `${siteUrl}/en/competitions/${opts.slug}`,
        "x-default": `${siteUrl}/en/competitions/${opts.slug}`,
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName,
      type: "article",
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
