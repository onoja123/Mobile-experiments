import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { AppleSpinnerProps } from './AppleSpinner.types';
import { styles } from './styles';

const DOT_COUNT = 10;
const REVOLUTION_MS = 900;

type Dot = {
  x: number;
  y: number;
  opacity: number;
};

export function AppleSpinner({ visibility, size = 34, style }: AppleSpinnerProps) {
  const rotation = useSharedValue(0);
  const dotSize = size * 0.14;
  const radius = size / 2 - dotSize / 2;

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(1, { duration: REVOLUTION_MS, easing: Easing.linear }),
      -1,
    );
    return () => cancelAnimation(rotation);
  }, [rotation]);

  const dots = useMemo<Dot[]>(
    () =>
      Array.from({ length: DOT_COUNT }, (_, i) => {
        const angle = (i / DOT_COUNT) * Math.PI * 2 - Math.PI / 2;
        return {
          x: size / 2 + radius * Math.cos(angle) - dotSize / 2,
          y: size / 2 + radius * Math.sin(angle) - dotSize / 2,
          opacity: 0.18 + (0.82 * i) / (DOT_COUNT - 1),
        };
      }),
    [size, radius, dotSize],
  );

  const containerStyle = useAnimatedStyle(() => {
    const step = Math.floor(rotation.value * DOT_COUNT) / DOT_COUNT;
    return {
      opacity: visibility.value,
      transform: [
        { scale: 0.9 + 0.1 * visibility.value },
        { rotate: `${step * 360}deg` },
      ],
    };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[{ width: size, height: size }, containerStyle, style]}
    >
      {dots.map((dot, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            {
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              left: dot.x,
              top: dot.y,
              opacity: dot.opacity,
            },
          ]}
        />
      ))}
    </Animated.View>
  );
}
