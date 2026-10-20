import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ExploreMore() {
  const cards = [
    {
      title: "Self-Hosting Quickstart Guide",
      desc: "Deploy a production-ready HMS node on Docker in under 5 minutes with automatic SQLite or Postgres.",
      href: "#developers",
    },
    {
      title: "Interactive Bed Matrix Tour",
      desc: "Explore live floorplan vacancy telemetry, gender segregation rules, and 1-click room swaps.",
      href: "#product",
    },
    {
      title: "Smart Meter Submetering Blueprint",
      desc: "Learn how universities split electric vehicle and room AC power bills automatically.",
      href: "#billing",
    },
    {
      title: "Curfew & Perimeter Security Whitepaper",
      desc: "Digital gate passes, encrypted QR check-ins, and guardian escalation protocols.",
      href: "#curfew",
    },
    {
      title: "Mess Food Waste Reduction Case Study",
      desc: "How proactive meal opt-out headcounts save 34% in cafeteria kitchen operating costs.",
      href: "#value-props",
    },
    {
      title: "Role-Based Access & Governance",
      desc: "How Super Admins, Chief Wardens, and Accountants operate within strict permission silos.",
      href: "#features",
    },
    {
      title: "University SIS / ERP Integration Docs",
      desc: "Connect your Banner, Peoplesoft, or custom campus portal with webhook event feeds.",
      href: "#integrations",
    },
    {
      title: "Open Source Roadmap & Community",
      desc: "Discover upcoming milestone releases, submit pull requests, and vote on new campus modules.",
      href: "https://github.com",
      isExternal: true,
    },
  ];

  return (
    <section
      id="resources"
      aria-label="Explore Platform Resources"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Documentation &amp; Guides
          </p>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Explore more about the HMS ecosystem
          </h2>
        </div>

        {/* 8 Link Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              target={card.isExternal ? "_blank" : undefined}
              rel={card.isExternal ? "noopener noreferrer" : undefined}
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

