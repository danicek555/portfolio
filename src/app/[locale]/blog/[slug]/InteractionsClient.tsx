"use client";

import { useEffect, useState } from "react";

export default function InteractionsClient({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const [likes, setLikes] = useState<number>(0);
  const [loadingLike, setLoadingLike] = useState(false);
  const [liked, setLiked] = useState(false);
  // Comments disabled for now
  // const [comments, setComments] = useState<
  //   Array<{
  //     id: number;
  //     author: string | null;
  //     content: string;
  //     createdAt: string;
  //   }>
  // >([]);
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");
  // const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/likes?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((d) => {
        setLikes(d.count ?? 0);
        setLiked(Boolean(d.liked));
      })
      .catch(() => {});
    // Comments disabled for now
    // fetch(`/api/blog/comments?slug=${encodeURIComponent(slug)}`)
    //   .then((r) => r.json())
    //   .then((d) => setComments(d.comments ?? []))
    //   .catch(() => {});
  }, [slug]);

  const handleLike = async () => {
    if (loadingLike) return;
    setLoadingLike(true);
    try {
      const r = await fetch(`/api/blog/likes`, {
        method: liked ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, title }),
      });
      const d = await r.json();
      if (typeof d.count === "number") setLikes(d.count);
      if (typeof d.liked === "boolean") setLiked(d.liked);
    } finally {
      setLoadingLike(false);
    }
  };

  // const handleComment = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!content.trim()) return;
  //   setPosting(true);
  //   try {
  //     const r = await fetch(`/api/blog/comments`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         slug,
  //         title,
  //         author: author || undefined,
  //         content,
  //       }),
  //     });
  //     const d = await r.json();
  //     if (d.comment) {
  //       setComments((prev) => [d.comment, ...prev]);
  //       setContent("");
  //     }
  //   } finally {
  //     setPosting(false);
  //   }
  // };

  return (
    <div className="mt-10 space-y-8">
      <button
        onClick={handleLike}
        disabled={loadingLike}
        className={
          "px-4 py-2 rounded text-white disabled:opacity-60 " +
          (liked ? "bg-blue-600" : "bg-gray-600")
        }
      >
        {loadingLike ? "Liking..." : `Likes (${likes})`}
      </button>
      {/*
      <div>
        <h3 className="text-xl font-semibold mb-3">Comments</h3>
        <form onSubmit={handleComment} className="space-y-3 mb-6">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full border px-3 py-2 rounded bg-transparent"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment..."
            className="w-full border px-3 py-2 rounded bg-transparent min-h-[100px]"
          />
          <button
            type="submit"
            disabled={posting}
            className="px-4 py-2 rounded bg-gray-900 text-white disabled:opacity-60 dark:bg-gray-100 dark:text-black"
          >
            {posting ? "Posting..." : "Post comment"}
          </button>
        </form>

        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="border rounded p-3">
              <div className="text-sm text-gray-500 mb-1">
                {c.author || "Anonymous"} •{" "}
                {new Date(c.createdAt).toLocaleString()}
              </div>
              <div>{c.content}</div>
            </li>
          ))}
        </ul>
      </div>
      */}
    </div>
  );
}
