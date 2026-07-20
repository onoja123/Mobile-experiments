import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Shimmer } from '../Shimmer';
import type { RefreshableValueProps } from './RefreshableValue.types';
import { styles } from './styles';

export function RefreshableValue({
  refreshing,
  shimmerWidth = 72,
  shimmerHeight = 16,
  children,
}: RefreshableValueProps) {
  const settled = useSharedValue(1);

  useEffect(() => {
    settled.value = withTiming(refreshing ? 0 : 1, {
      duration: refreshing ? 140 : 280,
    });
  }, [refreshing, settled]);

  const contentStyle = useAnimatedStyle(() => ({
    opacity: 0.28 + settled.value * 0.72,
    transform: [{ scale: 0.985 + settled.value * 0.015 }],
  }));

  const shimmerStyle = useAnimatedStyle(() => ({
    opacity: 1 - settled.value,
  }));

  return (
    <View>
      <Animated.View style={contentStyle}>{children}</Animated.View>
      <Animated.View pointerEvents="none" style={[styles.overlay, shimmerStyle]}>
        <Shimmer width={shimmerWidth} height={shimmerHeight} radius={shimmerHeight / 2} />
      </Animated.View>
    </View>
  );
}
