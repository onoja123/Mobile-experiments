export const MARQUEE_ITEM_HEIGHT = 124;
export const MARQUEE_LOOP_COPIES = 5;
export const MARQUEE_INITIAL_COPY = 2;
export const ARC_RADIUS = 520;
export const MAX_TILT_DEG = 14;
export const MAX_SCALE_SHRINK = 0.12;
export const ITEM_TILT_INFLUENCE = 0.2;
export const CENTER_DISTANCE_CLAMP = 1.2;

export const TOP_FADE_COLORS = ["#FFFFFF", "rgba(255,255,255,0)"] as const;

export const BOTTOM_FADE_COLORS = [
  "rgba(255,255,255,0)",
  "rgba(255,255,255,0.85)",
] as const;

export const BOTTOM_BLUR_LAYERS = [
  { height: 160, intensity: 5 },
  { height: 130, intensity: 8 },
  { height: 104, intensity: 12 },
  { height: 80, intensity: 17 },
  { height: 56, intensity: 24 },
  { height: 32, intensity: 32 },
];
