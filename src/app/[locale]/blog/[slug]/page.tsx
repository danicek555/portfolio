import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "../../../../lib/blogPosts";

type Params = Promise<{ locale: string; slug: string }>;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danielmitka.com";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
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
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="px-4 sm:px-10 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
      <time className="block text-sm text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.content || post.excerpt}</p>
      </div>
    </article>
  );
}
