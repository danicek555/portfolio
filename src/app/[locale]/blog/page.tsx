import { Metadata } from "next";
import Link from "next/link";
import { blogPostsByLocale } from "../../../lib/blogPosts";
import { hasLocale } from "next-intl";
import { routing } from "../../../i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";

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
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <section className="px-4 sm:px-10 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Short reflections about my USA journey, training, and life.
        </p>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-gray-200 dark:border-gray-700 pb-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`./blog/${post.slug}`}
                  className="no-underline hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <time className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="text-gray-700 dark:text-gray-200">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
