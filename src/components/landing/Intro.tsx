import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <section
      id="intro"
      aria-label="Platform Introduction"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06]"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
          Legacy housing spreadsheets and manual paper gate passes hold campuses back.
          HMS brings{" "}
          <Link
            href="#product"
            className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            real-time bed telemetry
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>
          , automated{" "}
          <Link
            href="#billing"
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            utility billing submeters
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>
          , and audited{" "}
          <Link
            href="#curfew"
            className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 inline-flex items-center gap-0.5 transition-colors font-semibold"
          >
            student life compliance
            <ArrowUpRight className="w-4 h-4 inline" />
          </Link>{" "}
          together into one unified, open operating system.
        </h2>
      </div>
    </section>
  );
}

