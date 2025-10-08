import { MetadataRoute } from "next";
import { blogPosts } from "../lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

  // Get current date for lastModified
  const currentDate = new Date();

  // Define competition page slugs that exist in the app
  const competitions = [
    "team-championship-finals-2025",
    "czech-open-nationals-2025",
    "czech-youth-nationals-2024",
    "lifesaving-worlds-australia",
    "slovakia-cup-2024",
    "czech-junior-nationals-2025",
  ];

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
