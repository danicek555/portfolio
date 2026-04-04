import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import crypto from "node:crypto";

export const runtime = "nodejs";

function getClientIpAndUa(req: Request) {
  const xff = req.headers.get("x-forwarded-for") || "";
  const ip =
    xff.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";
  return { ip, ua };
}

function hashAnonymousIdentity(ip: string, ua: string) {
  return crypto.createHash("sha256").update(`${ip}|${ua}`).digest("hex");
}

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
  if (!post) return NextResponse.json({ count: 0, liked: false });

  const { ip, ua } = getClientIpAndUa(req);
  const ipHash = hashAnonymousIdentity(ip, ua);

  const [count, existing] = await Promise.all([
    prisma.like.count({
      where: { postId: post.id },
      cacheStrategy: { swr: 60, ttl: 60 },
    }),
    prisma.like.findUnique({
      where: { postId_ipHash: { postId: post.id, ipHash } },
      select: { id: true },
    }),
  ]);
  return NextResponse.json({ count, liked: Boolean(existing) });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const slug = body?.slug as string | undefined;
  const title = body?.title as string | undefined;
  if (!slug)
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  const { ip, ua } = getClientIpAndUa(req);
  const ipHash = hashAnonymousIdentity(ip, ua);

  const { id: postId } = await ensurePost(slug, title);

  // Idempotent like: create if not exists, otherwise no-op
  await prisma.like.upsert({
    where: { postId_ipHash: { postId, ipHash } },
    create: { postId, ipHash },
    update: {},
    select: { id: true },
  });

  const count = await prisma.like.count({
    where: { postId },
    cacheStrategy: { swr: 0, ttl: 0 }, // return fresh count after write
  });
  return NextResponse.json({ count, liked: true });
}

export async function DELETE(req: Request) {
  const bodyOrNull = await req.json().catch(() => null);
  const slug =
    (bodyOrNull?.slug as string | undefined) ??
    new URL(req.url).searchParams.get("slug") ??
    undefined;
  if (!slug)
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  const { ip, ua } = getClientIpAndUa(req);
  const ipHash = hashAnonymousIdentity(ip, ua);

  const post = await prisma.post.findUnique({
    where: { slug },
    select: { id: true },
    cacheStrategy: { swr: 300, ttl: 300 },
  });
  if (!post) return NextResponse.json({ count: 0, liked: false });

  await prisma.like.deleteMany({ where: { postId: post.id, ipHash } });

  const count = await prisma.like.count({ where: { postId: post.id } });
  return NextResponse.json({ count, liked: false });
}
