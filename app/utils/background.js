import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) { // ✅ Ensure this function is exported
  return twMerge(clsx(inputs));
}

export default cn; // ✅ Add a default export
