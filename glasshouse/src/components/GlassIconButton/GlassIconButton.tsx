import { GlassView } from "expo-glass-effect";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet } from "react-native";

import { GLASS_BUTTON_SIZE } from "@/constants/layout";
import { getGlassFallbackStyle } from "@/helpers/getGlassFallbackStyle";
import { colors } from "@/theme";

import { GlassIconButtonProps } from "./GlassIconButton.types";

export default function GlassIconButton({
  icon,
  onPress,
  tint,
}: GlassIconButtonProps) {
  return (
    <Pressable onPress={onPress} hitSlop={6}>
      <GlassView isInteractive style={[styles.glass, getGlassFallbackStyle()]}>
        <SymbolView
          name={icon}
          size={17}
          weight="semibold"
          tintColor={tint ?? colors.ink}
        />
      </GlassView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  glass: {
    width: GLASS_BUTTON_SIZE,
    height: GLASS_BUTTON_SIZE,
    borderRadius: GLASS_BUTTON_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
