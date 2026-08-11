import {
  czechJuniorNationalsMedia,
  localizeMediaText,
  summerJuniorNationalsMedia,
} from "../../data/featuredMeetMedia";

export const dynamic = "force-static";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

const meets = [
  {
    slug: "speedo-junior-nationals-2026",
    media: summerJuniorNationalsMedia,
    description: {
      en: "Daniel Mitka at the 2026 Speedo Junior National Championships in Irvine, California.",
      cs: "Daniel Mitka na Speedo Junior Nationals 2026 v Irvine v Kalifornii.",
    },
  },
  {
    slug: "czech-junior-nationals-2026",
    media: czechJuniorNationalsMedia,
    description: {
      en: "Daniel Mitka at the 2026 Czech Junior & U22 National Championships in Ústí nad Labem.",
      cs: "Daniel Mitka na MČR juniorů a U22 2026 v Ústí nad Labem.",
    },
  },
] as const;

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export function GET() {
  const urls = meets.flatMap((meet) =>
    (["en", "cs"] as const).map((locale) => {
      const pageUrl = `${siteUrl}/${locale}/competitions/${meet.slug}`;
      const videos = meet.media.videos
        .map((video) => {
          const title = localizeMediaText(video.title, locale);
          const description = `${title}. ${meet.description[locale]}`;
          return `
    <video:video>
      <video:thumbnail_loc>${escapeXml(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`)}</video:thumbnail_loc>
      <video:title>${escapeXml(title)}</video:title>
      <video:description>${escapeXml(description)}</video:description>
      <video:player_loc allow_embed="yes">${escapeXml(`https://www.youtube.com/embed/${video.id}`)}</video:player_loc>
      <video:publication_date>${escapeXml(video.uploadDate)}</video:publication_date>
    </video:video>`;
        })
        .join("");

      return `
  <url>
    <loc>${escapeXml(pageUrl)}</loc>${videos}
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${urls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
