import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";

export function FinalCta() {
  return (
    <section
      id="cta"
      aria-label="Sign In Call to Action"
      className="py-24 md:py-36 bg-[#07080a] border-b border-white/[0.06] relative overflow-hidden text-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[-0.03em] leading-tight mb-6">
            Ready to manage your hostel with clarity and control?
          </h2>

          {/* One Line of Subtext */}
          <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-normal">
            Sign in with your authorized campus credentials to access your assigned operational dashboard.
          </p>

          {/* Large Primary Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-xl hover:shadow-amber-400/25 transition-all inline-flex items-center justify-center gap-2 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In to HMS Portal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Note Under It */}
          <p className="text-xs font-mono text-slate-500">
            Secure, role-based access for Super Admins, Wardens, Accountants, Maintenance &amp; Residents
          </p>
        </div>
      </div>
    </section>
  );
}
