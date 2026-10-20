import React from "react";
import Image from "next/image";

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
  const imageSizes = {
    sm: { height: 32, width: 64, class: "h-8 w-auto" },
    md: { height: 40, width: 80, class: "h-10 w-auto" },
    lg: { height: 56, width: 112, class: "h-14 w-auto" },
    xl: { height: 80, width: 160, class: "h-20 w-auto max-w-[280px]" },
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
      {/* Uploaded Hostel Logo Badge */}
      <div className="shrink-0 overflow-hidden rounded-xl border border-amber-400/40 shadow-sm bg-amber-400/10 flex items-center justify-center p-0.5">
        <Image
          src="/logo.png"
          alt="HMS Hostel Logo"
          width={imageSizes.width * 2}
          height={imageSizes.height * 2}
          className={`${imageSizes.class} object-cover rounded-lg`}
          priority
        />
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
