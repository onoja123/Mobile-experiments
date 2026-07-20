import { Pressable } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

import {
  ACTION_DIAMETER,
  ACTION_OPACITY_INPUT_RANGE,
  ACTION_OPACITY_OUTPUT_RANGE,
  ACTION_SCALE_INPUT_RANGE,
  ACTION_SCALE_OUTPUT_RANGE,
  FAB_CENTER_X,
  FAB_CENTER_Y,
} from "@/constants/gooeyFab";
import type { FabActionButtonProps } from "./GooeyFab.types";

export function FabActionButton({
  drive,
  offsetY,
  interactive,
  onPress,
  children,
}: FabActionButtonProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: drive.value * offsetY },
      {
        scale: interpolate(
          drive.value,
          ACTION_SCALE_INPUT_RANGE,
          ACTION_SCALE_OUTPUT_RANGE,
          "clamp",
        ),
      },
    ],
    opacity: interpolate(
      drive.value,
      ACTION_OPACITY_INPUT_RANGE,
      ACTION_OPACITY_OUTPUT_RANGE,
      "clamp",
    ),
  }));

  return (
    <Animated.View
      pointerEvents={interactive ? "auto" : "none"}
      style={[
        {
          position: "absolute",
          left: FAB_CENTER_X - ACTION_DIAMETER / 2,
          top: FAB_CENTER_Y - ACTION_DIAMETER / 2,
          width: ACTION_DIAMETER,
          height: ACTION_DIAMETER,
        },
        animatedStyle,
      ]}
    >
      <Pressable
        onPress={onPress}
        className="flex-1 items-center justify-center rounded-full"
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
