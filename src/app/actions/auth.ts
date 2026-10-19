"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { createSession, clearSession, verifyPassword } from "@/lib/auth";
import { ensureDatabaseSeeded } from "@/lib/seed-runner";

export async function loginAction(prevState: any, formData: FormData) {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please provide both email and password." };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.isActive) {
      return { error: "Invalid credentials or account is inactive." };
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return { error: "Invalid credentials. Please check your password." };
    }

    await createSession(user.id);
  } catch (error: any) {
    console.error("Login action error:", error);
    return {
      error: `Database connection error: ${error?.message || "Please ensure DATABASE_URL is configured on Vercel."}`,
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function devQuickLoginAction(role: string) {
  try {
    let user = await prisma.user.findFirst({
      where: { role, isActive: true },
    });

    // If database is empty, seed initial personas automatically
    if (!user) {
      await ensureDatabaseSeeded();
      user = await prisma.user.findFirst({
        where: { role, isActive: true },
      });
    }

    if (!user) {
      return {
        success: false,
        message: `No active user found for role: ${role}. Database may still be initializing.`,
      };
    }

    await createSession(user.id);
    revalidatePath("/", "layout");
    return { success: true, role: user.role };
  } catch (error: any) {
    console.error("Dev quick login error:", error);
    return {
      success: false,
      message: `Database error: ${error?.message || "Could not reach database. Check Vercel DATABASE_URL."}`,
    };
  }
}

export async function logoutAction() {
  await clearSession();
  revalidatePath("/", "layout");
  redirect("/login");
}
