import React, { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { colors, motion, radius, spacing, typography } from "@/theme";
import { ClipboardIcon } from "@/components/icons";
import { useTypewriter } from "@/hooks/useTypewriter";
import { sliceTokens, tokenizeJavascript } from "@/utils/highlight";

interface Props {
  code: string;
  animate: boolean;
  onDone?: () => void;
}

function useCursorBlink(active: boolean): boolean {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(
      () => setVisible((current) => !current),
      motion.cursorBlink,
    );
    return () => clearInterval(interval);
  }, [active]);

  return !active || visible;
}

export function CodeBlock({ code, animate, onDone }: Props) {
  const tokens = useMemo(() => tokenizeJavascript(code), [code]);
  const visible = useTypewriter(code, {
    enabled: animate,
    charDelay: motion.codeCharDelay,
    startDelay: 350,
    onDone,
  });
  const count = visible.length;

  const visibleTokens = count >= code.length ? tokens : sliceTokens(tokens, count);
  const typing = animate && count < code.length;
  const cursorVisible = useCursorBlink(typing && count === 0);

  const copyCode = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await Clipboard.setStringAsync(code);
  };

  return (
    <Animated.View entering={animate ? FadeIn.duration(300) : undefined} style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={copyCode} style={styles.copyButton} hitSlop={8}>
          <ClipboardIcon size={15} color="#FFFFFF" strokeWidth={1.6} />
          <Text style={typography.copyCode}>Copy code</Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={typography.code}>
          {visibleTokens.map((token, index) => (
            <Text key={index} style={{ color: token.color }}>
              {token.text}
            </Text>
          ))}
          {typing && cursorVisible && (
            <Text style={{ color: colors.codeText }}>▍</Text>
          )}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.card,
    overflow: "hidden",
    marginTop: spacing.lg,
  },
  header: {
    backgroundColor: colors.codeHeader,
    paddingVertical: 9,
    paddingHorizontal: 14,
    alignItems: "flex-end",
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  body: {
    backgroundColor: colors.codeBg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.xl,
    minHeight: 118,
  },
});
