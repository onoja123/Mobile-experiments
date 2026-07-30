import { Easing, withSequence, withTiming } from 'react-native-reanimated';

export function shakeSequence(distance = 6) {
  return withSequence(
    withTiming(-distance, { duration: 45 }),
    withTiming(distance, { duration: 60 }),
    withTiming(-distance * 0.6, { duration: 60 }),
    withTiming(distance * 0.35, { duration: 60 }),
    withTiming(0, { duration: 75, easing: Easing.out(Easing.quad) }),
  );
}
