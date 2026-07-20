import { LinearTransition, withSpring, withTiming } from 'react-native-reanimated';
import { springs } from '@/theme';

export const cardLayout = LinearTransition.springify()
  .damping(springs.layout.damping)
  .stiffness(springs.layout.stiffness);

export function cardIn() {
  'worklet';
  return {
    initialValues: { opacity: 0, transform: [{ translateY: 340 }] },
    animations: {
      opacity: withTiming(1, { duration: 200 }),
      transform: [{ translateY: withSpring(0, springs.sheet) }],
    },
  };
}

export function cardOut() {
  'worklet';
  return {
    initialValues: { opacity: 1, transform: [{ translateY: 0 }] },
    animations: {
      opacity: withTiming(0, { duration: 220 }),
      transform: [{ translateY: withTiming(340, { duration: 260 }) }],
    },
  };
}
