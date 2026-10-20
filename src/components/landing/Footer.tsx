import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer() {
  const linkGroups = [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "#hero" },
        { label: "Room Allocations", href: "#product" },
        { label: "Student Ledger", href: "#billing" },
        { label: "Gate & Curfew", href: "#curfew" },
        { label: "Enterprise Tier", href: "#enterprise" },
        { label: "Changelog & Releases", href: "https://github.com" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "Visual Bed Matrix", href: "#features" },
        { label: "IoT Submeter Engine", href: "#billing" },
        { label: "Digital QR Passes", href: "#curfew" },
        { label: "Dining AI Opt-Outs", href: "#value-props" },
        { label: "Maintenance SLA Desk", href: "#features" },
        { label: "All Integrations", href: "#integrations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#resources" },
        { label: "API Reference", href: "#developers" },
        { label: "Self-Hosting Guide", href: "#developers" },
        { label: "Migration Blueprint", href: "#resources" },
        { label: "Security Whitepaper", href: "#enterprise" },
        { label: "Community Discord", href: "https://github.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/login" },
        { label: "Terms of Service", href: "/login" },
        { label: "Data Sub-processors", href: "/login" },
        { label: "FERPA Compliance", href: "#enterprise" },
        { label: "GDPR Agreement", href: "#enterprise" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About HMS", href: "#intro" },
        { label: "Customer Stories", href: "#stats" },
        { label: "Brand Kit & Logo", href: "#" },
        { label: "Contact Housing Sales", href: "/login" },
        { label: "Partner Program", href: "#enterprise" },
      ],
    },
  ];

  return (
    <footer
      aria-label="Footer"
      className="bg-[#050608] text-slate-400 border-t border-white/[0.08] pt-16 pb-12"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                {group.title}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges & Social Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Trust Badges as Pill Labels */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>FERPA &amp; GDPR Compliant</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>AGPLv3 Open Core</span>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HMS on GitHub"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HMS on Twitter/X"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HMS on LinkedIn"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Language Selector */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HMS — Hostel Management System. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <select
                aria-label="Select Language"
                defaultValue="en"
                className="bg-transparent border-none text-slate-400 hover:text-white focus:outline-hidden text-xs cursor-pointer font-medium"
              >
                <option value="en" className="bg-[#0e1118] text-white">English (US)</option>
                <option value="es" className="bg-[#0e1118] text-white">Español</option>
                <option value="fr" className="bg-[#0e1118] text-white">Français</option>
                <option value="de" className="bg-[#0e1118] text-white">Deutsch</option>
              </select>
            </div>
            <span>•</span>
            <span>Enterprise Campus OS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
