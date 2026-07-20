import type { WithSpringConfig } from 'react-native-reanimated';

export const springs = {
  press: { damping: 22, stiffness: 420, mass: 0.7 },
  roll: { damping: 20, stiffness: 260, mass: 0.8 },
  pop: { damping: 14, stiffness: 300, mass: 0.8 },
  sheet: { damping: 28, stiffness: 300, mass: 0.9 },
  screen: { damping: 30, stiffness: 280, mass: 1 },
  layout: { damping: 26, stiffness: 340, mass: 0.8 },
} satisfies Record<string, WithSpringConfig>;
