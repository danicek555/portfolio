import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";
  const disallowedPaths = [
    "/api/",
    "/favicon.ico",
    "/android-chrome-*",
    "/apple-touch-icon.png",
    "/site.webmanifest",
    "/about.txt",
  ];

  return {
    rules: [
      {
        // OpenAI's search crawler is separate from GPTBot (model training).
        // Allowing this bot makes the public site eligible for ChatGPT Search.
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
