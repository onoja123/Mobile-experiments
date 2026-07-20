import { View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import { TRACK_DURATION_SECONDS } from "@/constants/playback";
import { usePlayer } from "@/hooks/usePlayer";

import { MarchingDashes } from "./MarchingDashes";

export function PlaybackProgressBar({ playing }: { playing: boolean }) {
  const { playbackPosition } = usePlayer();

  const fillStyle = useAnimatedStyle(() => ({
    width: `${(playbackPosition.value / TRACK_DURATION_SECONDS) * 100}%`,
  }));

  return (
    <View className="h-[3px] flex-row items-center">
      <Animated.View style={fillStyle} className="h-full rounded-full bg-inkSoft" />
      <MarchingDashes playing={playing} />
    </View>
  );
}
