import {
  Bed,
  Building2,
  Users,
  UserCheck,
  FileCheck,
  ArrowRightLeft,
  Receipt,
  CreditCard,
  CheckCircle,
  UtensilsCrossed,
  CalendarCheck,
  Wrench,
  AlertTriangle,
  ShieldCheck,
  Clock,
  KeyRound,
} from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: Bed,
      title: "Interactive Bed Matrix",
      desc: "Instant color-coded view of Vacant, Occupied, Reserved, and Maintenance beds across all wings.",
    },
    {
      icon: Building2,
      title: "Building & Floor Hierarchy",
      desc: "Structured property tree mapping branches to buildings, floors, rooms, and individual bed slots.",
    },
    {
      icon: Users,
      title: "Wing Gender Policies",
      desc: "Enforced Male, Female, and Co-ed wing separation rules preventing improper bed allocations.",
    },
    {
      icon: UserCheck,
      title: "3-Step Onboarding Wizard",
      desc: "Guided registration collecting personal profile details, KYC documents, and bed selection in one flow.",
    },
    {
      icon: FileCheck,
      title: "Digital KYC & ID Records",
      desc: "Store student ID cards, emergency guardian contacts, and verification documents safely.",
    },
    {
      icon: ArrowRightLeft,
      title: "1-Click Room Swaps",
      desc: "Easily transfer residents between available beds without losing invoice or deposit history.",
    },
    {
      icon: Receipt,
      title: "Monthly Rent Invoicing",
      desc: "Generate clear rent invoices with billing months, due dates, and itemized fee totals.",
    },
    {
      icon: CreditCard,
      title: "Security Deposit Ledger",
      desc: "Hold and track initial room caution deposits per allocation until formal tenant checkout.",
    },
    {
      icon: CheckCircle,
      title: "Payment Slip Verification",
      desc: "Accountants review pending transaction slips and confirm receipts with full audit trails.",
    },
    {
      icon: UtensilsCrossed,
      title: "7-Day Mess Menu Planner",
      desc: "Publish daily breakfast, lunch, and dinner menus accessible to all resident students.",
    },
    {
      icon: CalendarCheck,
      title: "Advance Meal Opt-Outs",
      desc: "Students can mark absence before meal lock times, helping kitchen staff minimize wasted food.",
    },
    {
      icon: Wrench,
      title: "Maintenance Ticket Desk",
      desc: "Categorize repair tickets by plumbing, electrical, carpentry, HVAC, or general campus repairs.",
    },
    {
      icon: AlertTriangle,
      title: "SLA Priority Tagging",
      desc: "Tag urgent issues as Emergency or High priority for prompt technician assignment and resolution.",
    },
    {
      icon: ShieldCheck,
      title: "Digital Gate Pass Requests",
      desc: "Students submit day-out or night-leave requests for warden review and digital approval.",
    },
    {
      icon: Clock,
      title: "Perimeter Curfew Desk",
      desc: "Monitor students currently outside campus, check-out timestamps, and expected return hours.",
    },
    {
      icon: KeyRound,
      title: "Super Admin Staff Portal",
      desc: "Provision individual staff accounts, assign specific roles, and reset credentials securely.",
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
            Real Working Modules
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Every operational feature built into the HMS system
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            No hypothetical promises. Every tool listed below is fully functional and ready to manage your student residences.
          </p>
        </div>

        {/* 16 Compact Cards */}
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
