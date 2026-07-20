import { withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { springs } from './motion';

export function liftIn(delay = 0) {
  return () => {
    'worklet';
    return {
      initialValues: {
        opacity: 0,
        transform: [{ translateY: 18 }, { scale: 0.97 }],
      },
      animations: {
        opacity: withDelay(delay, withTiming(1, { duration: 320 })),
        transform: [
          { translateY: withDelay(delay, withSpring(0, springs.layout)) },
          { scale: withDelay(delay, withSpring(1, springs.layout)) },
        ],
      },
    };
  };
}

export function scaleFadeIn(delay = 0) {
  return () => {
    'worklet';
    return {
      initialValues: { opacity: 0, transform: [{ scale: 0.78 }] },
      animations: {
        opacity: withDelay(delay, withTiming(1, { duration: 380 })),
        transform: [{ scale: withDelay(delay, withSpring(1, springs.pop)) }],
      },
    };
  };
}
