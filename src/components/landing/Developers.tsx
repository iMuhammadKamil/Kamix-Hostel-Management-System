import Link from "next/link";
import {
  ShieldAlert,
  KeyRound,
  UserCheck,
  Lock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function Developers() {
  const points = [
    {
      title: "Individual Staff Account Isolation",
      desc: "Super Admins provision separate credentials for Chief Wardens, Lead Accountants, and Technicians with strict department scopes. No shared or generic passwords exist.",
      badge: "Account Isolation",
    },
    {
      title: "Bcrypt Salted Cryptographic Hashing",
      desc: "Passwords undergo one-way salted hashing before being written to persistent storage. Plain-text credentials never touch disk logs or API payloads.",
      badge: "Zero-Knowledge Storage",
    },
    {
      title: "Stateless Cryptographic RBAC Sessions",
      desc: "Authentication tokens carry cryptographically signed HMAC signatures validated on every request, blocking unauthorized route tampering.",
      badge: "Server Verification",
    },
  ];

  return (
    <section
      id="governance"
      aria-label="Security and Account Governance"
      className="py-24 md:py-32 bg-[#090b10] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Headline */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Security &amp; role governance
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Every user belongs to an explicitly assigned role with strict server-side permissions. Students cannot access staff controls, and staff credentials are isolated and audited.
            </p>
          </div>

          {/* Right Column: Editorial List in Large Type */}
          <div className="lg:col-span-7 space-y-6">
            {points.map((pt) => (
              <div key={pt.title} className="bg-[#101420] p-8 rounded-2xl space-y-3 animate-fade-up">
                <span className="text-sm font-semibold text-amber-300 px-3 py-1 rounded-full bg-amber-400/10 inline-block">
                  {pt.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
