import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { colors, iosEaseInOut } from '@/theme';
import type { BlinkingCursorProps } from './BlinkingCursor.types';

export function BlinkingCursor({ height }: BlinkingCursorProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.08, { duration: 460, easing: iosEaseInOut }),
        withTiming(1, { duration: 460, easing: iosEaseInOut }),
      ),
      -1,
    );
  }, [opacity]);

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View
      style={[
        {
          width: 3,
          height,
          marginLeft: 6,
          borderRadius: 2,
          backgroundColor: colors.accent,
        },
        style,
      ]}
    />
  );
}
