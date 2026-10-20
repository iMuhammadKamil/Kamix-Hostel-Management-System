"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HmsLogo } from "@/components/HmsLogo";
import { Menu, X, ArrowRight, Building2, LogIn } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Rooms & Beds", href: "#rooms" },
    { label: "Billing & Rent", href: "#billing" },
    { label: "Mess & Dining", href: "#mess" },
    { label: "Gate & Curfew", href: "#gate" },
    { label: "Maintenance", href: "#maintenance" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080a]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg">
          <HmsLogo size="sm" theme="dark" />
        </Link>

        {/* Center: Real Module Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 py-0.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Portal Login Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 px-4 py-2 rounded-xl shadow-xs transition-all hover:shadow-amber-400/20 hover:shadow-lg inline-flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In to Portal</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-[#07080a]/95 backdrop-blur-xl z-40 md:hidden flex flex-col px-6 py-8 border-t border-white/[0.08] animate-in fade-in duration-200">
          <nav className="flex flex-col gap-5 text-lg font-semibold" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-amber-400 py-1 transition-colors flex items-center justify-between border-b border-white/[0.05]"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In to Portal</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
