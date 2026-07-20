import React from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { CARD_SPRING, FAB_FADE_MS } from "@/constants/animations";
import { FAB_BOTTOM_MARGIN, FAB_SIZE } from "@/constants/layout";
import { colors, shadows } from "@/theme";

import type { AddCardButtonProps } from "../WalletScreen.types";

export default function AddCardButton({
  visible,
  bottomInset,
  onPress,
}: AddCardButtonProps) {
  const containerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(visible ? 1 : 0, { duration: FAB_FADE_MS }),
    transform: [{ scale: withSpring(visible ? 1 : 0, CARD_SPRING) }],
  }));

  return (
    <Animated.View
      style={[
        containerStyle,
        {
          position: "absolute",
          bottom: bottomInset + FAB_BOTTOM_MARGIN,
          alignSelf: "center",
          ...shadows.fab,
        },
      ]}
      pointerEvents={visible ? "auto" : "none"}
    >
      <Pressable
        onPress={onPress}
        className="bg-accent items-center justify-center"
        style={{ width: FAB_SIZE, height: FAB_SIZE, borderRadius: FAB_SIZE / 2 }}
      >
        <Ionicons name="add" size={28} color={colors.white} />
      </Pressable>
    </Animated.View>
  );
}
