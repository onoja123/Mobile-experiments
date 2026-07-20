import { Pressable } from "react-native";
import { Pause, Play } from "lucide-react-native";

import { colors } from "@/theme/colors";

import type { PlayPauseButtonProps } from "./PlayPauseButton.types";

export function PlayPauseButton({ isPlaying, onPress, diameter, iconSize }: PlayPauseButtonProps) {
  const Icon = isPlaying ? Pause : Play;
  const opticalOffset = isPlaying ? 0 : Math.round(iconSize / 8);

  return (
    <Pressable
      onPress={onPress}
      style={{ width: diameter, height: diameter }}
      className="items-center justify-center rounded-full bg-ink active:opacity-80"
    >
      <Icon size={iconSize} color={colors.white} fill={colors.white} style={{ marginLeft: opticalOffset }} />
    </Pressable>
  );
}
