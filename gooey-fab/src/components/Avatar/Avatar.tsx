import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import type { AvatarProps } from "./Avatar.types";

const GRADIENT_START = { x: 0.1, y: 0 };
const GRADIENT_END = { x: 0.9, y: 1 };

export function Avatar({ colors }: AvatarProps) {
  return (
    <View className="h-14 w-14 overflow-hidden rounded-full">
      <LinearGradient
        colors={colors}
        start={GRADIENT_START}
        end={GRADIENT_END}
        style={{ flex: 1 }}
      />
    </View>
  );
}
