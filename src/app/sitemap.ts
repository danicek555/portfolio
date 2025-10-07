import { MetadataRoute } from "next";
import { blogPosts } from "../lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";

  // Get current date for lastModified
  const currentDate = new Date();

  // Define competition page slugs that exist in the app
  const competitions = [
    "team-championship-finals-2025",
    "czech-open-nationals-2025",
    "czech-youth-nationals-2024",
    "lifesaving-worlds-australia",
    "slovakia-cup-2024",
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

  // Add main pages (one entry per page with language alternates)
  basePages.forEach((page) => {
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
  });

  // Add competition pages (one entry per page with language alternates)
  competitions.forEach((competition) => {
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
  });

  // Add blog posts (one entry per page with language alternates)
  blogPosts.forEach((post) => {
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
  });

  return sitemap;
}
