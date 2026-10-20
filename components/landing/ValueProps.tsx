import {
  BedDouble,
  Receipt,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";

export function ValueProps() {
  const props = [
    {
      icon: BedDouble,
      title: "Visual Bed Allocations",
      description:
        "Assign wings, rooms, and individual beds with gender rules and real-time vacant telemetry.",
      accent: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      icon: Receipt,
      title: "Automated Student Ledger",
      description:
        "Generate recurring monthly rent, prorated room swaps, and integrated AC/submeter charges.",
      accent: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    },
    {
      icon: ShieldCheck,
      title: "Curfew & Gate Passes",
      description:
        "Empower campus security guards with instant QR verification and automated guardian curfew alerts.",
      accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
    {
      icon: UtensilsCrossed,
      title: "Mess & Kitchen Waste AI",
      description:
        "Capture student meal opt-outs in advance to prevent kitchen food over-preparation and slash waste.",
      accent: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    },
  ];

  return (
    <section
      id="value-props"
      aria-label="Core Value Propositions"
      className="py-20 md:py-28 bg-[#07080a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="group relative p-7 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 group-hover:scale-105 transition-transform ${prop.accent}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {prop.description}
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

