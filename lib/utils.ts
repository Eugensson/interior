import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createAvatarFallback = (value: string) => {
  if (!value) return "";

  return value
    .trim()
    .split(" ")
    .filter((name) => name)
    .map((name) => name[0].toUpperCase())
    .join("");
};

export const formatNumber = (value: number) => {
  return String(value).padStart(2, "0");
};
