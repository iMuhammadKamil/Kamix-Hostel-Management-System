import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function ensureDatabaseSeeded() {
  const userCount = await prisma.user.count();
  if (userCount > 0) return { alreadySeeded: true, count: userCount };

  const adminPassword = await bcrypt.hash("admin123", 10);
  const wardenPassword = await bcrypt.hash("warden123", 10);
  const accountantPassword = await bcrypt.hash("account123", 10);
  const maintPassword = await bcrypt.hash("maint123", 10);
  const residentPassword = await bcrypt.hash("resident123", 10);

  await prisma.user.create({
    data: {
      email: "admin@hms.com",
      passwordHash: adminPassword,
      fullName: "David Sterling (Super Admin)",
      phoneNumber: "+1 (555) 019-2831",
      role: "SUPER_ADMIN",
    },
  });

  await prisma.user.create({
    data: {
      email: "warden@hms.com",
      passwordHash: wardenPassword,
      fullName: "Robert Vance (Chief Warden)",
      phoneNumber: "+1 (555) 014-9921",
      role: "WARDEN",
      staffProfile: {
        create: {
          department: "MANAGEMENT",
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "accountant@hms.com",
      passwordHash: accountantPassword,
      fullName: "Alice Chen (Lead Accountant)",
      phoneNumber: "+1 (555) 018-7734",
      role: "ACCOUNTANT",
      staffProfile: {
        create: {
          department: "ACCOUNTS",
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "maintenance@hms.com",
      passwordHash: maintPassword,
      fullName: "Mike Kowalski (Senior Technician)",
      phoneNumber: "+1 (555) 012-3498",
      role: "MAINTENANCE_STAFF",
      staffProfile: {
        create: {
          department: "PLUMBING",
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      email: "resident@hms.com",
      passwordHash: residentPassword,
      fullName: "Alex Rivera (Student)",
      phoneNumber: "+1 (555) 017-8822",
      role: "RESIDENT",
      residentProfile: {
        create: {
          gender: "MALE",
          dob: new Date("2004-05-14"),
          idProofType: "STUDENT_ID",
          idProofNumber: "STU-2026-9921",
          emergencyName: "Elena Rivera",
          emergencyPhone: "+1 (555) 017-9900",
          emergencyRelation: "Mother",
        },
      },
    },
  });

  return { alreadySeeded: false, seededUsers: 5 };
}

