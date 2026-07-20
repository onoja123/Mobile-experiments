import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const CARD_ASPECT_RATIO = 0.62;

export const SCREEN_HORIZONTAL_PADDING = 24;
export const HEADER_HEIGHT = 56;

export const CARD_WIDTH = screenWidth - SCREEN_HORIZONTAL_PADDING * 2;
export const CARD_HEIGHT = Math.round(CARD_WIDTH * CARD_ASPECT_RATIO);
export const CARD_LIST_GAP = 20;
export const CARD_STACK_PEEK = 16;
export const CARD_DETAIL_EXIT_OFFSET = 220;
export const CARD_DECK_TOP_MARGIN = 8;

export const TRANSACTION_LIST_TOP_MARGIN = 22;
export const TRANSACTION_ICON_SIZE = 42;

export const FAB_SIZE = 56;
export const FAB_BOTTOM_MARGIN = 40;
