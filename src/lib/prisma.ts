// Create a Prisma client singleton safe for Next.js dev hot reloading
import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaClient =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

const optimizeKey = process.env.OPTIMIZE_API_KEY;
export const prisma = optimizeKey
  ? prismaClient
      .$extends(withOptimize({ apiKey: optimizeKey }))
      .$extends(withAccelerate())
  : prismaClient.$extends(withAccelerate());

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prismaClient;
