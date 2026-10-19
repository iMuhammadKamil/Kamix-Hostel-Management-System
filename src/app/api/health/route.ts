import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ensureDatabaseSeeded } from "@/lib/seed-runner";

export const dynamic = "force-dynamic";

export async function GET() {
  const envInfo = {
    hasDatabaseUrl: !!process.env.DATABASE_URL,
    hasPostgresPrismaUrl: !!process.env.POSTGRES_PRISMA_URL,
    hasPostgresUrl: !!process.env.POSTGRES_URL,
    isLocalFallback: process.env.DATABASE_URL?.includes("localhost") ?? false,
  };

  try {
    const seedResult = await ensureDatabaseSeeded();
    const userCount = await prisma.user.count();

    return NextResponse.json({
      status: "ok",
      database: "connected",
      userCount,
      seedResult,
      envInfo,
    });
  } catch (error: any) {
    console.error("Health check database error:", error);
    return NextResponse.json(
      {
        status: "error",
        database: "connection_failed",
        errorMessage: error?.message || String(error),
        errorCode: error?.code,
        envInfo,
      },
      { status: 500 }
    );
  }
}

