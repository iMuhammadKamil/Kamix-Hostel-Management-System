# HMS Marketing Landing Page Guide

This responsive marketing landing page for **HMS — Hostel Management System** is built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, referencing the modern dark-theme architecture of [learnhouse.app](https://www.learnhouse.app/).

---

## 📁 Section Components Directory

All 14 landing page sections are isolated into their own dedicated components in `src/components/landing/` (also mirrored at `components/landing/`):

| Section | Component | Description |
|---|---|---|
| **1. Navbar** | `Navbar.tsx` | Sticky navbar with blur-on-scroll, logo, links, auth buttons & mobile drawer |
| **2. Hero** | `Hero.tsx` | Pill announcement badge, 3-phrase headline, dual CTAs, feature chips, screenshot frame |
| **3. Logo Strip** | `LogoStrip.tsx` | Grayscale placeholder university & residence logos |
| **4. Intro** | `Intro.tsx` | Concise 2-line problem/solution statement with inline links |
| **5. Value Props** | `ValueProps.tsx` | 4-block grid highlighting allocations, ledger, security & dining AI |
| **6. Stats Section** | `StatsSection.tsx` | 6 benchmark cards with "Powered by" tags and source disclaimers |
| **7. Feature Grid** | `FeatureGrid.tsx` | 16 compact cards across 4 columns (desktop), 2 cols (tablet), 1 col (mobile) |
| **8. Product Showcases** | `ProductShowcases.tsx` | 3 alternating 2-column feature showcases with screenshots & chips |
| **9. Integrations** | `Integrations.tsx` | 16 integration partner tiles with category labels and API link |
| **10. Open Source / Developers** | `Developers.tsx` | Terminal CLI, REST API, and Docker cards with decorative pattern |
| **11. Enterprise** | `Enterprise.tsx` | 2×4 grid of institutional features (SLA, VPC, SSO, FERPA) and contact CTA |
| **12. Explore More** | `ExploreMore.tsx` | 8 documentation, guide, and whitepaper cards |
| **13. Final CTA** | `FinalCta.tsx` | Centered conversion headline, subtext, primary button, and free-tier note |
| **14. Footer** | `Footer.tsx` | 5 link groups, compliance trust badges, social links, and language selector |

---

## 🎨 How to Customize Colors & Design Tokens

Design tokens are defined as CSS variables in `src/app/globals.css`:

```css
:root {
  /* Dark background matching learnhouse.app */
  --landing-bg: #07080a;
  --landing-surface: #0e1118;
  --landing-surface-elevated: #141824;
  --landing-surface-card: #10131d;

  /* Borders */
  --landing-border: rgba(255, 255, 255, 0.08);
  --landing-border-bright: rgba(255, 255, 255, 0.18);
  --landing-border-hover: rgba(245, 158, 11, 0.35);

  /* Typography */
  --landing-text-primary: #f8fafc;
  --landing-text-muted: #94a3b8;
  --landing-text-subtle: #64748b;

  /* Primary Accent Color (Amber Gold) */
  --landing-accent: #f59e0b;
  --landing-accent-hover: #d97706;
  --landing-accent-glow: rgba(245, 158, 11, 0.22);
}
```

To change the primary accent from Amber/Gold to another color (e.g. Electric Blue or Emerald Green), change `--landing-accent` and replace the Tailwind `amber-400` / `amber-500` utility classes across the landing components.

---

## ✏️ How to Edit Marketing Copy

Each section's copy is plain TypeScript/JSX located inside its respective file:
- **Hero headline & subheadline**: Edit `src/components/landing/Hero.tsx` lines 38–54.
- **Value propositions**: Edit the `props` array in `src/components/landing/ValueProps.tsx`.
- **Feature cards**: Edit the `features` array in `src/components/landing/FeatureGrid.tsx`.
- **Product deep-dives**: Edit the `showcases` array in `src/components/landing/ProductShowcases.tsx`.
- **Footer links & trust badges**: Edit `src/components/landing/Footer.tsx`.

---

## 🖼️ How to Replace Placeholder Images & Logos

All graphics and screenshots reside in `public/` and `public/placeholder/`:

- **Main Brand Logo**: Replace `public/logo.png` with your company logo.
- **Hero Screenshot**: Replace `public/placeholder/hero-dashboard.svg` with a real PNG/WebP screenshot (1200×675 aspect ratio recommended).
- **Showcase Mockups**:
  - `public/placeholder/showcase-bed-matrix.svg`
  - `public/placeholder/showcase-billing.svg`
  - `public/placeholder/showcase-curfew.svg`
- **Partner & Campus Logos**: Replace `public/placeholder/logos/campus-1.svg` through `campus-6.svg`.

---

## 🚀 Running the Project

1. Run development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Build for production:
   ```bash
   npm run build
   ```

