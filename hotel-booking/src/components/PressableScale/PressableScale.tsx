import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { SETTLE_SPRING } from '@/constants/animation';

import { PressableScaleProps } from './PressableScale.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const DEFAULT_SCALE_TO = 0.96;

export function PressableScale({
  children,
  className,
  style,
  scaleTo = DEFAULT_SCALE_TO,
  ...props
}: PressableScaleProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      {...props}
      className={className}
      style={[style, animatedStyle]}
      onPressIn={(e) => {
        scale.value = withSpring(scaleTo, SETTLE_SPRING);
        props.onPressIn?.(e);
      }}
      onPressOut={(e) => {
        scale.value = withSpring(1, SETTLE_SPRING);
        props.onPressOut?.(e);
      }}
    >
      {children}
    </AnimatedPressable>
  );
}
