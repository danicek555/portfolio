import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka";
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel";

const czechMeetMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "colorado-open-2026": {
    title: "CO TOPS Colorado Open 2026 — Daniel Mitka | Limit na Winter Juniors",
    description:
      "Daniel Mitka na Colorado Open 2026 v Denveru: splněný limit na Winter Juniors na 200 y polohově (1:50.39), dvě individuální vítězství a čtyři vítězné štafety.",
  },
  "colorado-senior-meet-2026": {
    title: "Colorado Senior Meet 2026 — Daniel Mitka | Tři vítězství",
    description:
      "Daniel Mitka na Colorado Senior Meet 2026 v Denveru: tři vítězství ze tří startů na 100 y prsa, 200 y prsa a 400 y polohově.",
  },
  "czech-junior-nationals-2025": {
    title: "MČR juniorů 2025 v Podolí — Daniel Mitka",
    description:
      "Výsledky Daniela Mitky z MČR juniorů 2025 v pražském Podolí na dlouhém bazénu za SK Motorlet Praha.",
  },
  "czech-junior-nationals-2026": {
    title: "MČR juniorů a U22 2026 — Daniel Mitka | Dvě stříbra",
    description:
      "Daniel Mitka na MČR juniorů a U22 2026 v Ústí nad Labem: stříbro na 200 m volný způsob a 200 m polohově a pět finále A.",
  },
  "czech-open-nationals-2025": {
    title: "MČR OPEN 2025 v Plzni — Daniel Mitka",
    description:
      "Výsledky Daniela Mitky z MČR OPEN 2025 v Plzni na dlouhém bazénu v disciplínách prsa a polohový závod za SK Motorlet Praha.",
  },
  "czech-open-nationals-2026": {
    title: "MČR OPEN 2026 — Daniel Mitka | Bronz na 400 m polohově",
    description:
      "Daniel Mitka na MČR OPEN 2026 v Podolí: bronz na 400 m polohově časem 4:38.84, pět finále A a dva osobní rekordy.",
  },
  "czech-youth-nationals-2024": {
    title: "Letní MČR juniorů 2024 — Daniel Mitka",
    description:
      "Výsledky Daniela Mitky z Letního MČR juniorů 2024 v pražském Podolí na dlouhém bazénu za SK Motorlet Praha.",
  },
  "invitational-2026": {
    title: "CO TOPS Denver Invitational 2025 — Daniel Mitka | První závod v USA",
    description:
      "První závod Daniela Mitky v USA a na yardovém bazénu: Denver Invitational 2025 s osobními rekordy téměř ve všech disciplínách.",
  },
  "lifesaving-worlds-australia": {
    title: "Mistrovství světa v záchranářství 2024 — Daniel Mitka",
    description:
      "Cesta Daniela Mitky ke stříbrné medaili na Mistrovství světa v záchranářství 2024 v Austrálii.",
  },
  "pioneer-open-2026": {
    title: "Pioneer Open 2025 — Daniel Mitka | Tři stříbrné medaile",
    description:
      "Daniel Mitka na Pioneer Open 2025 v Denveru: tři stříbrná umístění a tři osobní rekordy za University of Denver Hilltoppers.",
  },
  "praha-2026": {
    title: "PRAHA 2026 — Daniel Mitka | Čtyři osobní rekordy",
    description:
      "Daniel Mitka na mezinárodním závodě PRAHA 2026 v Podolí: čtyři osobní rekordy na dlouhém bazénu a dvě pódiová umístění.",
  },
  "slovakia-cup-2024": {
    title: "Slovakia Cup 2024 v Šamoríně — Daniel Mitka",
    description:
      "Výsledky Daniela Mitky ze Slovakia Swimming Cup 2024 v Šamoríně, mezinárodního závodu na krátkém bazénu za SK Motorlet Praha.",
  },
  "speedo-sectionals-2026": {
    title: "Speedo Sectionals 2026 — Daniel Mitka | Sedm osobních rekordů",
    description:
      "Daniel Mitka na Four Corners Speedo Sectionals 2026 v Carmel: sedm osobních rekordů, pět finále do osmého místa a tři limity na Junior Nationals.",
  },
  "speedo-junior-nationals-2026": {
    title: "Speedo Junior Nationals 2026 — Daniel Mitka",
    description:
      "Nadcházející start Daniela Mitky na Speedo Junior National Championships v Irvine v Kalifornii ve dnech 3.–7. srpna 2026.",
  },
  "team-championship-finals-2025": {
    title: "MČR družstev 2025 v Ostravě — Daniel Mitka",
    description:
      "Daniel Mitka za SK Motorlet Praha ve finále MČR družstev 2025 v Ostravě, nejvyšší české klubové plavecké soutěži.",
  },
};

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
  const localized = opts.locale === "cs" ? czechMeetMetadata[opts.slug] : null;
  const title = localized?.title ?? opts.title;
  const description = localized?.description ?? opts.description;
  const enUrl = `${siteUrl}/en/competitions/${opts.slug}`;
  const csUrl = `${siteUrl}/cs/competitions/${opts.slug}`;
  // Self-referencing canonical per locale (falls back to English).
  const url = opts.locale === "cs" ? csUrl : enUrl;
  const imagePath = opts.image ?? "/og-cover.png";
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${siteUrl}${imagePath}`;
  const images = [
    { url: imageUrl, width: 1200, height: 630, alt: title },
  ];

  return {
    title,
    description,
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
      title,
      description,
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
      title,
      description,
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
