export const CARD_SPRING = { damping: 18, stiffness: 130, mass: 1 } as const;
export const CARD_STAGGER_MS = 55;
export const CARD_FADE_MS = 260;

export const HEADER_FADE_MS = 200;
export const HEADER_HIDE_TRANSLATE_Y = -16;

export const FAB_FADE_MS = 180;

export const TRANSACTION_LIST_ENTER = { delayMs: 80, durationMs: 250 } as const;
export const TRANSACTION_ROW_ENTER = {
  baseDelayMs: 140,
  staggerMs: 65,
  damping: 16,
  stiffness: 160,
} as const;
export const TRANSACTION_ROW_EXIT = { staggerMs: 20, durationMs: 160 } as const;
