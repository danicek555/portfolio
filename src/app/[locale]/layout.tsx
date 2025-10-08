import "../../styles/globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ThemeProvider } from "../../components/ThemeProvider";
import DarkModeToggle from "../../components/DarkModeToggle";
import LanguageToggle from "../../components/LanguageToggle";
import { roboto, montserrat } from "../../styles/fonts";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

// Generate metadata for each locale with proper canonical and hreflang
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const currentUrl = `${siteUrl}/${locale}`;

  return {
    // Set canonical URL for current locale
    alternates: {
      canonical: currentUrl,
      languages: {
        "x-default": `${siteUrl}/${routing.defaultLocale}`,
        "en-US": `${siteUrl}/en`,
        "cs-CZ": `${siteUrl}/cs`,
        en: `${siteUrl}/en`,
        cs: `${siteUrl}/cs`,
      },
    },
    openGraph: {
      locale: locale === "cs" ? "cs_CZ" : "en_US",
      alternateLocale: locale === "cs" ? "en_US" : "cs_CZ",
      url: currentUrl,
    },
    other: {
      // Explicit canonical link
      canonical: currentUrl,
    },
  };
}

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <div
      className={`${roboto.variable} ${montserrat.variable}`}
      style={{
        fontFamily:
          "var(--font-roboto), var(--font-montserrat), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <DarkModeToggle />
          <LanguageToggle />
        </ThemeProvider>
      </NextIntlClientProvider>
    </div>
  );
}
