"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { BlogPost } from "../../../../lib/blogPosts";
import InteractionsClient from "./InteractionsClient";

interface BlogPostClientProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export default function BlogPostClient({
  post,
  prevPost,
  nextPost,
}: BlogPostClientProps) {
  const t = useTranslations("Blog");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Navigation Header */}
      <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-10">
        <div className="px-4 sm:px-10 py-4 max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t("backToBlog")}</span>
          </Link>

          <div className="flex items-center gap-4">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">
                  {t("previous")}
                </span>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="text-sm hidden sm:inline">{t("next")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <article className="px-4 sm:px-10 py-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
        <time className="block text-sm text-gray-600 dark:text-gray-400 mb-8">
          {new Date(post.date).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="prose dark:prose-invert max-w-none">
          <p>{post.content || post.excerpt}</p>
        </div>
        <InteractionsClient slug={post.slug} title={post.title} />
      </article>
    </div>
  );
}
