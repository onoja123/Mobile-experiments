import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, radius, spacing, typography } from "@/theme";

interface Props {
  text: string;
  hidden?: boolean;
}

export function UserBubblePill({ text }: { text: string }) {
  return (
    <LinearGradient
      colors={colors.bubbleGradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.pill}
    >
      <Text style={typography.bubble} numberOfLines={0}>
        {text}
      </Text>
    </LinearGradient>
  );
}

export function UserMessage({ text, hidden }: Props) {
  return (
    <View style={[styles.container, hidden && styles.hidden]}>
      <UserBubblePill text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    maxWidth: "88%",
    marginBottom: spacing.xxl,
  },
  hidden: {
    opacity: 0,
  },
  pill: {
    borderRadius: radius.pill,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
});
