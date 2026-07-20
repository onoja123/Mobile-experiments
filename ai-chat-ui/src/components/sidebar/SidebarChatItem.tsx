import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "@/theme";
import { ChatSquareIcon } from "@/components/icons";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PressableFade } from "@/components/ui/PressableFade";

interface Props {
  title: string;
  active: boolean;
  typing: boolean;
  onPress: () => void;
  onTypingDone?: () => void;
}

export function SidebarChatItem({ title, active, typing, onPress, onTypingDone }: Props) {
  const visibleTitle = useTypewriter(title, {
    enabled: typing,
    charDelay: 42,
    startDelay: 350,
    onDone: onTypingDone,
  });

  return (
    <PressableFade onPress={onPress} style={styles.row}>
      <ChatSquareIcon size={19} color={colors.ink} strokeWidth={1.4} />
      <Text style={[typography.sidebarItem, styles.title]} numberOfLines={1}>
        {visibleTitle}
      </Text>
      {active && visibleTitle.length === title.length && <View style={styles.dot} />}
    </PressableFade>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  title: {
    flexShrink: 1,
  },
  dot: {
    width: 4.5,
    height: 4.5,
    borderRadius: 2.5,
    backgroundColor: colors.ink,
    marginLeft: spacing.xs,
  },
});
