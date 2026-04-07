/**
 * Utility function to merge Tailwind CSS classes
 * Simple implementation without external dependencies
 *
 * @example
 * cn("px-4", active && "bg-blue-500", "px-4") // => "px-4 bg-blue-500"
 */
export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs
    .filter(Boolean)
    .join(" ")
    .trim()
    .replace(/\s+/g, " ");
}
