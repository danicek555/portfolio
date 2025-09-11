import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const runtime = "nodejs";

async function ensurePost(slug: string, title?: string) {
  return prisma.post.upsert({
    where: { slug },
    create: { slug, title: title || slug },
    update: {},
    select: { id: true },
  });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug)
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  const post = await prisma.post.findUnique({
    where: { slug },
    select: { id: true },
    cacheStrategy: { swr: 300, ttl: 300 },
  });
  if (!post) return NextResponse.json({ comments: [] });

  const comments = await prisma.comment.findMany({
    where: { postId: post.id },
    orderBy: { createdAt: "desc" },
    select: { id: true, author: true, content: true, createdAt: true },
    cacheStrategy: { swr: 30, ttl: 30 },
  });
  return NextResponse.json({ comments });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const slug = body?.slug as string | undefined;
  const title = body?.title as string | undefined;
  const author = (body?.author as string | undefined)?.slice(0, 60) || null;
  const content = (body?.content as string | undefined)?.trim();

  if (!slug || !content) {
    return NextResponse.json(
      { error: "Missing slug or content" },
      { status: 400 }
    );
  }

  // Very basic anti-spam: limit length
  if (content.length > 2000) {
    return NextResponse.json({ error: "Comment too long" }, { status: 400 });
  }

  const { id: postId } = await ensurePost(slug, title);

  const created = await prisma.comment.create({
    data: { postId, author, content },
    select: { id: true, author: true, content: true, createdAt: true },
  });

  return NextResponse.json({ comment: created });
}
