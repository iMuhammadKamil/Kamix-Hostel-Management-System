import { requireAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { UserRoles } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { StaffManagerView } from "@/components/staff/StaffManagerView";

export const metadata = {
  title: "Staff & Team Management | HMS — Hostel Management System",
  description: "Manage individual staff accounts, role assignments, and permissions.",
};

export default async function StaffManagementPage() {
  const user = await requireAuth([UserRoles.SUPER_ADMIN]);

  const staffMembers = await prisma.user.findMany({
    where: {
      role: {
        in: [
          UserRoles.SUPER_ADMIN,
          UserRoles.WARDEN,
          UserRoles.ACCOUNTANT,
          UserRoles.MAINTENANCE_STAFF,
        ],
      },
    },
    include: {
      staffProfile: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar user={user} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StaffManagerView staffList={staffMembers} currentUserId={user.id} />
      </main>
    </div>
  );
}

