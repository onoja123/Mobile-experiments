import { Text, View } from "react-native";
import { Airplay, MoonStar, MoreHorizontal } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PlayPauseButton } from "@/components/PlayPauseButton";
import { usePlayer } from "@/hooks/usePlayer";
import { colors } from "@/theme/colors";

import { PlaybackProgressBar } from "./PlaybackProgressBar";
import { PlaybackTimeLabels } from "./PlaybackTimeLabels";
import { SkipButton } from "./SkipButton";

export function ExpandedPlayerView({ artworkSpacerHeight }: { artworkSpacerHeight: number }) {
  const insets = useSafeAreaInsets();
  const { track, isPlaying, togglePlay } = usePlayer();

  return (
    <>
      <View style={{ height: artworkSpacerHeight }} />

      <Text numberOfLines={1} className="mt-7 text-center text-[19px] font-semibold text-ink">
        {track.title}
      </Text>
      <Text numberOfLines={1} className="mt-1.5 text-center text-[14px] text-sub">
        {track.studio}
      </Text>

      <View className="mt-9">
        <PlaybackProgressBar playing={isPlaying} />
        <PlaybackTimeLabels />
      </View>

      <View className="mt-8 flex-row items-center justify-center gap-14">
        <SkipButton direction="back" />
        <PlayPauseButton isPlaying={isPlaying} onPress={togglePlay} diameter={64} iconSize={26} />
        <SkipButton direction="forward" />
      </View>

      <View className="flex-1" />

      <View
        className="flex-row items-center justify-between px-3"
        style={{ paddingBottom: insets.bottom + 20 }}
      >
        <Text className="text-[15px] font-medium text-ink">1.0x</Text>
        <MoonStar size={22} color={colors.ink} strokeWidth={1.8} />
        <Airplay size={22} color={colors.accent} strokeWidth={1.8} />
        <MoreHorizontal size={22} color={colors.ink} strokeWidth={1.8} />
      </View>
    </>
  );
}
