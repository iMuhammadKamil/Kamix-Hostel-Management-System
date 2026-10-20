import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ExploreMore() {
  const cards = [
    {
      title: "Interactive Bed Matrix",
      desc: "Live visual status of all rooms, beds, and floor plans with gender allocation rules.",
      href: "#rooms",
    },
    {
      title: "3-Step Resident Onboarding",
      desc: "Guided intake workflow with digital student ID uploads and emergency contact logging.",
      href: "/login",
    },
    {
      title: "Rent Invoicing & Billing Ledger",
      desc: "Monthly rent invoices, deposit records, and payment slip review with full audit trails.",
      href: "#billing",
    },
    {
      title: "Weekly Mess Menu Planner",
      desc: "7-day breakfast, lunch, and dinner schedule with advance meal opt-out controls.",
      href: "#mess",
    },
    {
      title: "Gate Pass & Curfew Desk",
      desc: "Digital Day-Out and Night-Leave pass approvals with student departure and return timestamps.",
      href: "#gate",
    },
    {
      title: "Maintenance Service Queue",
      desc: "SLA-categorized repair tickets for plumbing, electrical, carpentry, and facility issues.",
      href: "#maintenance",
    },
    {
      title: "Super Admin Staff Management",
      desc: "Provision dedicated credentials for wardens, accountants, and technicians.",
      href: "#governance",
    },
    {
      title: "Resident Self-Service Portal",
      desc: "Students can view assigned rooms, roommate details, invoices, and meal schedules.",
      href: "/login",
    },
  ];

  return (
    <section
      id="resources"
      aria-label="Explore Platform Modules"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            System Navigation
          </p>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Explore all built-in HMS operational modules
          </h2>
        </div>

        {/* 8 Real Link Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group p-6 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/40 hover:bg-[#121622] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
