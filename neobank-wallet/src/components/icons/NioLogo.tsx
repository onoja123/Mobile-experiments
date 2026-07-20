import { View } from "react-native";

import { colors } from "@/theme";

import { NioStar } from "./NioStar";

export function NioLogo({
  size = 44,
  background = colors.ink,
  star = colors.white,
}: {
  size?: number;
  background?: string;
  star?: string;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NioStar size={size * 0.55} color={star} />
    </View>
  );
}
