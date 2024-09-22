import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { games } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPlayCount = (count: number): string => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  } else {
    return count.toString();
  }
};

export const getGame = (id: string) => {
  const game = games.find((g) => g.id === id);
  return game ? game : null;
};
