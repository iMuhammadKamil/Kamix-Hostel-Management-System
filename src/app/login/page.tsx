"use client";

import { useActionState, useState } from "react";
import { loginAction } from "@/app/actions/auth";
import { HmsLogo } from "@/components/HmsLogo";
import { KeyRound, Mail, AlertCircle, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showRoleHelper, setShowRoleHelper] = useState(false);

  const fillCredentials = (email: string, pass: string) => {
    setEmailInput(email);
    setPasswordInput(pass);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center mb-4">
          <HmsLogo size="xl" showText={false} />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
          HMS — Hostel Management System
        </h1>
        <p className="mt-1.5 text-xs text-slate-500 font-medium">
          Secure Residence, Bed Allocation &amp; Operational Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-8 shadow-md border border-slate-200/80 rounded-2xl space-y-6">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Sign in to your account</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter your email or username and password to access your role dashboard.
            </p>
          </div>

          <form action={formAction} className="space-y-4">
            {state?.error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                <span>{state.error}</span>
              </div>
            )}

            <div>
              <label className="block font-mono text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Email Address or Username
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="e.g. admin@hms.com or warden"
                  autoComplete="username"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 text-slate-900 bg-white placeholder:text-slate-400 hover:border-slate-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  name="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 text-slate-900 bg-white placeholder:text-slate-400 hover:border-slate-400 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-900 focus:outline-hidden focus:ring-4 focus:ring-slate-900/20 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
            >
              {isPending ? "Authenticating..." : "Sign In"}
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </form>

          {/* Quick Demo Credentials Panel */}
          <div className="border-t border-slate-100 pt-4">
            <button
              type="button"
              onClick={() => setShowRoleHelper(!showRoleHelper)}
              className="w-full flex items-center justify-between text-xs text-slate-500 hover:text-slate-800 font-medium py-1 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                Pre-configured Role Credentials
              </span>
              {showRoleHelper ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showRoleHelper && (
              <div className="mt-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1.5 text-xs">
                <p className="text-[10px] text-slate-500 font-mono mb-2">
                  Click any role to autofill or use your newly created staff credentials:
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => fillCredentials("admin@hms.com", "admin123")}
                    className="p-1.5 text-left rounded-lg bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-colors cursor-pointer"
                  >
                    <p className="font-bold text-[11px] text-slate-800">Super Admin</p>
                    <p className="text-[10px] text-slate-400 font-mono">admin@hms.com</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => fillCredentials("warden@hms.com", "warden123")}
                    className="p-1.5 text-left rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-colors cursor-pointer"
                  >
                    <p className="font-bold text-[11px] text-slate-800">Chief Warden</p>
                    <p className="text-[10px] text-slate-400 font-mono">warden@hms.com</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => fillCredentials("accountant@hms.com", "account123")}
                    className="p-1.5 text-left rounded-lg bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-colors cursor-pointer"
                  >
                    <p className="font-bold text-[11px] text-slate-800">Accountant</p>
                    <p className="text-[10px] text-slate-400 font-mono">accountant@hms.com</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => fillCredentials("maintenance@hms.com", "maint123")}
                    className="p-1.5 text-left rounded-lg bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-colors cursor-pointer"
                  >
                    <p className="font-bold text-[11px] text-slate-800">Maintenance</p>
                    <p className="text-[10px] text-slate-400 font-mono">maintenance@hms.com</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* System Architecture Note */}
        <div className="text-center mt-6 font-mono text-[10px] uppercase tracking-wider text-slate-400">
          <p>
            HMS &bull; Enterprise Hostel Management System
          </p>
        </div>
      </div>
    </div>
  );
}
