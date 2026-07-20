export const CHROME_DIM_AMOUNT = 0.78;
export const DIMMED_NOTE_OPACITY = 0.25;

export const DURATIONS = {
  dim: 220,
  lift: 180,
  settle: 200,
  removalTravel: 170,
  removalShrink: 280,
  noteShimmer: 640,
  dockHover: 180,
  dockRecede: 180,
  dockShimmer: 520,
  dockEnter: 260,
  dockExit: 140,
} as const;

export const REMOVAL_SHRINK_DELAY = 80;
export const DOCK_ENTER_STAGGER = 50;

export const SPRINGS = {
  snapBack: { damping: 22, stiffness: 260, overshootClamping: true },
  dockButtonScale: { damping: 20, stiffness: 260, overshootClamping: true },
  noteListLayout: { damping: 30, stiffness: 200 },
} as const;

export const NOTE_LIFT = {
  scaleDelta: 0.02,
  shrink: 0.9,
  shadowOpacity: 0.35,
} as const;

export const NOTE_SHIMMER = { height: 300, band: 96, opacity: 0.28, skew: 14 } as const;
export const DOCK_BUTTON_SHIMMER = { band: 30, opacity: 0.55, skew: 16 } as const;
