import { Pressable, Text, View } from "react-native";

import { PlayPauseButton } from "@/components/PlayPauseButton";
import { MINI_PLAYER_HEIGHT } from "@/constants/layout";
import { usePlayer } from "@/hooks/usePlayer";

export function MiniPlayerRow() {
  const { track, isPlaying, togglePlay, expandSheet } = usePlayer();

  return (
    <Pressable
      onPress={expandSheet}
      className="flex-row items-center"
      style={{ height: MINI_PLAYER_HEIGHT, paddingLeft: 76, paddingRight: 20 }}
    >
      <View className="flex-1 pt-1">
        <Text numberOfLines={1} className="text-[14px] font-semibold text-ink">
          {track.title}
        </Text>
        <Text numberOfLines={1} className="mt-0.5 text-[12px] text-sub">
          {track.studio}
        </Text>
      </View>
      <PlayPauseButton isPlaying={isPlaying} onPress={togglePlay} diameter={38} iconSize={15} />
    </Pressable>
  );
}
