export const GRAB_SPRING = {
  damping: 26,
  stiffness: 220,
  overshootClamping: true,
} as const;

export const GRID_REFLOW_SPRING = { damping: 18, stiffness: 170 } as const;
export const ZONE_REVEAL_SPRING = { damping: 26, stiffness: 110, mass: 1 } as const;
export const TOAST_ENTER_SPRING = { damping: 22, stiffness: 160 } as const;

export const DRAG_ACTIVATION_DELAY_MS = 220;
export const VANISH_DURATION_MS = 230;
export const REMOVAL_DELAY_MS = 240;
export const HOVER_FEEDBACK_DURATION_MS = 160;
export const HOVER_SHRINK_DURATION_MS = 200;
export const ZONE_DISMISS_DURATION_MS = 280;
export const ZONE_PROXIMITY_RESET_MS = 180;

export const TOAST_EXIT_DURATION_MS = 240;
export const TOAST_AUTO_DISMISS_MS = 3800;
export const SHIMMER_DELAY_MS = 450;
export const SHIMMER_DURATION_MS = 1000;
export const SHIMMER_REPEATS = 2;

export const LIFT_SCALE_BOOST = 0.12;
export const PROXIMITY_SHRINK_FACTOR = 0.35;
export const HOVER_SHRINK_FACTOR = 0.3;
export const VANISH_SHRINK_FACTOR = 0.85;
