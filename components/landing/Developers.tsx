import Link from "next/link";
import {
  Terminal,
  Code2,
  Server,
  BookOpen,
  ArrowRight,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export function Developers() {
  const cards = [
    {
      icon: Terminal,
      title: "Campus CLI",
      desc: "Provision rooms, run batch resident imports, and manage database migrations directly from your terminal.",
      command: "npx hms-cli rooms:seed --wing=north",
    },
    {
      icon: Code2,
      title: "Extensible REST & Webhook API",
      desc: "Full OpenAPI documentation with granular scoped keys for your custom university portals and turnstile relays.",
      command: "curl -X GET https://api.hms.edu/v1/beds",
    },
    {
      icon: Server,
      title: "1-Click Self-Hostable Engine",
      desc: "Deploy on Docker, Kubernetes, or bare metal with total data sovereignty under AGPLv3 and GDPR compliance.",
      command: "docker run -p 3000:3000 kamix/hms:latest",
    },
  ];

  return (
    <section
      id="developers"
      aria-label="Open Source and Developer Tools"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06] relative overflow-hidden"
    >
      {/* Decorative Block-Pattern Graphic built from a grid of squares */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-md border border-white/40 ${
                i % 4 === 0
                  ? "bg-amber-400/30"
                  : i % 3 === 0
                  ? "bg-blue-400/20"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Open Source &amp; Developer First
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Built for campus IT teams who value control and transparency
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Never get locked into proprietary, opaque legacy housing vendors. Audit the code, run on your private campus cloud, and tailor every workflow.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] text-sm font-bold text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-amber-400" />
              <span>Star on GitHub</span>
            </Link>
            <Link
              href="#resources"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>Read API Documentation</span>
            </Link>
          </div>
        </div>

        {/* 3 Developer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-7 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="rounded-xl bg-[#06070a] border border-white/[0.06] p-3 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                  <span className="truncate">{card.command}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
