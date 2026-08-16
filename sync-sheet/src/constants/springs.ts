import type { WithSpringConfig } from 'react-native-reanimated';

export const SHEET_SPRING: WithSpringConfig = { damping: 34, stiffness: 300, mass: 1 };

export const DISMISS_SPRING: WithSpringConfig = {
  damping: 36,
  stiffness: 380,
  mass: 1,
  overshootClamping: true,
};

export const GROW_SPRING: WithSpringConfig = { damping: 26, stiffness: 240, mass: 1 };

export const POP_SPRING: WithSpringConfig = { damping: 16, stiffness: 220, mass: 1 };

export const PRESS_SPRING: WithSpringConfig = { damping: 20, stiffness: 400, mass: 1 };
