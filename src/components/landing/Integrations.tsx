import Link from "next/link";
import {
  Bed,
  Users,
  Receipt,
  UtensilsCrossed,
  Wrench,
  ShieldCheck,
  UserCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

export function Integrations() {
  const subsystems = [
    {
      name: "Property & Bed Matrix",
      category: "Wings, Rooms & Statuses",
      icon: Bed,
      desc: "Live inventory mapping for floors and single/double/triple bed allocations.",
    },
    {
      name: "Resident KYC Lifecycle",
      category: "Profiles & Tenancy",
      icon: Users,
      desc: "3-step onboarding with student ID proofs and emergency contact records.",
    },
    {
      name: "Student Rent Ledger",
      category: "Billing & Invoicing",
      icon: Receipt,
      desc: "Automated monthly rent billing, deposit tracking, and receipt verification.",
    },
    {
      name: "Mess Menu & Headcounts",
      category: "Canteen Operations",
      icon: UtensilsCrossed,
      desc: "7-day meal schedules with student opt-outs to reduce kitchen food waste.",
    },
    {
      name: "Maintenance Dispatch",
      category: "Facility Repairs",
      icon: Wrench,
      desc: "Categorized tickets with SLA priority tagging for plumbing and electrical fixes.",
    },
    {
      name: "Gate Pass & Curfew Desk",
      category: "Perimeter Security",
      icon: ShieldCheck,
      desc: "Digital student leave requests, warden approvals, and curfew timestamps.",
    },
    {
      name: "Staff Account Management",
      category: "Super Admin Governance",
      icon: UserCheck,
      desc: "Provision isolated accounts for wardens, accountants, and technicians.",
    },
    {
      name: "Cryptographic Sessions",
      category: "Server-Side RBAC",
      icon: Lock,
      desc: "Bcrypt password hashing and HMAC-signed stateless session cookies.",
    },
  ];

  return (
    <section
      id="mess"
      aria-label="Integrated Campus Subsystems"
      className="py-20 md:py-28 bg-[#07080a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Unified Subsystems
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            All hostel operations operating in one cohesive system
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            No fragmented tools or disconnected spreadsheets. Every campus department coordinates on the same unified database.
          </p>
        </div>

        {/* 8 Subsystem Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {subsystems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group p-6 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/40 hover:bg-[#121622] transition-all duration-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/25 transition-colors shrink-0 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400/80">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 mb-2 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] hover:border-white/[0.25] bg-white/[0.03] hover:bg-white/[0.06] text-sm font-semibold text-white transition-colors"
          >
            <span>Sign in to Experience the Integrated Platform</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
