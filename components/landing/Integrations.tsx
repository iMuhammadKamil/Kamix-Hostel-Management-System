import Link from "next/link";
import {
  CreditCard,
  MessageSquare,
  Mail,
  Zap,
  Database,
  Cloud,
  FileSpreadsheet,
  Lock,
  Cpu,
  Wifi,
  QrCode,
  Shield,
  Smartphone,
  Calendar,
  Share2,
  ExternalLink,
} from "lucide-react";

export function Integrations() {
  const integrations = [
    { name: "Stripe Connect", category: "Payments", icon: CreditCard },
    { name: "Twilio SMS", category: "Parent Alerts", icon: MessageSquare },
    { name: "SendGrid / Postmark", category: "Email Receipts", icon: Mail },
    { name: "PostgreSQL / SQLite", category: "Database", icon: Database },
    { name: "Tuya / MQTT IoT", category: "Submeters", icon: Zap },
    { name: "Banner / Ellucian", category: "Campus ERP", icon: Cloud },
    { name: "Canvas / Moodle", category: "LMS Sync", icon: FileSpreadsheet },
    { name: "SAML 2.0 / Okta", category: "SSO Auth", icon: Lock },
    { name: "REST Webhooks", category: "Event Engine", icon: Cpu },
    { name: "UniFi / Cisco Wi-Fi", category: "Access Control", icon: Wifi },
    { name: "Zebra QR Scanners", category: "Hardware", icon: QrCode },
    { name: "Hikvision CCTV", category: "Turnstiles", icon: Shield },
    { name: "Apple / Google Wallet", category: "Mobile IDs", icon: Smartphone },
    { name: "Google Calendar", category: "Duty Rotas", icon: Calendar },
    { name: "Slack / Teams", category: "Dispatch Bot", icon: Share2 },
    { name: "Zapier & n8n", category: "Workflows", icon: ExternalLink },
  ];

  return (
    <section
      id="integrations"
      aria-label="Ecosystem Integrations"
      className="py-20 md:py-28 bg-[#07080a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Connected Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Connects effortlessly with your existing campus tech stack
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Integrate billing gateways, turnstile hardware, IoT power meters, and university student information systems.
          </p>
        </div>

        {/* 16 Integration Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group p-5 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/40 hover:bg-[#121622] transition-all duration-200 flex items-center gap-3.5 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/25 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono truncate">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href="#integrations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] hover:border-white/[0.25] bg-white/[0.03] hover:bg-white/[0.06] text-sm font-semibold text-white transition-colors"
          >
            <span>Explore All 40+ Integrations &amp; API Docs</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

