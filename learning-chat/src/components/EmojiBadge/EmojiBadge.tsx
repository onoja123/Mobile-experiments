import React from "react";
import { Text, View } from "react-native";
import { EmojiBadgeProps } from "./EmojiBadge.types";

export function EmojiBadge({ emoji, size = 54 }: EmojiBadgeProps) {
  return (
    <View
      style={{ width: size, height: size, borderRadius: size / 2 }}
      className="items-center justify-center bg-white/40"
    >
      <Text style={{ fontSize: size * 0.48 }}>{emoji}</Text>
    </View>
  );
}
