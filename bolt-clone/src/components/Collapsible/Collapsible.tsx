import { View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import type { CollapsibleProps } from '@/interfaces';

export default function Collapsible({ fullHeight, progress, children }: CollapsibleProps) {
  const style = useAnimatedStyle(() => ({
    height: (1 - progress.value) * fullHeight,
    opacity: interpolate(progress.value, [0, 0.7], [1, 0], Extrapolation.CLAMP),
  }));

  return (
    <Animated.View style={[style, { overflow: 'hidden' }]}>
      <View style={{ height: fullHeight }}>{children}</View>
    </Animated.View>
  );
}
