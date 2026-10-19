import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

if (process.env.VERCEL) {
  const tmpDbPath = "/tmp/dev.db";
  const candidatePaths = [
    path.join(process.cwd(), "prisma", "dev.db"),
    path.join(process.cwd(), "dev.db"),
    "/var/task/prisma/dev.db",
    "/var/task/dev.db",
  ];
  const bundledDb = candidatePaths.find((p) => fs.existsSync(p));

  if (!fs.existsSync(tmpDbPath) && bundledDb) {
    try {
      fs.copyFileSync(bundledDb, tmpDbPath);
    } catch (e) {
      console.error("Failed to copy sqlite db to /tmp:", e);
    }
  }

  process.env.DATABASE_URL = `file:${tmpDbPath}`;
} else if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./dev.db";
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
