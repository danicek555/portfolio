"use client";

import Link from "next/link";
import { BlogPost } from "../../../lib/blogPosts";

interface BlogListClientProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogListClient({ posts, locale }: BlogListClientProps) {
  return (
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
            {new Date(post.date).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <p className="text-gray-700 dark:text-gray-200">{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
