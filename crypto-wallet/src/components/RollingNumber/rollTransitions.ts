import { LinearTransition, withSpring, withTiming } from 'react-native-reanimated';
import { springs } from '@/theme';

export const cellLayout = LinearTransition.springify()
  .damping(springs.layout.damping)
  .stiffness(springs.layout.stiffness);

export function rollIn(height: number) {
  return () => {
    'worklet';
    return {
      initialValues: { transform: [{ translateY: height }] },
      animations: {
        transform: [{ translateY: withSpring(0, springs.roll) }],
      },
    };
  };
}

export function rollOut(height: number) {
  return () => {
    'worklet';
    return {
      initialValues: { transform: [{ translateY: 0 }] },
      animations: {
        transform: [{ translateY: withTiming(height, { duration: 160 }) }],
      },
    };
  };
}
