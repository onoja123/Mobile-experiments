import { useState } from "react";

import { Text, View } from "react-native";
import { runOnJS, useAnimatedReaction } from "react-native-reanimated";

import { TRACK_DURATION_SECONDS } from "@/constants/playback";
import { formatPlaybackTime } from "@/helpers/formatPlaybackTime";
import { usePlayer } from "@/hooks/usePlayer";

export function PlaybackTimeLabels() {
  const { playbackPosition } = usePlayer();
  const [elapsedSeconds, setElapsedSeconds] = useState(() => Math.floor(playbackPosition.value));

  useAnimatedReaction(
    () => Math.floor(playbackPosition.value),
    (current, previous) => {
      if (current !== previous) runOnJS(setElapsedSeconds)(current);
    },
  );

  return (
    <View className="mt-2 flex-row justify-between">
      <Text className="text-[12px] font-medium text-subStrong">{formatPlaybackTime(elapsedSeconds)}</Text>
      <Text className="text-[12px] font-medium text-sub">
        -{formatPlaybackTime(TRACK_DURATION_SECONDS - elapsedSeconds)}
      </Text>
    </View>
  );
}
