import Link from "next/link";
import {
  Wrench,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Zap,
  Flame,
  Droplets,
  Hammer,
  ArrowRight,
} from "lucide-react";

export function Enterprise() {
  const repairCategories = [
    {
      icon: Droplets,
      title: "Plumbing & Water Systems",
      desc: "Fast reporting for pipe leaks, shower issues, and water pressure disruptions.",
    },
    {
      icon: Zap,
      title: "Electrical & Lighting",
      desc: "Fix short circuits, broken switches, ceiling fans, and room power outlets.",
    },
    {
      icon: Hammer,
      title: "Carpentry & Furniture",
      desc: "Address damaged bed frames, broken study desks, closets, and door hinges.",
    },
    {
      icon: Flame,
      title: "HVAC & Temperature Control",
      desc: "Maintain heating and room ventilation units with rapid technician dispatch.",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Priority Queue",
      desc: "Urgent hazards are flagged red and pinned to the top of technician dashboards.",
    },
    {
      icon: Clock,
      title: "Resolution SLA Tracking",
      desc: "Monitor open vs resolved ticket times to ensure campus maintenance standards.",
    },
    {
      icon: CheckCircle2,
      title: "Resident Feedback & Signoff",
      desc: "Students see when a ticket is assigned and verify when repairs are completed.",
    },
    {
      icon: Wrench,
      title: "Technician Assignment",
      desc: "Supervisors allocate specific repair tasks to on-duty campus maintenance staff.",
    },
  ];

  return (
    <section
      id="maintenance"
      aria-label="Campus Maintenance Dispatch"
      className="py-20 md:py-28 bg-[#07080a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/25 mb-4">
            Facilities &amp; Repairs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Integrated campus maintenance &amp; repair dispatch
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Ensure resident comfort and safety with a clear, categorized maintenance ticket queue that routes issues directly to campus technicians.
          </p>
        </div>

        {/* 2x4 Grid of Real Maintenance Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {repairCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center pt-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-lg hover:shadow-amber-400/20 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Sign In to Access Maintenance Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
