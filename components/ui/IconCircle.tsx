"use client";

import { ReactNode } from "react";
import GradientBorder from "./GradientBorder";
import { cn } from "@/lib/utils";

interface IconCircleProps {
  icon: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  iconSize?: number;
  className?: string;
}

const iconSizeMap = {
  xs: 12,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
};

/**
 * IconCircle Component
 *
 * Renders an icon inside a circle with gradient border and shadow.
 * Commonly used for feature highlights and benefit cards.
 *
 * @example
 * <IconCircle icon={<SomeIcon />} size="md" />
 */
export const IconCircle = ({
  icon,
  size = "md",
  iconSize,
  className,
}: IconCircleProps) => {
  const finalIconSize = iconSize ?? iconSizeMap[size];

  return (
    <GradientBorder variant="circle" size={size} className={className}>
      <div className="text-[#2466F2] dark:text-white flex items-center justify-center" style={{ width: finalIconSize, height: finalIconSize }}>
        {icon}
      </div>
    </GradientBorder>
  );
};

export default IconCircle;
