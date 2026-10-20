export function StatsSection() {
  const stats = [
    {
      number: "98.4%",
      caption: "Average annual residential occupancy rate achieved",
      poweredBy: "Smart Bed Matrix",
      isSample: true,
    },
    {
      number: "3.2 hrs",
      caption: "Time saved per floor allocation cycle vs manual paperwork",
      poweredBy: "Automated Onboarding",
      isSample: true,
    },
    {
      number: "$42,000",
      caption: "Average recovered utility leakage via submetering",
      poweredBy: "IoT Submeter Ledger",
      isSample: true,
    },
    {
      number: "100%",
      caption: "Curfew verification compliance at campus perimeter gates",
      poweredBy: "QR Gate Pass Desk",
      isSample: true,
    },
    {
      number: "34%",
      caption: "Reduction in dining hall kitchen over-preparation waste",
      poweredBy: "Meal Opt-Out AI",
      isSample: true,
    },
    {
      number: "< 15 min",
      caption: "Maintenance ticket initial response and dispatch SLA",
      poweredBy: "Kanban Service Desk",
      isSample: true,
    },
  ];

  return (
    <section
      id="stats"
      aria-label="Platform Impact and Benchmarks"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Benchmark Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Designed for scale, compliance, and zero-headache administration
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Representative performance benchmarks based on simulated multi-building campus deployments.
          </p>
        </div>

        {/* Six Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                    Sample Metric
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  {stat.caption}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Platform Engine:</span>
                <span className="font-mono text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Powered by {stat.poweredBy}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Disclaimers */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono text-slate-500 leading-relaxed">
            * Note: The metrics above are benchmark placeholders illustrating expected operational outcomes across 1,000+ bed campus facilities. Actual throughput varies by campus network architecture, hardware sensors, and resident policy.
          </p>
        </div>
      </div>
    </section>
  );
}

