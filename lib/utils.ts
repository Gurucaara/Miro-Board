import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Camera } from "@/types/canvas";

const COLORS = [
  "#DC2626",
  "#649E7D",
  "#FFD166",
  "#06D6A0",
  "#118AB2",
  "#073B4C",
  "#E63946",
  "#1D3557",
  "#DC2626",
  "#D97706",
  "#059669",
  "#7C3AED",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
};

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera,
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
};