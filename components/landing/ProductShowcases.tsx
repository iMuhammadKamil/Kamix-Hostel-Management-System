import Image from "next/image";
import {
  Bed,
  CheckCircle2,
  Receipt,
  ShieldCheck,
  Zap,
  Smartphone,
  Gauge,
  Lock,
} from "lucide-react";

export function ProductShowcases() {
  const showcases = [
    {
      id: "product",
      badge: "Visual Inventory",
      title: "Real-time Bed Allocations & 3D Floor Telemetry",
      description:
        "Say goodbye to double-booked rooms and disorganized master keys. HMS presents an interactive architectural hierarchy of branches, buildings, floors, rooms, and bed statuses updated second-by-second.",
      chips: [
        "Floorplan vacancy heatmaps",
        "Gender-isolated wing policies",
        "1-click resident room swaps",
        "Digital KYC verification",
      ],
      image: "/placeholder/showcase-bed-matrix.svg",
      imageAlt: "Interactive bed allocations floor matrix screenshot placeholder",
      reverse: false,
    },
    {
      id: "billing",
      badge: "Financial Engine",
      title: "Automated Invoicing & IoT Submeter Splitting",
      description:
        "Eliminate arguments over shared utility bills. HMS connects to smart energy and water submeters, calculates exact per-tenant consumption, generates recurring invoices, and tracks payment reconciliation across offline and online gateways.",
      chips: [
        "Prorated rent calculations",
        "AC kWh submeter auto-splitting",
        "Stripe & bank receipt audit",
        "Automatic overdue late fees",
      ],
      image: "/placeholder/showcase-billing.svg",
      imageAlt: "Automated student ledger and utility submeter billing screenshot placeholder",
      reverse: true,
    },
    {
      id: "curfew",
      badge: "Campus Security",
      title: "Digital Gate Passes & Automated Curfew Enforcement",
      description:
        "Protect resident safety without slowing down campus entry. Students request night-out passes via mobile, wardens approve with one tap, and security guards scan time-stamped QR codes at the gate.",
      chips: [
        "Time-limited encrypted QR codes",
        "Automated overdue curfew alerts",
        "Parent SMS notifications",
        "Guard offline scan cache",
      ],
      image: "/placeholder/showcase-curfew.svg",
      imageAlt: "Gate pass approval and curfew verification dashboard screenshot placeholder",
      reverse: false,
    },
  ];

  return (
    <section
      id="product-showcases"
      aria-label="Deep-Dive Product Showcases"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06] space-y-24 md:space-y-36"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {showcases.map((block, idx) => (
          <div
            key={block.id}
            id={block.id}
            className={`flex flex-col ${
              block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12 lg:gap-16 ${idx !== 0 ? "mt-24 md:mt-36" : ""}`}
          >
            {/* Text Column */}
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/25">
                {block.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {block.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal">
                {block.description}
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {block.chips.map((chip) => (
                  <div
                    key={chip}
                    className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-[#121520] border border-white/[0.08] px-3 py-2 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshot Placeholder Column */}
            <div className="flex-1 w-full group">
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e15] shadow-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-300">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

