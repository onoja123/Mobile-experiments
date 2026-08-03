import { StyleSheet } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import {
  SLIDE_DRIFT,
  SLIDE_HIDE_PROGRESS,
  SLIDE_PERSPECTIVE,
  SLIDE_ROTATION_DEGREES,
} from '@/constants/layout';
import { SlideIllustrationProps } from './SlideIllustration.types';

export default function SlideIllustration({ index, progress, children }: SlideIllustrationProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const offset = progress.value - index;
    const distance = Math.abs(offset);

    return {
      opacity: interpolate(distance, [0, 0.5, SLIDE_HIDE_PROGRESS], [1, 1, 0], Extrapolation.CLAMP),
      transform: [
        { perspective: SLIDE_PERSPECTIVE },
        { translateX: offset * -SLIDE_DRIFT },
        { rotateY: `${offset * -SLIDE_ROTATION_DEGREES}deg` },
        { scale: interpolate(distance, [0, 0.5, 1], [1, 0.92, 0.85], Extrapolation.CLAMP) },
      ],
    };
  });

  return (
    <Animated.View
      className="items-center justify-center"
      style={[StyleSheet.absoluteFill, animatedStyle]}
      pointerEvents="none"
    >
      {children}
    </Animated.View>
  );
}
