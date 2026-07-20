import { Easing, WithSpringConfig, WithTimingConfig } from "react-native-reanimated";

export const motion = {
  drawerSpring: {
    damping: 22,
    stiffness: 180,
    mass: 1,
  } satisfies WithSpringConfig,

  sendSpring: {
    damping: 18,
    stiffness: 140,
    mass: 1,
  } satisfies WithSpringConfig,

  fadeIn: {
    duration: 500,
    easing: Easing.out(Easing.cubic),
  } satisfies WithTimingConfig,

  fadeFast: {
    duration: 220,
    easing: Easing.out(Easing.quad),
  } satisfies WithTimingConfig,

  greetingStagger: 900,
  typewriterCharDelay: 22,
  codeCharDelay: 14,
  cursorBlink: 520,
} as const;
