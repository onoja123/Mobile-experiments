import { CardVariant } from "@/enums";

import { colors } from "./colors";

export const cardGradient: readonly [string, string] = ["#4C33E4", "#9A3FE6"];

export const cardSurface: Record<CardVariant, string> = {
  [CardVariant.Purple]: "transparent",
  [CardVariant.White]: colors.white,
  [CardVariant.Black]: colors.ink,
};

export const cardBrandCircles: Record<
  CardVariant,
  { front: string; back: string | null }
> = {
  [CardVariant.Purple]: { front: colors.white, back: "#2D1B69" },
  [CardVariant.White]: { front: colors.ink, back: null },
  [CardVariant.Black]: { front: colors.white, back: "#F0284A" },
};

export const cardPatternStrokes: Record<CardVariant, readonly string[]> = {
  [CardVariant.Purple]: [
    "rgba(255,255,255,0.16)",
    "rgba(255,255,255,0.12)",
    "rgba(255,255,255,0.1)",
  ],
  [CardVariant.White]: ["rgba(0,0,0,0.06)", "rgba(0,0,0,0.05)"],
  [CardVariant.Black]: [
    "rgba(255,255,255,0.09)",
    "rgba(255,255,255,0.08)",
    "rgba(255,255,255,0.07)",
  ],
};

export const cardPatternDot = "rgba(255,255,255,0.2)";
