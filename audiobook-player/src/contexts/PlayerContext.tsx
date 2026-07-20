import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { cancelAnimation, Easing, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

import { SHEET_SPRING } from "@/constants/animations";
import { TRACK_DURATION_SECONDS } from "@/constants/playback";
import { NOW_PLAYING_TRACK } from "@/data/nowPlaying";
import type { PlayerContextValue } from "@/types";

export const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const sheetProgress = useSharedValue(0);
  const playbackPosition = useSharedValue(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const remaining = TRACK_DURATION_SECONDS - playbackPosition.value;
      if (remaining > 0) {
        playbackPosition.value = withTiming(TRACK_DURATION_SECONDS, {
          duration: remaining * 1000,
          easing: Easing.linear,
        });
      }
    } else {
      cancelAnimation(playbackPosition);
    }
  }, [isPlaying, playbackPosition]);

  const value = useMemo<PlayerContextValue>(
    () => ({
      sheetProgress,
      playbackPosition,
      track: NOW_PLAYING_TRACK,
      isPlaying,
      togglePlay: () => setIsPlaying((playing) => !playing),
      expandSheet: () => {
        sheetProgress.value = withSpring(1, SHEET_SPRING);
      },
      collapseSheet: () => {
        sheetProgress.value = withSpring(0, SHEET_SPRING);
      },
    }),
    [sheetProgress, playbackPosition, isPlaying],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
