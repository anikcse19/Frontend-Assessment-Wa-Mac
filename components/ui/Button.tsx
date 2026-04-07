"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary:
    "bg-[#2466F2] hover:bg-[#3B82F6] text-white font-semibold rounded-lg transition-all duration-200",
  secondary:
    "bg-gray-200 dark:bg-[#171B21] hover:bg-gray-300 dark:hover:bg-[#334155] text-gray-900 dark:text-white font-normal rounded-lg transition-all duration-200 hover:scale-105 active:scale-95",
  ghost:
    "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-normal rounded-lg transition-all duration-200",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-6 py-4 text-base",
};

/**
 * Button Component
 *
 * Reusable button component with consistent styling.
 * Supports primary, secondary, and ghost variants.
 *
 * @example
 * <Button variant="primary" size="md">Enroll now</Button>
 * <Button variant="secondary" size="sm">Curriculum</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        className={cn(
          "cursor-pointer inline-flex items-center justify-center",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
