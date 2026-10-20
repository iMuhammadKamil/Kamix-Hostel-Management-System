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
  const badgeDimensions = {
    sm: "w-8 h-8 p-1.5",
    md: "w-10 h-10 p-2",
    lg: "w-14 h-14 p-2.5",
    xl: "w-20 h-20 p-3",
  }[size];

  const titleSizes = {
    sm: "text-base",
    md: "text-lg",
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
      {/* Geometric Vector Emblem Badge */}
      <div
        className={`${badgeDimensions} shrink-0 rounded-xl bg-gradient-to-br from-[#1b1e24] via-[#0f1115] to-[#16181d] border border-white/[0.12] shadow-sm flex items-center justify-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 195 190"
          className="w-full h-full text-[#bcbebf] drop-shadow-xs"
          fill="none"
        >
          <g transform="translate(-165, -165)">
            {/* Main Logo Body */}
            <path
              d="M 170 170 L 170 350 L 235 350 L 235 305 L 285 350 L 335 350 L 335 315 L 285 270 L 335 225 L 335 170 L 285 170 L 235 215 L 235 170 Z M 170 170 L 185 185 L 170 200 Z"
              fill="#bcbebf"
              fillRule="evenodd"
            />
            {/* Trademark Symbol */}
            <circle
              cx="350"
              cy="178"
              r="6"
              stroke="#707376"
              strokeWidth="1.5"
              fill="none"
            />
            <text
              x="350"
              y="181"
              fontFamily="Arial, sans-serif"
              fontSize="7.5"
              fontWeight="bold"
              fill="#707376"
              textAnchor="middle"
            >
              R
            </text>
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
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
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
