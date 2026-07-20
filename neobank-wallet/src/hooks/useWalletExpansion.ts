import { useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  CARD_ASPECT_RATIO,
  CARD_CLOSE_TIMING,
  CARD_OPEN_TIMING,
  COLLAPSED_CARD_PEEK,
  COLLAPSED_GHOST_PEEK,
  EXPANDED_CARD_TOP_OFFSET,
} from "@/constants/wallet";
import { spacing } from "@/theme";

export function useWalletExpansion() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [expanded, setExpanded] = useState(false);
  const progress = useSharedValue(0);

  const cardWidth = width - spacing.screenHorizontal * 2;
  const cardHeight = Math.round(cardWidth / CARD_ASPECT_RATIO);
  const collapsedCardTop = height - COLLAPSED_CARD_PEEK - COLLAPSED_GHOST_PEEK;
  const ghostTop = height - COLLAPSED_GHOST_PEEK;
  const expandedCardTop = insets.top + EXPANDED_CARD_TOP_OFFSET;
  const listTop = expandedCardTop + cardHeight + spacing.sectionGap;

  const open = () => {
    setExpanded(true);
    progress.value = withTiming(1, CARD_OPEN_TIMING);
  };

  const close = () => {
    setExpanded(false);
    progress.value = withTiming(0, CARD_CLOSE_TIMING);
  };

  const card = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [collapsedCardTop, expandedCardTop],
        ),
      },
    ],
  }));

  const ghost = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.35], [1, 0], "clamp"),
    transform: [
      { translateY: interpolate(progress.value, [0, 1], [ghostTop, ghostTop + 120]) },
    ],
  }));

  const hero = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.45], [1, 0], "clamp"),
    transform: [{ translateY: interpolate(progress.value, [0, 1], [0, -14]) }],
  }));

  const list = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0.55, 1], [0, 1], "clamp"),
    transform: [
      { translateY: interpolate(progress.value, [0.35, 1], [28, 0], "clamp") },
    ],
  }));

  const scanButton = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.35], [1, 0], "clamp"),
  }));

  const closeButton = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0.7, 1], [0, 1], "clamp"),
  }));

  const trailingButtons = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.35], [1, 0], "clamp"),
  }));

  return {
    expanded,
    open,
    close,
    insets,
    layout: { cardWidth, cardHeight, listTop },
    styles: { card, ghost, hero, list, scanButton, closeButton, trailingButtons },
  };
}
