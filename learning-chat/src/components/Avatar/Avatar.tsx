import React from "react";
import { Text, View } from "react-native";
import { AvatarProps } from "./Avatar.types";

export function Avatar({ emoji, backgroundColor, size = 40 }: AvatarProps) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
      }}
      className="items-center justify-center overflow-hidden"
    >
      <Text style={{ fontSize: size * 0.55, lineHeight: size * 0.8, marginTop: size * 0.1 }}>
        {emoji}
      </Text>
    </View>
  );
}
