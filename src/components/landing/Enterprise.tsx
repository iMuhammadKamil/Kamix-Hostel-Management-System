import Link from "next/link";
import {
  ShieldCheck,
  Server,
  Headphones,
  Lock,
  Layers,
  FileText,
  Clock,
  KeyRound,
  ArrowRight,
} from "lucide-react";

export function Enterprise() {
  const enterpriseFeatures = [
    {
      icon: ShieldCheck,
      title: "Custom SLA & 99.99% Uptime",
      desc: "Guaranteed enterprise response times with 24/7 priority incident triage.",
    },
    {
      icon: Server,
      title: "Isolated Private Cloud VPC",
      desc: "Dedicated AWS/GCP clusters with single-tenant data isolation and data residency.",
    },
    {
      icon: Lock,
      title: "SAML 2.0 & Custom SSO",
      desc: "One-click authentication via Okta, Microsoft Entra ID, Shibboleth, or Google Workspace.",
    },
    {
      icon: Headphones,
      title: "Dedicated Housing Success Lead",
      desc: "Direct Slack channel and customized staff onboarding webinars for your campus teams.",
    },
    {
      icon: Layers,
      title: "Multi-Campus Consortium Support",
      desc: "Cross-campus reporting, shared bursary ledger, and tenant mobility rules.",
    },
    {
      icon: FileText,
      title: "SOC 2 Type II & FERPA Compliance",
      desc: "Comprehensive annual audits, encrypted at rest (AES-256) and in transit (TLS 1.3).",
    },
    {
      icon: Clock,
      title: "Automated Legacy Data Migration",
      desc: "Our engineering team ports your legacy Excel rosters and room allocation history for free.",
    },
    {
      icon: KeyRound,
      title: "Hardware Turnstile Integration",
      desc: "Direct integration service with ASSA ABLOY, Salto, and Dormakaba RFID door locks.",
    },
  ];

  return (
    <section
      id="enterprise"
      aria-label="Enterprise University Solutions"
      className="py-20 md:py-28 bg-[#07080a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/25 mb-4">
            Institutions &amp; Consortia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Enterprise resilience for 2,000+ bed university networks
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Scale across dozens of residence halls with centralized financial controls, FERPA-grade data safety, and dedicated white-glove engineering support.
          </p>
        </div>

        {/* 2x4 Grid of Feature Items with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {enterpriseFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Talk to Us Button */}
        <div className="text-center pt-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-lg hover:shadow-amber-400/20 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Talk to Our Enterprise Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

