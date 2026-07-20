import React, { useEffect, useRef } from "react";
import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  FadeInDown,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import {
  SHIMMER_DELAY_MS,
  SHIMMER_DURATION_MS,
  SHIMMER_REPEATS,
  TOAST_AUTO_DISMISS_MS,
  TOAST_ENTER_SPRING,
  TOAST_EXIT_DURATION_MS,
} from "@/constants/animations";
import { toastShimmerGradient } from "@/theme/colors";
import { shadows } from "@/theme/shadows";

import type { UndoToastProps } from "./UndoToast.types";

const SHIMMER_BAND_WIDTH = 80;
const SHIMMER_VERTICAL_BLEED = 24;
const INITIAL_PILL_WIDTH = 280;

export default function UndoToast({ item, top, onUndo, onDone }: UndoToastProps) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pillWidth = useSharedValue(INITIAL_PILL_WIDTH);
  const sweep = useSharedValue(0);

  useEffect(() => {
    sweep.value = withDelay(
      SHIMMER_DELAY_MS,
      withRepeat(
        withTiming(1, {
          duration: SHIMMER_DURATION_MS,
          easing: Easing.inOut(Easing.ease),
        }),
        SHIMMER_REPEATS,
        false
      )
    );
    timer.current = setTimeout(onDone, TOAST_AUTO_DISMISS_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [onDone]);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          -SHIMMER_BAND_WIDTH * 2 +
          sweep.value * (pillWidth.value + SHIMMER_BAND_WIDTH * 4),
      },
      { rotate: "18deg" },
    ],
  }));

  return (
    <Animated.View
      entering={FadeInDown.springify()
        .damping(TOAST_ENTER_SPRING.damping)
        .stiffness(TOAST_ENTER_SPRING.stiffness)}
      exiting={FadeOutUp.duration(TOAST_EXIT_DURATION_MS)}
      style={{
        position: "absolute",
        top,
        left: 0,
        right: 0,
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          if (timer.current) clearTimeout(timer.current);
          onUndo();
        }}
        onLayout={(e) => {
          pillWidth.value = e.nativeEvent.layout.width;
        }}
        className="flex-row items-center overflow-hidden rounded-full bg-toast px-5 py-3"
        style={shadows.toast}
      >
        <Text className="text-[13px] text-white">
          “{item.name}” was deleted.{" "}
          <Text className="font-bold underline">Undo?</Text>
        </Text>
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: -SHIMMER_VERTICAL_BLEED,
              bottom: -SHIMMER_VERTICAL_BLEED,
              width: SHIMMER_BAND_WIDTH,
            },
            shimmerStyle,
          ]}
        >
          <LinearGradient
            colors={toastShimmerGradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}
