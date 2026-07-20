import type { WithSpringConfig } from "react-native-reanimated";

export const FAB_DIAMETER = 64;
export const ACTION_DIAMETER = 56;

export const FAB_CANVAS_WIDTH = 112;
export const FAB_CANVAS_HEIGHT = 320;
export const FAB_CANVAS_BOTTOM_OFFSET = 8;
export const FAB_BOTTOM_MARGIN = 24;

export const FAB_CENTER_X = FAB_CANVAS_WIDTH / 2;
export const FAB_CENTER_Y = FAB_CANVAS_HEIGHT - FAB_BOTTOM_MARGIN - FAB_DIAMETER / 2;

export const VOICE_ACTION_OFFSET_Y = -94;
export const VIDEO_ACTION_OFFSET_Y = -188;

export const OPEN_SPRING: WithSpringConfig = { damping: 14, stiffness: 130, mass: 1 };
export const CLOSE_SPRING: WithSpringConfig = { damping: 17, stiffness: 190, mass: 1 };
export const VIDEO_OPEN_SPRING: WithSpringConfig = { ...OPEN_SPRING, damping: 13 };
export const ACTION_STAGGER_MS = 60;

export const GOO_BLUR_RADIUS = 9;
export const GOO_ALPHA_THRESHOLD_MATRIX = [
  1, 0, 0, 0, 0,
  0, 1, 0, 0, 0,
  0, 0, 1, 0, 0,
  0, 0, 0, 32, -14,
];

export const ACTION_SCALE_INPUT_RANGE = [0.6, 1];
export const ACTION_SCALE_OUTPUT_RANGE = [0.4, 1];
export const ACTION_OPACITY_INPUT_RANGE = [0.65, 1];
export const ACTION_OPACITY_OUTPUT_RANGE = [0, 1];

export const BACKDROP_BLUR_INTENSITY = 35;
export const PLUS_ICON_OPEN_ROTATION_DEG = 135;

export const PLUS_ICON_SIZE = 30;
export const VIDEO_ICON_SIZE = 22;
export const VOICE_ICON_SIZE = 20;
