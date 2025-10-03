import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPostsByLocale } from "../../../../lib/blogPosts";
import { hasLocale } from "next-intl";
import { routing } from "../../../../i18n/routing";
import BlogPostClient from "./BlogPostClient";

type Params = Promise<{ locale: string; slug: string }>;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const posts = blogPostsByLocale[locale] ?? blogPostsByLocale["en"];
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - Blog - Daniel Mitka`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} - Blog - Daniel Mitka`,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const lc = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const posts =
    blogPostsByLocale[lc] ?? blogPostsByLocale[routing.defaultLocale];
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find current post index and get previous/next posts
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return <BlogPostClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}
