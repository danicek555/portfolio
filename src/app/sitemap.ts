import { MetadataRoute } from "next";
import { blogPosts } from "../lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

  // Get current date for lastModified
  const currentDate = new Date();

  // Define competition page slugs that exist in the app
  const competitions = [
    // 2026 season
    "czech-open-nationals-2026",
    "praha-2026",
    "czech-junior-nationals-2026",
    "speedo-sectionals-2026",
    "colorado-senior-meet-2026",
    "colorado-open-2026",
    "pioneer-open-2026",
    "invitational-2026",
    // 2024–2025
    "team-championship-finals-2025",
    "czech-open-nationals-2025",
    "czech-junior-nationals-2025",
    "czech-youth-nationals-2024",
    "slovakia-cup-2024",
    "lifesaving-worlds-australia",
  ];

  // Primary image per competition, surfaced to Google via <image:image> so the
  // photos can be indexed for Google Images (raw /public paths, not the
  // /_next/image optimizer URLs).
  const competitionImages: Record<string, string> = {
    "colorado-open-2026": "/ColoradoOpen/church.jpg",
    "colorado-senior-meet-2026": "/seniorMeet/poolside.jpg",
    "czech-junior-nationals-2025": "/podoliFoto.jpg",
    "czech-junior-nationals-2026": "/mcrJunior2026/diplom.jpg",
    "czech-open-nationals-2025": "/plzen.jpg",
    "czech-open-nationals-2026": "/mcrOpen2026/dive-start.jpg",
    "czech-youth-nationals-2024": "/podoliFoto.jpg",
    "invitational-2026": "/invitationalDenver/arena.jpg",
    "lifesaving-worlds-australia": "/winPhoto.jpg",
    "pioneer-open-2026": "/pioneerOpen/team.jpg",
    "praha-2026": "/praha2026/podium.jpg",
    "slovakia-cup-2024": "/samorin.jpg",
    "speedo-junior-nationals-2026": "/juniors2026/woollett.jpg",
    "speedo-sectionals-2026": "/sectionals2026/celebration.jpg",
    "team-championship-finals-2025": "/ostrava1.jpg",
  };

  // Base pages without fragments - only actual pages
  const basePages = [
    {
      url: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      url: "/blog",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add main pages for both languages
  basePages.forEach((page) => {
    // English version
    sitemap.push({
      url: `${baseUrl}/en${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      images:
        page.url === "" ? [`${baseUrl}/mcrOpen2026/hero-start.jpg`] : undefined,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page.url}`,
          cs: `${baseUrl}/cs${page.url}`,
        },
      },
    });

    // Czech version
    sitemap.push({
      url: `${baseUrl}/cs${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      images:
        page.url === "" ? [`${baseUrl}/mcrOpen2026/hero-start.jpg`] : undefined,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page.url}`,
          cs: `${baseUrl}/cs${page.url}`,
        },
      },
    });
  });

  // Add competition pages for both languages
  competitions.forEach((competition) => {
    // English version
    sitemap.push({
      url: `${baseUrl}/en/competitions/${competition}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
      images: competitionImages[competition]
        ? [`${baseUrl}${competitionImages[competition]}`]
        : undefined,
      alternates: {
        languages: {
          en: `${baseUrl}/en/competitions/${competition}`,
          cs: `${baseUrl}/cs/competitions/${competition}`,
        },
      },
    });

    // Czech version
    sitemap.push({
      url: `${baseUrl}/cs/competitions/${competition}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
      images: competitionImages[competition]
        ? [`${baseUrl}${competitionImages[competition]}`]
        : undefined,
      alternates: {
        languages: {
          en: `${baseUrl}/en/competitions/${competition}`,
          cs: `${baseUrl}/cs/competitions/${competition}`,
        },
      },
    });
  });

  // Add blog posts for both languages
  blogPosts.forEach((post) => {
    // English version
    sitemap.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${post.slug}`,
          cs: `${baseUrl}/cs/blog/${post.slug}`,
        },
      },
    });

    // Czech version
    sitemap.push({
      url: `${baseUrl}/cs/blog/${post.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${post.slug}`,
          cs: `${baseUrl}/cs/blog/${post.slug}`,
        },
      },
    });
  });

  return sitemap;
}
