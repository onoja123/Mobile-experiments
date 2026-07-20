import { useWindowDimensions } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SHEET_SPRING } from "@/constants/animations";
import { MINI_PLAYER_HEIGHT, TAB_BAR_HEIGHT } from "@/constants/layout";
import { usePlayer } from "@/hooks/usePlayer";

const FLICK_VELOCITY = 500;

export function usePlayerSheetTransition() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { sheetProgress } = usePlayer();
  const dragStartProgress = useSharedValue(0);

  const tabBarSpace = TAB_BAR_HEIGHT + insets.bottom;
  const expandedArtworkSize = windowWidth - 88;
  const expandedArtworkTop = insets.top + 68;
  const dragRange = windowHeight - MINI_PLAYER_HEIGHT - tabBarSpace;

  const panGesture = Gesture.Pan()
    .activeOffsetY([-12, 12])
    .onStart(() => {
      dragStartProgress.value = sheetProgress.value;
    })
    .onUpdate((event) => {
      const next = dragStartProgress.value - event.translationY / dragRange;
      sheetProgress.value = Math.min(1, Math.max(0, next));
    })
    .onEnd((event) => {
      const shouldExpand =
        event.velocityY < -FLICK_VELOCITY ||
        (event.velocityY < FLICK_VELOCITY && sheetProgress.value > 0.5);
      sheetProgress.value = withSpring(shouldExpand ? 1 : 0, SHEET_SPRING);
    });

  const sheetStyle = useAnimatedStyle(() => ({
    bottom: interpolate(sheetProgress.value, [0, 0.4], [tabBarSpace, 0], Extrapolation.CLAMP),
    height: interpolate(sheetProgress.value, [0, 1], [MINI_PLAYER_HEIGHT, windowHeight]),
    borderTopLeftRadius: interpolate(sheetProgress.value, [0, 0.9, 1], [20, 28, 0]),
    borderTopRightRadius: interpolate(sheetProgress.value, [0, 0.9, 1], [20, 28, 0]),
  }));

  const blurProps = useAnimatedProps(() => ({
    intensity: interpolate(sheetProgress.value, [0, 1], [0, 55]),
  }));

  const dimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(sheetProgress.value, [0, 1], [0, 0.35]),
  }));

  const artworkStyle = useAnimatedStyle(() => {
    const size = interpolate(sheetProgress.value, [0, 1], [44, expandedArtworkSize]);
    return {
      width: size,
      height: size,
      top: interpolate(sheetProgress.value, [0, 1], [16, expandedArtworkTop]),
      left: interpolate(sheetProgress.value, [0, 1], [20, (windowWidth - expandedArtworkSize) / 2]),
      borderRadius: interpolate(sheetProgress.value, [0, 1], [10, 24]),
    };
  });

  const handleStyle = useAnimatedStyle(() => ({
    top: interpolate(sheetProgress.value, [0, 1], [8, insets.top + 10]),
  }));

  const miniStyle = useAnimatedStyle(() => ({
    opacity: interpolate(sheetProgress.value, [0, 0.12], [1, 0], Extrapolation.CLAMP),
  }));
  const miniPointerProps = useAnimatedProps(
    () =>
      ({ pointerEvents: sheetProgress.value < 0.05 ? "auto" : "none" }) as {
        pointerEvents: "auto" | "none";
      },
  );

  const expandedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(sheetProgress.value, [0.45, 0.9], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(sheetProgress.value, [0.45, 1], [32, 0], Extrapolation.CLAMP),
      },
    ],
  }));
  const expandedPointerProps = useAnimatedProps(
    () =>
      ({ pointerEvents: sheetProgress.value > 0.95 ? "auto" : "none" }) as {
        pointerEvents: "auto" | "none";
      },
  );

  return {
    panGesture,
    sheetStyle,
    blurProps,
    dimStyle,
    artworkStyle,
    handleStyle,
    miniStyle,
    miniPointerProps,
    expandedStyle,
    expandedPointerProps,
    expandedArtworkSize,
    expandedArtworkTop,
  };
}
