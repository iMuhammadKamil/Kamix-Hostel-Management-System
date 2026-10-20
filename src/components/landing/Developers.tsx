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
  const cards = [
    {
      icon: UserCheck,
      title: "Individual Staff Account Provisioning",
      desc: "Super Admins create separate accounts for Chief Wardens, Lead Accountants, and Technicians with designated department tags.",
      badge: "Account Isolation",
    },
    {
      icon: KeyRound,
      title: "Bcrypt Salted Password Hashing",
      desc: "Passwords are securely hashed using bcrypt with salt rounds. Plain-text credentials are never stored or logged.",
      badge: "Cryptographic Security",
    },
    {
      icon: Lock,
      title: "Stateless HMAC-Signed Sessions",
      desc: "Sessions rely on cryptographically signed tokens verified on every server request, preventing unauthorized role escalation.",
      badge: "Server-Side RBAC",
    },
  ];

  return (
    <section
      id="governance"
      aria-label="Security and Account Governance"
      className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
            Governance &amp; Security
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Strict role-based access control protecting student &amp; campus data
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Every user belongs to an explicitly assigned role with strict server-side permissions. Students cannot view staff controls, and staff cannot access unauthorized administrative actions.
          </p>
        </div>

        {/* 3 Governance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-7 rounded-2xl bg-[#0e1118] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.05] text-amber-400 font-bold border border-white/[0.08]">
                    {card.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {card.desc}
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
