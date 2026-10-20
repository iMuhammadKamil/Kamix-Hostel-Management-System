import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { Intro } from "@/components/landing/Intro";
import { ProductShowcases } from "@/components/landing/ProductShowcases";
import { Developers } from "@/components/landing/Developers";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "HMS — Hostel Management System | Open Core Campus Residence OS",
  description:
    "Allocate rooms faster, automate campus billing submeters, and keep students safe with the modern operating system for university hostels.",
  openGraph: {
    title: "HMS — Hostel Management System",
    description:
      "The modern operating system built for university residence halls, housing directors, and campus life teams.",
    url: "https://campus-hms.internal",
    siteName: "HMS",
    images: [
      {
        url: "/placeholder/hero-dashboard.svg",
        width: 1200,
        height: 675,
        alt: "HMS Enterprise Operations Console Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HMS — Hostel Management System",
    description:
      "Allocate rooms faster, automate campus billing submeters, and keep students safe.",
    images: ["/placeholder/hero-dashboard.svg"],
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] bg-[#07080a] text-slate-100 font-sans selection:bg-amber-400/20 selection:text-amber-300 antialiased overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Logo Strip — 5 Campus Roles */}
        <LogoStrip />

        {/* 4. Intro — Platform Mission */}
        <Intro />

        {/* 5. Product Showcases — 5 Core Working Modules */}
        <ProductShowcases />

        {/* 6. Security & Account Governance */}
        <Developers />

        {/* 7. Final Call to Action */}
        <FinalCta />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
