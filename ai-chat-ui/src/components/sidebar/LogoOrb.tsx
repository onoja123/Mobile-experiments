import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { colors } from "@/theme";

export function LogoOrb({ size = 44 }: { size?: number }) {
  return (
    <View
      style={[styles.badge, { width: size, height: size, borderRadius: size / 3.2 }]}
    >
      <View style={styles.iconWrap}>
        <Svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
          <Rect x={3.5} y={5} width={6.5} height={14} rx={3.25} fill={colors.ink} />
          <Rect x={14} y={5} width={6.5} height={9} rx={3.25} fill={colors.inkMuted} />
          <Path
            d="M14 17.5c1.3-1.9 3.1-2.85 5.4-2.85h1.1"
            stroke={colors.ink}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <Path
            d="M16.25 20.05 14 17.5l2.25-2.55"
            stroke={colors.ink}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: "rgba(65, 68, 78, 0.08)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171A21",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
  iconWrap: {
    transform: [{ translateX: 0.5 }, { translateY: 0.5 }],
  },
});
