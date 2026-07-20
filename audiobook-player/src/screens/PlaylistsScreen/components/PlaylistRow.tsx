import { Pressable, Text, View } from "react-native";

import { PlayPauseButton } from "@/components/PlayPauseButton";
import { StoryArtwork } from "@/components/StoryArtwork";
import { usePlayer } from "@/hooks/usePlayer";
import type { Story } from "@/types";

export function PlaylistRow({ playlist }: { playlist: Story }) {
  const { expandSheet } = usePlayer();

  return (
    <Pressable
      style={{ backgroundColor: playlist.tint }}
      className="flex-row items-center rounded-[22px] p-2.5 active:opacity-85"
    >
      <StoryArtwork uri={playlist.artwork} size={60} borderRadius={15} />
      <View className="ml-3.5 flex-1">
        <Text numberOfLines={1} className="text-[16px] font-semibold text-ink">
          {playlist.title}
        </Text>
        <Text numberOfLines={1} className="mt-0.5 text-[13px] font-medium text-ink/45">
          {playlist.studio}
        </Text>
      </View>
      <View className="mr-1">
        <PlayPauseButton isPlaying={false} onPress={expandSheet} diameter={44} iconSize={16} />
      </View>
    </Pressable>
  );
}
