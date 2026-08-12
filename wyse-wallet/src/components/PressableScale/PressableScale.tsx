import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { PressableScaleProps } from './PressableScale.types';

export default function PressableScale({
  children,
  scaleTo = 0.97,
  wrapperStyle,
  ...rest
}: PressableScaleProps) {
  const pressed = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? scaleTo : 1, { duration: 110 }) }],
  }));

  return (
    <Animated.View style={[wrapperStyle, animatedStyle]}>
      <Pressable
        onPressIn={() => (pressed.value = 1)}
        onPressOut={() => (pressed.value = 0)}
        {...rest}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
