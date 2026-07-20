import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { colors, radius, typography } from "@/theme";
import { absoluteFill } from "@/utils/style";
import { UserBubblePill } from "./UserMessage";

export interface Frame {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  text: string;
  from: Frame;
  to: Frame;
  onComplete: () => void;
}

const MORPH_DURATION = 520;

export function SendMorphOverlay({ text, from, to, onComplete }: Props) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(
      1,
      { duration: MORPH_DURATION, easing: Easing.out(Easing.cubic) },
      (finished) => {
        if (finished) runOnJS(onComplete)();
      },
    );
  }, [onComplete, progress]);

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(progress.value, [0, 1], [0, to.x - from.x]) },
      { translateY: interpolate(progress.value, [0, 1], [0, to.y - from.y]) },
    ],
  }));

  const lightStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.75], [1, 0], "clamp"),
  }));

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { left: from.x, top: from.y }, containerStyle]}
    >
      <UserBubblePill text={text} />
      <Animated.View style={[styles.lightPill, lightStyle]}>
        <Text style={[typography.bubble, styles.lightText]}>{text}</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    maxWidth: "88%",
  },
  lightPill: {
    ...absoluteFill,
    borderRadius: radius.pill,
    backgroundColor: "#E6E6EC",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  lightText: {
    color: colors.inkSecondary,
  },
});
