import { Dimensions } from "react-native";

export const GRID_COLUMNS = 3;
export const GRID_GAP = 14;
export const GRID_PADDING_X = 20;
export const GRID_PADDING_TOP = 10;
export const GRID_BOTTOM_CLEARANCE = 48;
export const CARD_MARGIN_BOTTOM = 20;
export const COLUMN_STAGGER = [22, 0, 12];

const windowWidth = Dimensions.get("window").width;

export const CARD_WIDTH = Math.floor(
  (windowWidth - GRID_PADDING_X * 2 - GRID_GAP * (GRID_COLUMNS - 1)) /
    GRID_COLUMNS
);
