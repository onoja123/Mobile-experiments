import { Easing } from "react-native-reanimated";

export const CARD_ASPECT_RATIO = 1.586;
export const COLLAPSED_CARD_PEEK = 56;
export const COLLAPSED_GHOST_PEEK = 54;
export const EXPANDED_CARD_TOP_OFFSET = 76;
export const HEADER_TOP_GAP = 8;

export const CARD_OPEN_TIMING = {
  duration: 760,
  easing: Easing.bezier(0.33, 0, 0.1, 1),
};

export const CARD_CLOSE_TIMING = {
  duration: 640,
  easing: Easing.bezier(0.45, 0, 0.15, 1),
};
