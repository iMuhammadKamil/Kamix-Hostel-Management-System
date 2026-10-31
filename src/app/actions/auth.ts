"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { createSession, clearSession, verifyPassword } from "@/lib/auth";
import { ensureDatabaseSeeded } from "@/lib/seed-runner";

export async function loginAction(prevState: any, formData: FormData) {
  const rawIdentifier = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!rawIdentifier || !password) {
    return { error: "Please provide both your email/username and password." };
  }

  const identifierLower = rawIdentifier.toLowerCase();
  const withDomain = identifierLower.includes("@") ? identifierLower : `${identifierLower}@hms.com`;

  try {
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifierLower },
          { email: withDomain },
        ],
      },
    });

    // If database is completely empty on fresh install, auto-seed default accounts
    if (!user) {
      const userCount = await prisma.user.count();
      if (userCount === 0) {
        await ensureDatabaseSeeded();
        user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: identifierLower },
              { email: withDomain },
            ],
          },
        });
      }
    }

    if (!user) {
      return { error: `No account found matching "${rawIdentifier}". Please verify your email or username.` };
    }

    if (!user.isActive) {
      return { error: `The account for ${user.email} is currently inactive. Please contact the administrator.` };
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return { error: "Incorrect password. Please verify your credentials and try again." };
    }

    await createSession(user.id);
  } catch (error: any) {
    console.error("Login action error:", error);
    return {
      error: `Authentication failed: ${error?.message || "Please check your database connection."}`,
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logoutAction() {
  await clearSession();
  revalidatePath("/", "layout");
  redirect("/login");
}
