import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section
      id="pricing"
      aria-label="Call to Action"
      className="py-24 md:py-36 bg-[#07080a] border-b border-white/[0.06] relative overflow-hidden text-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[-0.03em] leading-tight mb-6">
            Ready to transform your campus residence operations?
          </h2>

          {/* One Line of Subtext */}
          <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-normal">
            Deploy in minutes on your private infrastructure or start free on our cloud tier with up to 100 beds.
          </p>

          {/* Large Primary Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-xl hover:shadow-amber-400/25 transition-all inline-flex items-center justify-center gap-2 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get Started with HMS Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Small Note Under It */}
          <p className="text-xs font-mono text-slate-500">
            No credit card required &bull; 100% open-core source available &bull; Free community tier forever
          </p>
        </div>
      </div>
    </section>
  );
}

