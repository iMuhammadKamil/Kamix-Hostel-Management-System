"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { HmsLogo } from "@/components/HmsLogo";
import { KeyRound, Mail, AlertCircle, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

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
              Enter your email and password to access your role dashboard.
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
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@hms.com"
                  defaultValue="admin@hms.com"
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
                  placeholder="••••••••"
                  defaultValue="admin123"
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
