import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Preahvihear} from 'next/font/google';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const preah = Preahvihear({
  subsets:["latin"],
  weight:["400"],
  style:["normal"],
})