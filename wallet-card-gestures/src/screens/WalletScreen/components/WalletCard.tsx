import React from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import CreditCard from "@/components/CreditCard";
import { CARD_FADE_MS, CARD_SPRING, CARD_STAGGER_MS } from "@/constants/animations";
import { CARD_HEIGHT, CARD_WIDTH } from "@/constants/layout";
import { WalletViewMode } from "@/enums";
import { getWalletCardTransform } from "@/helpers/getWalletCardTransform";
import { getWalletCardZIndex } from "@/helpers/getWalletCardZIndex";
import { shadows } from "@/theme";

import type { WalletCardProps } from "../WalletScreen.types";

export default function WalletCard({
  card,
  index,
  activeIndex,
  cardCount,
  mode,
  onPress,
}: WalletCardProps) {
  const target = getWalletCardTransform(mode, index, activeIndex);
  const hidden = mode === WalletViewMode.Detail && index !== activeIndex;
  const delay = mode === WalletViewMode.List ? index * CARD_STAGGER_MS : 0;

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withDelay(delay, withSpring(target.y, CARD_SPRING)) },
      { scale: withDelay(delay, withSpring(target.scale, CARD_SPRING)) },
    ],
    opacity: withDelay(delay, withTiming(target.opacity, { duration: CARD_FADE_MS })),
  }));

  return (
    <Animated.View
      style={[
        containerStyle,
        {
          position: "absolute",
          width: CARD_WIDTH,
          zIndex: getWalletCardZIndex(mode, index, activeIndex, cardCount),
          ...shadows.card,
        },
      ]}
      pointerEvents={hidden ? "none" : "auto"}
    >
      <Pressable onPress={onPress}>
        <CreditCard
          variant={card.id}
          holder={card.holder}
          last4={card.last4}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
        />
      </Pressable>
    </Animated.View>
  );
}
