"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { UserRoles } from "@/lib/constants";
import bcrypt from "bcryptjs";

// Allowed staff roles that Super Admin can provision
const ALLOWED_STAFF_ROLES = [
  UserRoles.WARDEN,
  UserRoles.ACCOUNTANT,
  UserRoles.MAINTENANCE_STAFF,
];

export async function createStaffAccountAction(prevState: any, formData: FormData) {
  const currentUser = await getSessionUser();
  if (!currentUser || currentUser.role !== UserRoles.SUPER_ADMIN) {
    return { error: "Unauthorized: Only Super Administrators can provision staff accounts." };
  }

  const fullName = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;
  const phoneNumber = (formData.get("phoneNumber") as string)?.trim() || null;
  const role = formData.get("role") as string;
  const department = (formData.get("department") as string)?.trim() || "MANAGEMENT";

  if (!fullName || !email || !password || !role) {
    return { error: "Please fill in all required fields (Name, Email, Password, Role)." };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters long." };
  }

  if (!ALLOWED_STAFF_ROLES.includes(role as any)) {
    return {
      error: "Invalid role selection. Staff roles can only be Warden, Accountant, or Maintenance.",
    };
  }

  try {
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return { error: `An account with email "${email}" already exists.` };
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        passwordHash,
        fullName,
        phoneNumber,
        role,
        isActive: true,
        staffProfile: {
          create: {
            department,
          },
        },
      },
    });

    revalidatePath("/dashboard/staff");
    return { success: true, message: `Staff account created for ${fullName} (${role}).` };
  } catch (error: any) {
    console.error("Create staff error:", error);
    return { error: `Failed to create staff account: ${error.message}` };
  }
}

export async function toggleStaffStatusAction(userId: string) {
  const currentUser = await getSessionUser();
  if (!currentUser || currentUser.role !== UserRoles.SUPER_ADMIN) {
    return { success: false, error: "Unauthorized access." };
  }

  if (currentUser.id === userId) {
    return { success: false, error: "You cannot deactivate your own Super Admin account." };
  }

  try {
    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!targetUser) {
      return { success: false, error: "Staff member not found." };
    }

    if (targetUser.role === UserRoles.SUPER_ADMIN) {
      return { success: false, error: "Cannot modify status of another Super Admin." };
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { isActive: !targetUser.isActive },
    });

    revalidatePath("/dashboard/staff");
    return {
      success: true,
      message: `Account for ${updated.fullName} has been ${updated.isActive ? "activated" : "deactivated"}.`,
    };
  } catch (error: any) {
    console.error("Toggle staff status error:", error);
    return { success: false, error: error.message };
  }
}

export async function resetStaffPasswordAction(userId: string, newPassword: string) {
  const currentUser = await getSessionUser();
  if (!currentUser || currentUser.role !== UserRoles.SUPER_ADMIN) {
    return { success: false, error: "Unauthorized access." };
  }

  if (!newPassword || newPassword.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  try {
    const passwordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    revalidatePath("/dashboard/staff");
    return { success: true, message: "Password updated successfully." };
  } catch (error: any) {
    console.error("Reset password error:", error);
    return { success: false, error: error.message };
  }
}

