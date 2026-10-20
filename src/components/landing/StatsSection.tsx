export function StatsSection() {
  const capabilities = [
    {
      metric: "5",
      label: "Dedicated Role Dashboards",
      description: "Customized interfaces for Super Admin, Warden, Accountant, Maintenance & Students.",
      feature: "Role-Based Access Control",
    },
    {
      metric: "100%",
      label: "Digital Resident KYC",
      description: "Secure government ID, student card uploads, and emergency contacts on file.",
      feature: "3-Step Onboarding Wizard",
    },
    {
      metric: "3",
      label: "Wing Gender Policies",
      description: "Automated enforcement preventing cross-gender room assignments (Male, Female, Co-ed).",
      feature: "Property Allocation Rules",
    },
    {
      metric: "24/7",
      label: "Gate Pass Verification",
      description: "Real-time logging of departures, expected return times, and curfew compliance.",
      feature: "Gate & Curfew Desk",
    },
    {
      metric: "7 Days",
      label: "Weekly Mess Menu Scheduling",
      description: "Advance breakfast, lunch, and dinner menu publication with meal opt-out controls.",
      feature: "Mess & Canteen Portal",
    },
    {
      metric: "4 Levels",
      label: "Maintenance SLA Priorities",
      description: "Categorized dispatch for Emergency, High, Medium, and Low facility repairs.",
      feature: "Maintenance Ticket Desk",
    },
  ];

  return (
    <section
      id="stats"
      aria-label="System Capabilities and Metrics"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Core Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Built around the real daily operations of hostel life
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Every feature is purposefully engineered to eliminate manual friction between students, wardens, and accountants.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                    Built-In Feature
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">System Subsystem:</span>
                <span className="font-mono text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 text-[11px]">
                  {item.feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
