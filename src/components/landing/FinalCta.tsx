import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";

export function FinalCta() {
  return (
    <section
      id="cta"
      aria-label="Sign In Call to Action"
      className="py-24 md:py-36 bg-[#07080a] relative overflow-hidden text-center"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
        <div className="max-w-3xl mx-auto">
          {/* Centered Heading — 2 lines max */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.03em] leading-tight mb-6">
            Hostel operations, resolved.
          </h2>

          {/* One Line of Subtext */}
          <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-normal">
            Sign in with your authorized credentials to access your assigned operational dashboard.
          </p>

          {/* Large Primary Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In to HMS Portal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Note Under It */}
          <p className="text-sm text-slate-400 font-normal">
            Secure, role-based access for Super Admins, Wardens, Accountants, Maintenance &amp; Residents
          </p>
        </div>
      </div>
    </section>
  );
}
