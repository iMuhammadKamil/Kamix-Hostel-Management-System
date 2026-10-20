import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <section
      id="intro"
      aria-label="Platform Mission"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06]"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
          Paper registers and disorganized room records slow campus staff down.
          HMS brings{" "}
          <Link
            href="#rooms"
            className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            interactive bed allocations
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>
          , automated{" "}
          <Link
            href="#billing"
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            monthly rent invoices
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>
          , digital{" "}
          <Link
            href="#gate"
            className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            gate pass approvals
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>
          , and{" "}
          <Link
            href="#mess"
            className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            cafeteria meal schedules
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>{" "}
          into one clean, reliable operations platform.
        </h2>
      </div>
    </section>
  );
}
