import { View } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import {
  BOTTOM_BLUR_LAYERS,
  BOTTOM_FADE_COLORS,
} from "./CardMarquee.constants";

export function MarqueeBottomFade() {
  return (
    <View
      className="absolute bottom-0 left-0 right-0 h-40"
      pointerEvents="none"
    >
      {BOTTOM_BLUR_LAYERS.map((layer) => (
        <BlurView
          key={layer.height}
          intensity={layer.intensity}
          tint="light"
          blurMethod="dimezisBlurView"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: layer.height,
          }}
        />
      ))}
      <LinearGradient
        colors={BOTTOM_FADE_COLORS}
        className="absolute bottom-0 left-0 right-0 h-14"
      />
    </View>
  );
}
