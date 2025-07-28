import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://portfolio-na-steroidech.vercel.app";

  // Get current date for lastModified
  const currentDate = new Date();

  // Define your competition pages
  const competitions = ["ostrava", "samorin", "australia", "podoli", "plzen"];

  // Define supported locales
  const locales = ["en", "cs"];

  // Base pages without fragments - only actual pages
  const basePages = [
    {
      url: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add main pages for each locale
  locales.forEach((locale) => {
    basePages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.url}`,
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
  });

  // Add competition pages for each locale
  locales.forEach((locale) => {
    competitions.forEach((competition) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/competitions/${competition}`,
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
  });

  return sitemap;
}
