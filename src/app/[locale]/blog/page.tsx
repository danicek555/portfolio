import { Metadata } from "next";
import Link from "next/link";
import { blogPostsByLocale } from "../../../lib/blogPosts";
import { hasLocale } from "next-intl";
import { routing } from "../../../i18n/routing";
import { getTranslations } from "next-intl/server";
import BlogListClient from "./BlogListClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Blog - Daniel Mitka",
  description:
    "Personal stories, USA experiences, and thoughts from training and life.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const posts =
    blogPostsByLocale[lc] ?? blogPostsByLocale[routing.defaultLocale];
  const t = await getTranslations("Blog");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Navigation Header - Server Component */}
      <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="px-4 sm:px-10 py-4 max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">{t("backToHome")}</span>
          </Link>
        </div>
      </div>

      <section className="px-4 sm:px-10 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {t("description")}
        </p>

        {/* Minimal client component for interactions only */}
        <BlogListClient posts={posts} locale={lc} />
      </section>
    </div>
  );
}
