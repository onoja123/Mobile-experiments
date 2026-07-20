import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const SCREEN_WIDTH = window.width;
export const SCREEN_HEIGHT = window.height;

export const SCREEN_H_PADDING = 20;
export const TAB_BAR_CLEARANCE = 110;
export const SEARCH_BAR_HEIGHT = 54;

export const DESTINATION_CARD_WIDTH = SCREEN_WIDTH - SCREEN_H_PADDING * 2;
export const DESTINATION_CARD_HEIGHT = DESTINATION_CARD_WIDTH * 1.02;
export const HERO_HEIGHT = Math.round(SCREEN_HEIGHT * 0.55);
export const REVIEW_CARD_WIDTH = SCREEN_WIDTH * 0.62;

export const SHEET_H_PADDING = 24;
export const CALENDAR_CELL_SIZE = Math.floor(
  (SCREEN_WIDTH - SHEET_H_PADDING * 2) / 7,
);

export const TAB_BAR_SLOT_SIZE = 48;
export const TAB_BAR_SLOT_GAP = 6;

export const avatarSizes = {
  header: 44,
  chatRow: 56,
  activeNow: 62,
  review: 34,
} as const;

export const presenceDotSizes = {
  chatRow: 14,
  activeNow: 16,
} as const;
