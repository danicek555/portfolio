import { Metadata } from "next";
import { blogPostsByLocale } from "../../../lib/blogPosts";
import { hasLocale } from "next-intl";
import { routing } from "../../../i18n/routing";
import BlogClient from "./BlogClient";

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

  return <BlogClient posts={posts} />;
}
