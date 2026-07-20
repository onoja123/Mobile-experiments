import React from "react";
import { Text } from "react-native";
import Animated, { useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";

import {
  CARD_SPRING,
  HEADER_FADE_MS,
  HEADER_HIDE_TRANSLATE_Y,
} from "@/constants/animations";
import { HEADER_HEIGHT } from "@/constants/layout";
import { WalletViewMode } from "@/enums";
import { typography } from "@/theme";

import type { WalletHeaderProps } from "../WalletScreen.types";

export default function WalletHeader({ mode, topInset }: WalletHeaderProps) {
  const hidden = mode === WalletViewMode.Detail;

  const containerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(hidden ? 0 : 1, { duration: HEADER_FADE_MS }),
    transform: [
      { translateY: withSpring(hidden ? HEADER_HIDE_TRANSLATE_Y : 0, CARD_SPRING) },
    ],
  }));

  return (
    <Animated.View
      style={[containerStyle, { paddingTop: topInset, height: topInset + HEADER_HEIGHT }]}
      className="items-center justify-center"
    >
      <Text className="text-ink" style={typography.screenTitle}>
        Wallet
      </Text>
    </Animated.View>
  );
}
