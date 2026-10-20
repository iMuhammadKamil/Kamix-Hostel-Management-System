import {
  Bed,
  Key,
  ShieldCheck,
  CreditCard,
  QrCode,
  UtensilsCrossed,
  Wrench,
  Users,
  Gauge,
  BellRing,
  Lock,
  FileCheck2,
  Cpu,
  Layers,
  History,
  Activity,
} from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: Bed,
      title: "Interactive Bed Matrix",
      desc: "Instant color-coded vacancy, occupied, and maintenance status across all blocks.",
    },
    {
      icon: Key,
      title: "Digital Key Release",
      desc: "One-time check-in pin verification sent directly to students upon verified deposit.",
    },
    {
      icon: CreditCard,
      title: "Consolidated Student Ledger",
      desc: "Room fees, meal plans, electricity submeters, and damage deposits unified.",
    },
    {
      icon: QrCode,
      title: "Digital QR Gate Passes",
      desc: "Fast guard checkpoint scanning with real-time curfew and overdue logging.",
    },
    {
      icon: UtensilsCrossed,
      title: "Dynamic Mess Headcounts",
      desc: "Advance meal opt-outs empower canteen chefs to minimize costly kitchen waste.",
    },
    {
      icon: Wrench,
      title: "Maintenance Kanban",
      desc: "SLA-tracked repair requests categorized by electrical, plumbing, and carpentry.",
    },
    {
      icon: Users,
      title: "Roommate Compatibility",
      desc: "Smart placement based on study discipline, sleep habits, and year group.",
    },
    {
      icon: Gauge,
      title: "IoT Utility Submetering",
      desc: "Split air conditioning and heating power consumption proportionally per resident.",
    },
    {
      icon: ShieldCheck,
      title: "Role-Based RBAC Security",
      desc: "Strictly isolated access for Wardens, Accountants, Technicians, and Students.",
    },
    {
      icon: BellRing,
      title: "Automated Parent Alerts",
      desc: "Instant SMS/email notifications for approved leaves or overdue night curfews.",
    },
    {
      icon: FileCheck2,
      title: "Digital KYC & Tenancy",
      desc: "Secure upload and verification of government IDs, student cards, and emergency contacts.",
    },
    {
      icon: Lock,
      title: "Tamper-Proof Audit Trail",
      desc: "Every room swap, fee concession, and maintenance completion logged forever.",
    },
    {
      icon: Layers,
      title: "Multi-Campus Property Wings",
      desc: "Hierarchical management of branches, buildings, floors, rooms, and individual beds.",
    },
    {
      icon: Cpu,
      title: "REST & Webhook APIs",
      desc: "Bi-directional sync with university student information systems (SIS/ERP).",
    },
    {
      icon: History,
      title: "Offline Sync Resilience",
      desc: "Gate guards keep logging check-ins even when campus WiFi experiences outages.",
    },
    {
      icon: Activity,
      title: "Campus Occupancy Analytics",
      desc: "Executive forecasting of bed churn, yield per square foot, and revenue collections.",
    },
  ];

  return (
    <section
      id="features"
      aria-label="Features Grid"
      className="py-20 md:py-28 bg-[#07080a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Comprehensive Suite
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Every operational tool required to run high-density residences
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            From the front entrance turnstiles to the accountant ledger, HMS digitizes every step of hostel life.
          </p>
        </div>

        {/* 16 Compact Cards (4 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/50 hover:bg-[#121622] transition-all duration-200 hover:-translate-y-0.5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:border-amber-400/30 group-hover:bg-amber-400/10 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

