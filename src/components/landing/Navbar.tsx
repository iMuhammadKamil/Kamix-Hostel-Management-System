"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

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
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
    {
      label: "GitHub",
      href: "https://github.com",
      isExternal: true,
      icon: GithubIcon,
    },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080a]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg">
          <div className="relative overflow-hidden rounded-xl border border-amber-400/30 p-0.5 bg-amber-400/10 shadow-xs">
            <Image
              src="/logo.png"
              alt="HMS Logo"
              width={40}
              height={40}
              className="h-8 w-auto object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base md:text-lg text-white tracking-tight">
              HMS
            </span>
            <span className="hidden sm:inline-flex text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Hostel OS
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 py-0.5"
            >
              {link.icon && <link.icon className="w-3.5 h-3.5 text-slate-400" />}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Auth & Primary Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 px-4 py-2 rounded-xl shadow-xs transition-all hover:shadow-amber-400/20 hover:shadow-lg inline-flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
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
                <span className="flex items-center gap-2">
                  {link.icon && <link.icon className="w-5 h-5 text-slate-400" />}
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl border border-white/[0.12] text-sm font-semibold text-white hover:bg-white/[0.05] transition-colors"
            >
              Log in to Portal
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
