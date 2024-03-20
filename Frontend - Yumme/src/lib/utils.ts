import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * In this file we define some utility functions that we can use in our components.
 * These functions are not specific to any component and can be used anywhere in the app.
 */

/**
 * This function is a wrapper around clsx that merges the classes with tailwind classes.
 * @see https://www.npmjs.com/package/clsx
 * @see https://www.npmjs.com/package/tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
