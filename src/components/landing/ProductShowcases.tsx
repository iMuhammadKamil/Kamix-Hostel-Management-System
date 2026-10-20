import {
  CheckCircle2,
  Building,
  Receipt,
  ShieldCheck,
  UtensilsCrossed,
  Wrench,
  Clock,
  QrCode,
  User,
} from "lucide-react";

export function ProductShowcases() {
  const showcases = [
    {
      id: "rooms",
      badge: "Rooms & Beds",
      title: "Interactive Bed Matrix & Resident Lifecycle",
      description:
        "Easily view and manage your hostel's complete building hierarchy. Assign students to vacant beds with gender-enforced rules, execute instant 1-click room swaps, and maintain an accurate live count of campus occupancy.",
      chips: [
        "Color-coded Vacant, Occupied & Reserved beds",
        "Male, Female & Co-ed wing separation",
        "1-click resident room reassignments",
        "Digital KYC identification storage",
      ],
      reverse: false,
      renderUi: () => (
        <div className="rounded-2xl bg-[#0c1018] p-5 sm:p-6 text-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-white">Block A — Floor 2 (North Wing)</span>
            </div>
            <span className="px-2.5 py-1 text-sm font-semibold rounded-md bg-emerald-500/10 text-emerald-400">
              94.2% Occupied
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#141a26] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400">Room 201</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-white flex items-center justify-between">
                  <span>Bed A</span>
                  <span className="text-[13px] text-slate-400">Liam Carter</span>
                </div>
                <div className="text-sm font-medium text-white flex items-center justify-between">
                  <span>Bed B</span>
                  <span className="text-[13px] text-slate-400">David Ross</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141a26] border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400">Room 202</span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-white flex items-center justify-between">
                  <span>Bed A</span>
                  <span className="text-[13px] text-slate-400">Alex Vance</span>
                </div>
                <div className="text-sm font-medium text-amber-400 flex items-center justify-between">
                  <span>Bed B</span>
                  <span className="text-[13px] font-semibold text-amber-300">Vacant Ready</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141a26] border border-white/[0.06] space-y-2 col-span-2 sm:col-span-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400">Room 203</span>
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-white flex items-center justify-between">
                  <span>Bed A</span>
                  <span className="text-[13px] text-slate-400">Marcus Wright</span>
                </div>
                <div className="text-sm font-medium text-blue-400 flex items-center justify-between">
                  <span>Bed B</span>
                  <span className="text-[13px] text-blue-300">Reserved (Oct 22)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-400" />
              24 Residents Checked In
            </span>
            <span className="font-semibold text-amber-400">1-Click Swap Active</span>
          </div>
        </div>
      ),
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
      reverse: true,
      renderUi: () => (
        <div className="rounded-2xl bg-[#0c1018] p-5 sm:p-6 text-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <Receipt className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-white">Student Ledger &amp; Collections</span>
            </div>
            <span className="px-2.5 py-1 text-sm font-semibold rounded-md bg-blue-500/10 text-blue-400">
              Audit Complete
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">INV-2026-081 • Room Rent (Oct)</div>
                <div className="text-[13px] text-slate-400">Liam Carter • Room 201-A</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">$450.00</div>
                <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-emerald-500/20 text-emerald-300">
                  PAID
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">INV-2026-082 • Room Rent (Oct)</div>
                <div className="text-[13px] text-slate-400">Sarah Jenkins • Room 104-B</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">$450.00</div>
                <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-amber-500/20 text-amber-300">
                  SLIP SUBMITTED
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">DEP-092 • Caution Security Deposit</div>
                <div className="text-[13px] text-slate-400">Escrow Held • Refundable at Checkout</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">$200.00</div>
                <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-blue-500/20 text-blue-300">
                  HELD IN ESCROW
                </span>
              </div>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-sm text-slate-400">
            <span>Total Month Collections: <strong className="text-white">$48,250</strong></span>
            <span className="text-emerald-400 font-semibold">98.2% Cleared</span>
          </div>
        </div>
      ),
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
      reverse: false,
      renderUi: () => (
        <div className="rounded-2xl bg-[#0c1018] p-5 sm:p-6 text-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-white">Gate &amp; Curfew Command Desk</span>
            </div>
            <span className="px-2.5 py-1 text-sm font-semibold rounded-md bg-emerald-500/10 text-emerald-400">
              Curfew Active (22:00)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-[#141a26] border border-white/[0.06]">
              <div className="text-[13px] text-slate-400 font-medium">Inside Campus</div>
              <div className="text-base font-bold text-emerald-400">1,388</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#141a26] border border-white/[0.06]">
              <div className="text-[13px] text-slate-400 font-medium">Authorized Out</div>
              <div className="text-base font-bold text-blue-400">22</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#141a26] border border-white/[0.06]">
              <div className="text-[13px] text-slate-400 font-medium">Overdue Curfew</div>
              <div className="text-base font-bold text-slate-300">0</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GP-9012 • Sarah Jenkins</div>
                  <div className="text-[13px] text-slate-400">Weekend Pass • Expected: 21:30</div>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-bold rounded bg-emerald-500/20 text-emerald-300">
                APPROVED
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GP-9015 • Alex Rivera</div>
                  <div className="text-[13px] text-slate-400">Emergency Exit • Accompanied</div>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-bold rounded bg-blue-500/20 text-blue-300">
                LOGGED OUT
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mess",
      badge: "Mess & Dining",
      title: "Weekly Meal Schedules & Waste Prevention",
      description:
        "Publish 7-day breakfast, lunch, and dinner menus in advance. Students submit meal opt-outs with 1 tap, reducing raw ingredient over-preparation and crediting student accounts automatically.",
      chips: [
        "7-day breakfast, lunch & dinner menus",
        "Advance meal opt-out logging",
        "Kitchen ingredient savings telemetry",
        "Automated resident meal rebates",
      ],
      reverse: true,
      renderUi: () => (
        <div className="rounded-2xl bg-[#0c1018] p-5 sm:p-6 text-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-white">Weekly Dining Schedule</span>
            </div>
            <span className="px-2.5 py-1 text-sm font-semibold rounded-md bg-amber-500/10 text-amber-400">
              Kitchen Sync On
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">Breakfast (07:30 – 09:30)</div>
                <div className="text-[13px] text-slate-400">Oats, Scrambled Eggs, Fresh Fruit</div>
              </div>
              <span className="text-sm font-semibold text-emerald-400">412 Attending</span>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">Lunch (12:30 – 14:30)</div>
                <div className="text-[13px] text-slate-400">Herb Grilled Chicken, Brown Rice &amp; Greens</div>
              </div>
              <span className="text-sm font-semibold text-emerald-400">398 Attending</span>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">Dinner (19:30 – 21:30)</div>
                <div className="text-[13px] text-slate-400">Vegetable Curry, Warm Flatbread, Salad</div>
              </div>
              <span className="text-sm font-semibold text-amber-400">26 Opted-Out</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-sm text-slate-400">
            <span>Kitchen Waste Prevention: <strong className="text-emerald-400">-18.4%</strong></span>
            <span className="text-amber-400 font-semibold">Auto Rebates Active</span>
          </div>
        </div>
      ),
    },
    {
      id: "maintenance",
      badge: "Facilities & Repairs",
      title: "Categorized Maintenance & Technician Dispatch",
      description:
        "Ensure resident comfort and facility safety with a clear, categorized ticket queue that routes repairs for plumbing, electrical, carpentry, and HVAC directly to campus technicians.",
      chips: [
        "Emergency, High, Medium & Low SLAs",
        "Direct technician task assignment",
        "Plumbing, electrical & HVAC categories",
        "Resident completion verification",
      ],
      reverse: false,
      renderUi: () => (
        <div className="rounded-2xl bg-[#0c1018] p-5 sm:p-6 text-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-white">Technician Dispatch Queue</span>
            </div>
            <span className="px-2.5 py-1 text-sm font-semibold rounded-md bg-emerald-500/10 text-emerald-400">
              Live SLA Clock
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>TKT-318 • Room 204</span>
                  <span className="px-1.5 py-0.5 text-xs font-bold rounded bg-red-500/20 text-red-300">
                    HIGH SLA
                  </span>
                </div>
                <div className="text-[13px] text-slate-400">Plumbing: Hot water valve leak</div>
              </div>
              <span className="text-sm font-semibold text-amber-400">Technician Dave</span>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>TKT-319 • Floor 3 Hallway</span>
                  <span className="px-1.5 py-0.5 text-xs font-bold rounded bg-amber-500/20 text-amber-300">
                    MEDIUM
                  </span>
                </div>
                <div className="text-[13px] text-slate-400">Electrical: Fluorescent fixture replace</div>
              </div>
              <span className="text-sm font-semibold text-emerald-400">Completed</span>
            </div>

            <div className="p-3 rounded-xl bg-[#141a26] border border-white/[0.06] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>TKT-320 • Room 102</span>
                  <span className="px-1.5 py-0.5 text-xs font-bold rounded bg-blue-500/20 text-blue-300">
                    LOW
                  </span>
                </div>
                <div className="text-[13px] text-slate-400">Carpentry: Desk drawer alignment</div>
              </div>
              <span className="text-sm font-semibold text-slate-400">Queued</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-sm text-slate-400">
            <span>Average Resolution Time: <strong className="text-white">2.4 hrs</strong></span>
            <span className="text-emerald-400 font-semibold">100% Verified by Residents</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="modules"
      aria-label="Core HMS Modules"
      className="py-20 md:py-28 bg-[#090b10] space-y-24 md:space-y-36"
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
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
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 bg-[#121622] px-3.5 py-2.5 rounded-xl animate-fade-up"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Module Mockup Preview Column (No broken images!) */}
            <div className="flex-1 w-full group animate-fade-up" data-ui="module-preview">
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e15] overflow-hidden hover:border-amber-400/30 transition-colors">
                {block.renderUi()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

