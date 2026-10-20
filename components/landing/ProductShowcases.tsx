import Image from "next/image";
import {
  CheckCircle2,
} from "lucide-react";

export function ProductShowcases() {
  const showcases = [
    {
      id: "rooms",
      badge: "Rooms & Beds",
      title: "Interactive Bed Matrix & Resident Lifecycle",
      description:
        "Easily view and manage your hostel's complete building hierarchy. Assign students to vacant beds with gender-enforced rules, execute seamless 1-click room swaps, and maintain an accurate live count of campus occupancy.",
      chips: [
        "Color-coded Vacant, Occupied & Reserved beds",
        "Male, Female & Co-ed wing separation",
        "1-click resident room reassignments",
        "Digital KYC identification storage",
      ],
      image: "/placeholder/showcase-bed-matrix.svg",
      imageAlt: "Interactive bed allocations floor matrix screenshot placeholder",
      reverse: false,
    },
    {
      id: "billing",
      badge: "Finance & Accounts",
      title: "Automated Monthly Invoicing & Deposit Tracking",
      description:
        "Keep student accounting clean and transparent. HMS automatically compiles monthly room rent invoices, records initial security deposits, and allows accountants to verify pending offline payment slips with a complete audit history.",
      chips: [
        "Itemized monthly rent invoice generation",
        "Security caution deposit tracking",
        "Offline payment slip verification",
        "Clear Paid vs Pending payment statuses",
      ],
      image: "/placeholder/showcase-billing.svg",
      imageAlt: "Student ledger and invoicing screenshot placeholder",
      reverse: true,
    },
    {
      id: "gate",
      badge: "Gate & Curfew Desk",
      title: "Digital Gate Passes & Campus Curfew Monitoring",
      description:
        "Replace slow, lost paper sign-out books with a modern digital desk. Students submit pass requests from their phones, wardens review and approve them online, and gatekeepers log student departures and return times accurately.",
      chips: [
        "Digital Day-Out, Night-Out & Emergency passes",
        "Warden 1-tap review and approval",
        "Real-time log of students outside campus",
        "Curfew compliance and return timestamps",
      ],
      image: "/placeholder/showcase-curfew.svg",
      imageAlt: "Gate pass approval and curfew monitoring screenshot placeholder",
      reverse: false,
    },
  ];

  return (
    <section
      id="modules"
      aria-label="Core HMS Modules"
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
