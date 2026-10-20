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
      className="py-12 md:py-16 bg-[#08090b] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8 text-center">
          Dedicated, permission-isolated workflows for every campus stakeholder
        </p>

        {/* 5 Real Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="p-4 rounded-xl bg-[#0e1118] border border-white/[0.06] hover:border-amber-400/30 transition-colors flex items-center gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                      {r.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
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
