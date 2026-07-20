import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { colors, motion, spacing, typography } from "@/theme";
import { PlusIcon } from "@/components/icons";

interface Props {
  onPress: () => void;
}

export function NewChatButton({ onPress }: Props) {
  const halo = useSharedValue(0);

  const haloStyle = useAnimatedStyle(() => ({
    opacity: halo.value * 0.85,
    transform: [{ scale: 0.5 + halo.value * 0.6 }],
  }));

  return (
    <Pressable
      onPressIn={() => {
        halo.value = withSpring(1, { damping: 16, stiffness: 220 });
      }}
      onPressOut={() => {
        halo.value = withTiming(0, motion.fadeFast);
      }}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
      style={styles.row}
    >
      <Animated.View style={[styles.halo, haloStyle]} />
      <PlusIcon size={19} color={colors.inkMuted} strokeWidth={1.6} />
      <Text style={styles.label}>New chat</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    alignSelf: "flex-start",
  },
  label: {
    ...typography.sidebarItem,
    color: colors.inkMuted,
  },
  halo: {
    position: "absolute",
    left: 8,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E4E4EB",
  },
});
