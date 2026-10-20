"use client";

import { useState, useTransition } from "react";
import {
  createStaffAccountAction,
  toggleStaffStatusAction,
  resetStaffPasswordAction,
} from "@/app/actions/staff";
import { UserRoles } from "@/lib/constants";
import {
  UserCheck,
  UserPlus,
  Shield,
  KeyRound,
  Mail,
  Phone,
  Building,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
  Lock,
  PowerOff,
  Power,
  RotateCcw,
} from "lucide-react";

interface StaffUser {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string | null;
  role: string;
  isActive: boolean;
  createdAt: Date | string;
  staffProfile: {
    department: string;
  } | null;
}

interface StaffManagerViewProps {
  staffList: StaffUser[];
  currentUserId: string;
}

export function StaffManagerView({ staffList, currentUserId }: StaffManagerViewProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [passwordResetTarget, setPasswordResetTarget] = useState<StaffUser | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [actionFeedback, setActionFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [isPending, startTransition] = useTransition();

  // Add staff form state
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const totalStaff = staffList.length;
  const activeStaff = staffList.filter((s) => s.isActive).length;
  const inactiveStaff = totalStaff - activeStaff;

  const handleToggleStatus = (target: StaffUser) => {
    if (target.id === currentUserId) return;
    if (
      !confirm(
        `Are you sure you want to ${target.isActive ? "deactivate" : "activate"} ${target.fullName}'s account?`
      )
    ) {
      return;
    }

    startTransition(async () => {
      setActionFeedback(null);
      const res = await toggleStaffStatusAction(target.id);
      if (res.success) {
        setActionFeedback({ type: "success", text: res.message || "Status updated." });
      } else {
        setActionFeedback({ type: "error", text: res.error || "Action failed." });
      }
    });
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordResetTarget || newPassword.length < 6) return;

    startTransition(async () => {
      const res = await resetStaffPasswordAction(passwordResetTarget.id, newPassword);
      if (res.success) {
        setActionFeedback({ type: "success", text: `Password reset for ${passwordResetTarget.fullName}.` });
        setPasswordResetTarget(null);
        setNewPassword("");
      } else {
        setActionFeedback({ type: "error", text: res.error || "Password reset failed." });
      }
    });
  };

  const handleAddSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await createStaffAccountAction(null, formData);
      if (res?.error) {
        setFormError(res.error);
      } else if (res?.success) {
        setFormSuccess(res.message || "Staff member created successfully!");
        setTimeout(() => {
          setIsAddModalOpen(false);
          setFormSuccess(null);
        }, 1200);
      }
    });
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case UserRoles.SUPER_ADMIN:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-900 text-amber-300 border border-slate-700">
            <Shield className="w-3 h-3 text-amber-400" />
            Super Admin
          </span>
        );
      case UserRoles.WARDEN:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <UserCheck className="w-3 h-3 text-blue-600" />
            Chief Warden
          </span>
        );
      case UserRoles.ACCOUNTANT:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Accountant
          </span>
        );
      case UserRoles.MAINTENANCE_STAFF:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            Maintenance
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            {role}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Staff &amp; Account Management</h1>
          <p className="text-xs text-slate-500 mt-1">
            Provision, manage, and monitor authorized campus staff credentials and role permissions.
          </p>
        </div>

        <button
          onClick={() => {
            setFormError(null);
            setFormSuccess(null);
            setIsAddModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
        >
          <UserPlus className="w-4 h-4 text-amber-400" />
          <span>Add Staff Member</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Total Staff</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{totalStaff}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
            <UserCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Active Accounts</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{activeStaff}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Deactivated</p>
            <p className="text-2xl font-bold text-slate-500 mt-1">{inactiveStaff}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
            <PowerOff className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Feedback Alert */}
      {actionFeedback && (
        <div
          className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-3 ${
            actionFeedback.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}
        >
          <div className="flex items-center gap-2">
            {actionFeedback.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{actionFeedback.text}</span>
          </div>
          <button
            onClick={() => setActionFeedback(null)}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Staff Accounts Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Registered Staff Accounts</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Each staff member must maintain individual credentials for audit trail and compliance.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-5 py-3.5">Staff Member</th>
                <th className="px-5 py-3.5">Role</th>
                <th className="px-5 py-3.5">Department</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Contact</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {staffList.map((staff) => {
                const isSelf = staff.id === currentUserId;
                const isSuperAdmin = staff.role === UserRoles.SUPER_ADMIN;
                const initials = staff.fullName
                  ? staff.fullName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
                  : "U";

                return (
                  <tr key={staff.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          {initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{staff.fullName}</span>
                            {isSelf && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold">
                                You
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3 text-slate-400" />
                            {staff.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3.5">{getRoleBadge(staff.role)}</td>

                    <td className="px-5 py-3.5">
                      <span className="text-slate-600 font-medium">
                        {staff.staffProfile?.department || "MANAGEMENT"}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      {staff.isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          Deactivated
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="text-slate-500 font-mono text-[11px] flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-400" />
                        {staff.phoneNumber || "None"}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {!isSuperAdmin && !isSelf && (
                          <>
                            {/* Toggle Active / Deactivate */}
                            <button
                              onClick={() => handleToggleStatus(staff)}
                              disabled={isPending}
                              title={staff.isActive ? "Deactivate Account" : "Activate Account"}
                              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                staff.isActive
                                  ? "text-slate-500 hover:text-rose-600 hover:bg-rose-50 border-slate-200"
                                  : "text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 border-slate-200"
                              }`}
                            >
                              {staff.isActive ? (
                                <PowerOff className="w-3.5 h-3.5" />
                              ) : (
                                <Power className="w-3.5 h-3.5 text-emerald-600" />
                              )}
                            </button>

                            {/* Reset Password */}
                            <button
                              onClick={() => {
                                setPasswordResetTarget(staff);
                                setNewPassword("");
                              }}
                              title="Reset Password"
                              className="p-1.5 rounded-lg text-slate-500 hover:text-amber-600 hover:bg-amber-50 border border-slate-200 transition-colors cursor-pointer"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}
                        {isSuperAdmin && (
                          <span className="text-[11px] font-mono text-slate-400 italic">Protected</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Add Staff Member */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-6 py-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <UserPlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">Add New Staff Member</h3>
                  <p className="text-[11px] text-slate-400">Creates an isolated credential account</p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              {formSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{formSuccess}</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Marcus Wright"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="marcus@hms.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Initial Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    minLength={6}
                    placeholder="Min 6 characters"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Assigned Role *
                  </label>
                  <select
                    name="role"
                    required
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden bg-white"
                  >
                    <option value={UserRoles.WARDEN}>Chief Warden</option>
                    <option value={UserRoles.ACCOUNTANT}>Accountant</option>
                    <option value={UserRoles.MAINTENANCE_STAFF}>Maintenance Technician</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Department
                  </label>
                  <select
                    name="department"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden bg-white"
                  >
                    <option value="MANAGEMENT">Hostel Management</option>
                    <option value="ACCOUNTS">Finance &amp; Accounts</option>
                    <option value="MAINTENANCE">Maintenance &amp; Repairs</option>
                    <option value="SECURITY">Campus Security</option>
                    <option value="ELECTRICAL">Electrical Services</option>
                    <option value="PLUMBING">Plumbing &amp; Water</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  {isPending && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Create Account</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Password Reset */}
      {passwordResetTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-5 py-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-bold">Reset Password</h3>
              </div>
              <button
                onClick={() => setPasswordResetTarget(null)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handlePasswordReset} className="p-5 space-y-4">
              <p className="text-xs text-slate-600">
                Set a new password for <span className="font-bold text-slate-900">{passwordResetTarget.fullName}</span>:
              </p>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  New Password (min 6 characters)
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:border-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPasswordResetTarget(null)}
                  className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending || newPassword.length < 6}
                  className="px-4 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isPending && <Loader2 className="w-3 h-3 animate-spin" />}
                  <span>Save Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

