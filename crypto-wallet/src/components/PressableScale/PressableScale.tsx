import React, { useCallback } from 'react';
import { Pressable, View, type GestureResponderEvent, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { haptics } from '@/services/haptics.service';
import { colors, springs } from '@/theme';
import type { PressableScaleProps } from './PressableScale.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function PressableScale({
  scaleTo = 0.97,
  haptic = 'tap',
  lift = false,
  onPressIn,
  onPressOut,
  className,
  style,
  children,
  ...rest
}: PressableScaleProps) {
  const pressed = useSharedValue(0);

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      pressed.value = withSpring(1, springs.press);
      if (haptic !== 'none') haptics[haptic]();
      onPressIn?.(event);
    },
    [haptic, onPressIn, pressed],
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      pressed.value = withSpring(0, springs.press);
      onPressOut?.(event);
    },
    [onPressOut, pressed],
  );

  const animatedStyle = useAnimatedStyle(() => {
    const scale = 1 - (1 - scaleTo) * pressed.value;
    if (!lift) return { transform: [{ scale }] };
    return {
      transform: [{ scale }],
      shadowOpacity: 0.05 + pressed.value * 0.06,
      shadowRadius: 12 + pressed.value * 6,
      elevation: 2 + pressed.value * 3,
    };
  });

  const liftStyle: ViewStyle | false = lift && {
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 8 },
  };

  return (
    <AnimatedPressable
      accessibilityRole="button"
      {...rest}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[liftStyle, animatedStyle]}
    >
      <View className={className} style={style}>
        {children}
      </View>
    </AnimatedPressable>
  );
}
