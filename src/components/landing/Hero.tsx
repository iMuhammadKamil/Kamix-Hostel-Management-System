import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  LogIn,
  BedDouble,
  Receipt,
  ShieldCheck,
  UtensilsCrossed,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const featureChips = [
    { label: "Visual Bed Allocations", icon: BedDouble },
    { label: "Monthly Rent Invoicing", icon: Receipt },
    { label: "Digital Gate Passes", icon: ShieldCheck },
    { label: "Mess Menus & Opt-Outs", icon: UtensilsCrossed },
    { label: "Maintenance Dispatch", icon: Wrench },
  ];

  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07090e]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Headline — 2 lines max everywhere */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.035em] leading-[1.06] max-w-4xl mx-auto mb-6 animate-fade-up">
          Campus housing,
          <br />
          <span className="text-amber-400">resolved.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal animate-fade-up">
          Integrated operations platform for student residence halls: live bed allocations, automated invoicing, meal schedules, and digital gate passes.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up">
          <Link
            href="/login"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors text-sm flex items-center justify-center gap-2 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In to Portal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#rooms"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] transition-colors text-sm flex items-center justify-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Explore Working Modules</span>
          </Link>
        </div>

        {/* Row of Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-16">
          {featureChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <div
                key={chip.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141e] border border-white/[0.08] text-sm font-medium text-slate-300 animate-fade-up"
              >
                <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{chip.label}</span>
              </div>
            );
          })}
        </div>

        {/* Operations Dashboard Screenshot Frame */}
        <div className="relative mx-auto max-w-5xl group animate-fade-up" data-ui="hero-stage">
          <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e15] overflow-hidden">
            <Image
              src="/placeholder/hero-dashboard.svg"
              alt="HMS Enterprise Operations Console Preview"
              width={1200}
              height={675}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.008]"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
