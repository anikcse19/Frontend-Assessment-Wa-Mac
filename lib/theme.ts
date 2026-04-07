/**
 * Design System Tokens
 *
 * Centralized theme tokens that map to CSS custom properties.
 * Use these for type-safe access to design values.
 */

export const tokens = {
  color: {
    // Primary brand colors
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    primaryLight: "var(--color-primary-light)",

    // Dark mode colors
    dark: {
      bg: "var(--color-dark-bg)",
      surface: "var(--color-dark-surface)",
      surfaceElevated: "var(--color-dark-surface-elevated)",
      card: "var(--color-dark-card)",
      cardElevated: "var(--color-dark-card-elevated)",
      border: "var(--color-dark-border)",
      borderSubtle: "var(--color-dark-border-subtle)",
      text: {
        primary: "var(--color-dark-text-primary)",
        secondary: "var(--color-dark-text-secondary)",
        tertiary: "var(--color-dark-text-tertiary)",
        muted: "var(--color-dark-text-muted)",
      },
    },

    // Light mode colors
    light: {
      bg: "var(--color-light-bg)",
      surface: "var(--color-light-surface)",
      surfaceElevated: "var(--color-light-surface-elevated)",
      card: "var(--color-light-card)",
      border: "var(--color-light-border)",
      borderSubtle: "var(--color-light-border-subtle)",
      text: {
        primary: "var(--color-light-text-primary)",
        secondary: "var(--color-light-text-secondary)",
        tertiary: "var(--color-light-text-tertiary)",
        muted: "var(--color-light-text-muted)",
      },
    },

    // Semantic colors
    success: "var(--color-success)",
    error: "var(--color-error)",
    warning: "var(--color-warning)",

    // Neutral grays
    gray: {
      50: "var(--color-gray-50)",
      100: "var(--color-gray-100)",
      200: "var(--color-gray-200)",
      300: "var(--color-gray-300)",
      400: "var(--color-gray-400)",
      500: "var(--color-gray-500)",
      600: "var(--color-gray-600)",
      700: "var(--color-gray-700)",
      800: "var(--color-gray-800)",
      900: "var(--color-gray-900)",
    },
  },

  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
  },

  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
  },

  spacing: {
    1: "var(--spacing-1)",
    2: "var(--spacing-2)",
    3: "var(--spacing-3)",
    4: "var(--spacing-4)",
    5: "var(--spacing-5)",
    6: "var(--spacing-6)",
    8: "var(--spacing-8)",
    10: "var(--spacing-10)",
    12: "var(--spacing-12)",
    16: "var(--spacing-16)",
  },

  gradient: {
    primary: "var(--gradient-primary)",
    line: "var(--gradient-line)",
    lineVertical: "var(--gradient-line-vertical)",
  },
} as const;

export type Tokens = typeof tokens;

/**
 * Helper function to get CSS variable value
 * Useful for inline styles or dynamic values
 */
export function getToken(
  path: keyof Tokens | `${keyof Tokens}.${string}`
): string {
  // @ts-expect-error - dynamic access to nested tokens
  return path.split(".").reduce((obj, key) => obj?.[key], tokens) || "";
}
