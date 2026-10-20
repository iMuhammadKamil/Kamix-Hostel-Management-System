import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  KeyRound,
  LogIn,
} from "lucide-react";

export function Footer() {
  const linkGroups = [
    {
      title: "Property & Beds",
      links: [
        { label: "Interactive Bed Matrix", href: "#rooms" },
        { label: "Wing Hierarchy", href: "#rooms" },
        { label: "Gender Separation Rules", href: "#features" },
        { label: "1-Click Room Swaps", href: "#features" },
      ],
    },
    {
      title: "Finance & Rent",
      links: [
        { label: "Monthly Rent Invoicing", href: "#billing" },
        { label: "Caution Deposit Ledger", href: "#billing" },
        { label: "Payment Verification", href: "#features" },
        { label: "Accountant Desk", href: "/login" },
      ],
    },
    {
      title: "Student Life",
      links: [
        { label: "7-Day Mess Menu", href: "#mess" },
        { label: "Meal Opt-Out System", href: "#mess" },
        { label: "Digital Gate Passes", href: "#gate" },
        { label: "Curfew & Rollcall Log", href: "#gate" },
      ],
    },
    {
      title: "Facilities",
      links: [
        { label: "Plumbing Repairs", href: "#maintenance" },
        { label: "Electrical Fixes", href: "#maintenance" },
        { label: "Emergency SLA Queue", href: "#maintenance" },
        { label: "Technician Dispatch", href: "/login" },
      ],
    },
    {
      title: "Portal Access",
      links: [
        { label: "Super Admin Portal", href: "/login" },
        { label: "Chief Warden Portal", href: "/login" },
        { label: "Accountant Portal", href: "/login" },
        { label: "Maintenance Portal", href: "/login" },
        { label: "Resident Student Portal", href: "/login" },
      ],
    },
  ];

  return (
    <footer
      aria-label="Footer"
      className="bg-[#050608] text-slate-400 pt-20 pb-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-white">
                {group.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
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

        {/* Real Security & Integrity Badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-sm font-medium text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Bcrypt Salted Credentials</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-sm font-medium text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Stateless Cryptographic Sessions</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-sm font-medium text-slate-300">
              <KeyRound className="w-4 h-4 text-blue-400" />
              <span>Server-Side RBAC Enforcement</span>
            </div>
          </div>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In to Your Account &rarr;</span>
          </Link>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} HMS — Hostel Management System. All rights reserved.</p>
          <p className="text-sm text-slate-400">Campus Residence Platform</p>
        </div>
      </div>
    </footer>
  );
}
