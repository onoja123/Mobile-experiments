import { useEffect } from "react";

import { View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const DASH_WIDTH = 4;
const DASH_GAP = 5;
const DASH_PERIOD = DASH_WIDTH + DASH_GAP;
const DASH_SPEED = 14;
const DASH_TRAVEL = 60_000;
const DASH_COUNT = 80;

export function MarchingDashes({ playing }: { playing: boolean }) {
  const phase = useSharedValue(0);

  useEffect(() => {
    if (playing) {
      phase.value = withTiming(phase.value - DASH_TRAVEL, {
        duration: (DASH_TRAVEL / DASH_SPEED) * 1000,
        easing: Easing.linear,
      });
    } else {
      cancelAnimation(phase);
    }
  }, [playing, phase]);

  const style = useAnimatedStyle(() => ({
    flexDirection: "row" as const,
    gap: DASH_GAP,
    transform: [{ translateX: phase.value % DASH_PERIOD }],
  }));

  return (
    <View className="ml-[5px] h-full flex-1 overflow-hidden">
      <Animated.View style={style} className="h-full">
        {Array.from({ length: DASH_COUNT }).map((_, index) => (
          <View key={index} style={{ width: DASH_WIDTH }} className="h-full rounded-full bg-black/15" />
        ))}
      </Animated.View>
    </View>
  );
}
