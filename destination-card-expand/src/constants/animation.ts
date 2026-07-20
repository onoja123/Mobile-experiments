import { Easing } from 'react-native-reanimated';

export const springs = {
  cardExpand: { damping: 24, stiffness: 200, mass: 1, overshootClamping: true },
  tabIndicator: { damping: 18, stiffness: 240 },
} as const;

export const easings = {
  cardCollapse: Easing.bezier(0.3, 0.6, 0.3, 1),
  sheetSlide: Easing.bezier(0.22, 1, 0.36, 1),
} as const;

export const durations = {
  cardPressIn: 120,
  cardPressOut: 160,
  cardCollapse: 420,
  imageFade: 200,
  tabCrossfade: 260,
  messagesEnter: 240,
  messagesExit: 180,
  backdropIn: 240,
  backdropOut: 200,
  sheetIn: 420,
  sheetOut: 260,
  sheetResize: 320,
  priceRowIn: 280,
  priceRowStagger: 110,
  headerIntro: 360,
  activeNowIntro: 380,
  activeNowDelay: 50,
  filtersIntro: 400,
  filtersDelay: 90,
  listIntro: 420,
  listIntroDelay: 140,
  listIntroStagger: 55,
} as const;
