import Script from "next/script";
import "../styles/globals.css";
import { roboto, montserrat } from "../styles/fonts";
import {
  generateWebSiteSchema,
  generatePersonSchema,
  generateMultipleSchemas,
} from "../lib/schema";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const siteTitle =
  process.env.NEXT_PUBLIC_SITE_TITLE ||
  "Daniel Mitka - Czech Swimming Champion & Developer";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience in Australia, Slovakia, and Czech Republic. Full-stack developer passionate about technology and sports.";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel";

export const metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${authorName}`,
  },
  description: siteDescription,
  keywords: [
    "Daniel Mitka",
    "Czech swimmer",
    "swimming champion",
    "lifesaving",
    "competitive swimming",
    "youth champion",
    "Czech Republic",
    "Slovakia Cup",
    "Australia swimming",
    "swimming athlete",
    "sports portfolio",
    "developer",
    "full-stack developer",
    "web developer",
    "swimming competitions",
    // Enhanced SEO keywords
    "Czech national swimming team",
    "SK Motorlet Praha",
    "swimming records Czech Republic",
    "lifesaving world championships",
    "Czech swimming federation",
    "competitive swimmer Prague",
    "swimming training Czech Republic",
    "national swimming championships",
    "junior swimming champion",
    "swimming technique expert",
    "freestyle swimming specialist",
    "individual medley swimmer",
    "breaststroke technique",
    "swimming coach consultation",
    "swimming performance analysis",
  ],
  authors: [{ name: authorName }],
  creator: authorName,
  publisher: authorName,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "cs_CZ",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/openGraphImage.png`,
        width: 1200,
        height: 630,
        alt: `${authorName} - Czech Swimming Champion & Developer`,
        type: "image/png",
      },
    ],
    // Facebook specific
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/openGraphImage.png`],
    creator: twitterHandle,
    site: twitterHandle,
  },

  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  //   yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  //   yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  //   other: {
  //     "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
  //   },
  // },
  category: process.env.NEXT_PUBLIC_SITE_CATEGORY || "Sports & Technology",
  classification:
    process.env.NEXT_PUBLIC_SITE_CLASSIFICATION || "Portfolio Website",
  referrer: "origin-when-cross-origin",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${siteUrl}/site.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: authorName,
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  alternates: {
    // Canonical will be set by locale layout, not here
    languages: {
      "x-default": `${siteUrl}/en`,
      "en-US": `${siteUrl}/en`,
      "cs-CZ": `${siteUrl}/cs`,
      en: `${siteUrl}/en`,
      cs: `${siteUrl}/cs`,
    },
  },
  metadataBase: new URL(siteUrl),
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",

    // Facebook specific meta tags
    "fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    "fb:pages": process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID,
    "fb:admins": process.env.NEXT_PUBLIC_FACEBOOK_ADMIN_ID,

    // Enhanced Open Graph for social sharing - force profile image
    "og:image": `${siteUrl}/openGraphImage.png`,
    "og:image:secure_url": `${siteUrl}/openGraphImage.png`,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": `${authorName} - Czech Swimming Champion & Developer`,
    "og:rich_attachment": "true",
    "og:see_also": `${siteUrl}/competitions`,

    // Additional social platforms
    "pinterest-rich-pin": "true",
    "linkedin:owner": authorName,

    // Schema.org structured data hints
    "profile:first_name": "Daniel",
    "profile:last_name": "Mitka",
    "profile:username": "danielmitka",

    // Enhanced SEO meta tags
    "application-name": authorName,
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": authorName,
    "msapplication-tooltip": siteDescription,
    "msapplication-starturl": siteUrl,
    "msapplication-navbutton-color": "#2563eb",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate Schema.org structured data (default to English for root layout)
  const websiteSchema = generateWebSiteSchema("en");
  const personSchema = generatePersonSchema("en");
  const combinedSchema = generateMultipleSchemas(websiteSchema, personSchema);

  return (
    <html
      className={`${roboto.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Schema.org JSON-LD Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: combinedSchema,
          }}
        />

        <Script id="theme-mode" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var theme = sessionStorage.getItem('preserveTheme') ?? localStorage.getItem('darkMode');
                var isDark = theme ? JSON.parse(theme) : false;
                
                // Store the theme preference but don't set the class immediately
                // Let React handle it after hydration to avoid mismatch
                if (isDark) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.removeAttribute('data-theme');
                }
                
                // Clean up sessionStorage
                sessionStorage.removeItem('preserveTheme');
              } catch (e) {
                // Fallback: remove theme attribute if there's an error
                document.documentElement.removeAttribute('data-theme');
              }
            })();
          `}
        </Script>
        <meta name="msvalidate.01" content="0D0DAFC7989A1E883D0B80797FAEDBED" />
      </head>
      <body
        className="transition-colors duration-300 bg-white dark:bg-gray-900"
        style={{
          fontFamily: "var(--font-roboto), var(--font-montserrat), sans-serif",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
