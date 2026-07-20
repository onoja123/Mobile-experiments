import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import {
  HOVER_FEEDBACK_DURATION_MS,
  ZONE_DISMISS_DURATION_MS,
  ZONE_REVEAL_SPRING,
} from "@/constants/animations";
import {
  DELETE_ZONE_REVEAL_OVERSHOOT,
  DELETE_ZONE_SIDE_INSET,
} from "@/constants/layout";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";

import type { DeleteZoneProps } from "./DeleteZone.types";

export default function DeleteZone({
  dragging,
  hover,
  height,
  bottom,
}: DeleteZoneProps) {
  const hoverProgress = useDerivedValue(() =>
    withTiming(hover.value, {
      duration: HOVER_FEEDBACK_DURATION_MS,
      easing: Easing.out(Easing.quad),
    })
  );

  const sheetProgress = useDerivedValue(() =>
    dragging.value
      ? withSpring(1, ZONE_REVEAL_SPRING)
      : withTiming(0, {
          duration: ZONE_DISMISS_DURATION_MS,
          easing: Easing.in(Easing.cubic),
        })
  );

  const containerStyle = useAnimatedStyle(() => ({
    opacity: 0.4 + sheetProgress.value * 0.6,
    transform: [
      {
        translateY:
          (1 - sheetProgress.value) *
          (height + bottom + DELETE_ZONE_REVEAL_OVERSHOOT),
      },
    ],
  }));

  const fillStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      hoverProgress.value,
      [0, 1],
      [colors.deleteZoneFill, colors.deleteZoneFillHover]
    ),
    borderColor: interpolateColor(
      hoverProgress.value,
      [0, 1],
      [colors.deleteZoneBorder, colors.deleteZoneBorderHover]
    ),
  }));

  const labelStyle = useAnimatedStyle(() => ({
    opacity: 1 - hoverProgress.value,
  }));

  const binStyle = useAnimatedStyle(() => ({
    opacity: hoverProgress.value,
    transform: [{ scale: 0.6 + hoverProgress.value * 0.4 }],
  }));

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        {
          position: "absolute",
          left: DELETE_ZONE_SIDE_INSET,
          right: DELETE_ZONE_SIDE_INSET,
          bottom,
          height,
        },
        containerStyle,
      ]}
    >
      <Animated.View
        className="flex-1 items-center justify-center rounded-3xl"
        style={[{ borderWidth: 1.5, borderStyle: "dashed" }, fillStyle]}
      >
        <Animated.View style={[{ position: "absolute" }, labelStyle]}>
          <Text className="text-[13px] font-semibold tracking-wide text-zoneText">
            Drag here to Delete
          </Text>
        </Animated.View>
        <Animated.View
          className="h-12 w-12 items-center justify-center rounded-full bg-white"
          style={[shadows.binButton, binStyle]}
        >
          <Ionicons name="trash" size={20} color={colors.bin} />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}
