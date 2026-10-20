import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { Intro } from "@/components/landing/Intro";
import { ValueProps } from "@/components/landing/ValueProps";
import { StatsSection } from "@/components/landing/StatsSection";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { ProductShowcases } from "@/components/landing/ProductShowcases";
import { Integrations } from "@/components/landing/Integrations";
import { Developers } from "@/components/landing/Developers";
import { Enterprise } from "@/components/landing/Enterprise";
import { ExploreMore } from "@/components/landing/ExploreMore";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "HMS — Hostel Management System | Open Core Campus Residence OS",
  description:
    "Allocate rooms faster, automate campus billing submeters, and keep students safe with the modern open-core operating system for university hostels.",
  openGraph: {
    title: "HMS — Hostel Management System",
    description:
      "The modern, open-core operating system built for university residence halls, housing directors, and campus life teams.",
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
    <div className="min-h-screen bg-[#07080a] text-slate-100 font-sans selection:bg-amber-400/20 selection:text-amber-300 antialiased overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Logo Strip */}
        <LogoStrip />

        {/* 4. Intro */}
        <Intro />

        {/* 5. Value Props */}
        <ValueProps />

        {/* 6. Stats Section */}
        <StatsSection />

        {/* 7. Feature Grid */}
        <FeatureGrid />

        {/* 8. Product Showcases */}
        <ProductShowcases />

        {/* 9. Integrations */}
        <Integrations />

        {/* 10. Open Source / Developers */}
        <Developers />

        {/* 11. Enterprise */}
        <Enterprise />

        {/* 12. Explore More */}
        <ExploreMore />

        {/* 13. Final CTA */}
        <FinalCta />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
