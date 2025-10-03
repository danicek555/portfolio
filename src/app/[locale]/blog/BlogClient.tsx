"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { BlogPost } from "../../../lib/blogPosts";

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const t = useTranslations("Blog");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Navigation Header */}
      <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="px-4 sm:px-10 py-4 max-w-4xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t("backToHome")}</span>
          </Link>
        </div>
      </div>

      <section className="px-4 sm:px-10 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {t("description")}
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
      </section>
    </div>
  );
}
