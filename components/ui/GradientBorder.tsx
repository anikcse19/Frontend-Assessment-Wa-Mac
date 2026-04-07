"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientBorderProps {
  children: ReactNode;
  variant?: "circle" | "rounded" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "custom";
  className?: string;
  style?: React.CSSProperties;
}

const sizeClasses = {
  xs: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8",
  sm: "w-10 h-10 md:w-12 md:h-12",
  md: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
  lg: "w-14 h-14 md:w-16 md:h-16",
  xl: "w-16 h-16 md:w-20 md:h-20",
  custom: "",
};

const radiusMap = {
  circle: "rounded-full",
  rounded: "rounded-xl",
  none: "",
};

/**
 * GradientBorder Component
 *
 * Reusable wrapper with radial gradient border effect.
 * Used throughout the app for icon circles, cards, and buttons.
 *
 * @example
 * <GradientBorder variant="circle" size="md">
 *   <SomeIcon />
 * </GradientBorder>
 */
export const GradientBorder = ({
  children,
  variant = "circle",
  size = "md",
  className,
  style,
}: GradientBorderProps) => {
  const sizeClass = sizeClasses[size] || sizeClasses.custom;
  const radiusClass = radiusMap[variant];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0",
        "bg-white dark:bg-[#171B21]",
        sizeClass,
        radiusClass,
        className
      )}
      style={{
        boxShadow: "0px 8px 40px 0px #2466F226",
        ...style,
      }}
    >
      {/* Gradient border overlay */}
      <div
        className={cn("absolute inset-0 pointer-events-none", radiusClass)}
        style={{
          padding: "1px",
          background:
            "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </div>
  );
};

export default GradientBorder;
