import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Building2,
  ShieldCheck,
  CreditCard,
  Zap,
} from "lucide-react";

export function Hero() {
  const featureChips = [
    { label: "Real-time Bed Allocations", icon: Building2 },
    { label: "Automated Student Invoicing", icon: CreditCard },
    { label: "Curfew & Digital Gate Passes", icon: ShieldCheck },
    { label: "Zero-Setup Cloud & Self-Host", icon: Zap },
  ];

  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background Soft Glow Radial / Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-blue-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Version / Announcement Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-medium mb-8 hover:bg-amber-400/15 transition-colors cursor-default animate-fade-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-mono font-bold uppercase tracking-wider text-[11px]">
            v2.4 Announced
          </span>
          <span className="text-white/30">•</span>
          <span className="text-slate-300">
            Automated submeter billing &amp; instant room allocations
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </div>

        {/* Headline in Three Short Benefit Phrases */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.035em] leading-[1.08] max-w-4xl mx-auto mb-6">
          Allocate rooms faster.
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Automate campus billing.
          </span>
          <br />
          Keep students safe.
        </h1>

        {/* One-Sentence Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          The modern, open-core operating system built for university residence halls, student housing directors, and campus life teams.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/login"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-all shadow-lg hover:shadow-amber-400/20 text-sm flex items-center justify-center gap-2 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Get Started with HMS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] transition-all text-sm flex items-center justify-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>View Interactive Demo</span>
          </Link>
        </div>

        {/* Row of Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-16">
          {featureChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <div
                key={chip.label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11141e] border border-white/[0.08] text-xs font-medium text-slate-300 hover:border-amber-400/30 transition-colors shadow-xs"
              >
                <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{chip.label}</span>
              </div>
            );
          })}
        </div>

        {/* Large Screenshot Placeholder Frame with Soft Glow Behind It */}
        <div className="relative mx-auto max-w-5xl group">
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-700 pointer-events-none" />

          {/* Bordered Frame */}
          <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e15] shadow-2xl overflow-hidden">
            <Image
              src="/placeholder/hero-dashboard.svg"
              alt="HMS Enterprise Operations Console Preview Placeholder"
              width={1200}
              height={675}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.008]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

