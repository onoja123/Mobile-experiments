import React, { ReactNode } from "react";
import { Pressable, PressableProps, ViewStyle, StyleProp } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { motion } from "@/theme";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props extends PressableProps {
  children: ReactNode;
  scaleTo?: number;
  haptic?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function PressableScale({
  children,
  scaleTo = 0.94,
  haptic = false,
  onPress,
  style,
  ...rest
}: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      {...rest}
      style={[style, animatedStyle]}
      onPressIn={(event) => {
        scale.value = withTiming(scaleTo, motion.fadeFast);
        rest.onPressIn?.(event);
      }}
      onPressOut={(event) => {
        scale.value = withTiming(1, motion.fadeFast);
        rest.onPressOut?.(event);
      }}
      onPress={(event) => {
        if (haptic) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress?.(event);
      }}
    >
      {children}
    </AnimatedPressable>
  );
}
