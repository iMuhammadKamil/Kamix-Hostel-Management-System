import {
  ShieldAlert,
  UserCheck,
  Calculator,
  Wrench,
  GraduationCap,
} from "lucide-react";

export function LogoStrip() {
  const roles = [
    {
      title: "Super Admin",
      desc: "Full governance & staff provisioning",
      icon: ShieldAlert,
      badge: "Master Access",
    },
    {
      title: "Chief Warden",
      desc: "Bed allocation & check-in approvals",
      icon: UserCheck,
      badge: "Wing Operations",
    },
    {
      title: "Lead Accountant",
      desc: "Rent invoicing & receipt tracking",
      icon: Calculator,
      badge: "Financial Desk",
    },
    {
      title: "Maintenance Tech",
      desc: "Plumbing, electrical & carpentry",
      icon: Wrench,
      badge: "Field Dispatch",
    },
    {
      title: "Resident Student",
      desc: "Self-service room, rent & pass portal",
      icon: GraduationCap,
      badge: "Student Life",
    },
  ];

  return (
    <section
      aria-label="Supported Campus Roles"
      className="py-12 md:py-16 bg-[#08090b] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-300 mb-8 text-center">
          Dedicated, permission-isolated workflows for every campus stakeholder
        </p>

        {/* 5 Real Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="p-4 rounded-xl bg-[#101420] flex items-center gap-3.5 animate-fade-up"
              >
                <Icon className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-sm font-semibold text-white block truncate">
                    {r.title}
                  </span>
                  <p className="text-[13px] text-slate-400 truncate mt-0.5">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
