import React from "react";

interface HmsLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  theme?: "light" | "dark";
}

export function HmsLogo({
  className = "",
  size = "md",
  showText = true,
  theme = "light",
}: HmsLogoProps) {
  const iconDimensions = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }[size];

  const titleSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
    xl: "text-2xl",
  }[size];

  const subtitleSizes = {
    sm: "text-[10px]",
    md: "text-[11px]",
    lg: "text-xs",
    xl: "text-sm",
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Navy & Gold Building-and-Key Emblem */}
      <div
        className={`${iconDimensions} shrink-0 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/40 p-1.5 shadow-md flex items-center justify-center relative overflow-hidden`}
      >
        {/* Subtle gold ambient glow */}
        <div className="absolute inset-0 bg-radial from-amber-400/10 via-transparent to-transparent pointer-events-none" />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-amber-400"
        >
          {/* Hostel Building Architecture */}
          <path
            d="M6 42V15L24 6L42 15V42H6Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="text-amber-400"
          />
          {/* Building Pediment / Roofline Accent */}
          <path
            d="M10 16.5L24 9.5L38 16.5"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Upper Windows */}
          <rect x="12" y="19" width="5" height="5" rx="0.8" fill="#fef3c7" fillOpacity="0.85" />
          <rect x="21.5" y="19" width="5" height="5" rx="0.8" fill="#fef3c7" fillOpacity="0.85" />
          <rect x="31" y="19" width="5" height="5" rx="0.8" fill="#fef3c7" fillOpacity="0.85" />

          {/* Lower Windows */}
          <rect x="12" y="27" width="5" height="5" rx="0.8" fill="#fef3c7" fillOpacity="0.85" />
          <rect x="31" y="27" width="5" height="5" rx="0.8" fill="#fef3c7" fillOpacity="0.85" />

          {/* Arched Main Portal */}
          <path
            d="M20 42V34C20 31.7909 21.7909 30 24 30C26.2091 30 28 31.7909 28 34V42H20Z"
            fill="#0f172a"
            stroke="#d97706"
            strokeWidth="1.5"
          />

          {/* Golden Key overlaid across foreground */}
          <g filter="drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.6))">
            {/* Key Bow (Ring) */}
            <circle
              cx="35"
              cy="33"
              r="5"
              stroke="#fbbf24"
              strokeWidth="2.2"
              fill="#1e293b"
            />
            <circle cx="35" cy="33" r="2" fill="#fbbf24" />
            {/* Key Shaft */}
            <path
              d="M31.5 35L17.5 44"
              stroke="#fbbf24"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Key Bits */}
            <path
              d="M20 42.5L22.5 44.5"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M23 40.5L25 42"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={`font-black tracking-tight leading-none font-sans ${titleSizes} ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              HMS
            </span>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">
              Hostel System
            </span>
          </div>
          <span
            className={`font-medium tracking-tight mt-1 leading-none ${subtitleSizes} ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Hostel Management System
          </span>
        </div>
      )}
    </div>
  );
}

