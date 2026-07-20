import { Image } from "expo-image";

import { ARTWORK_FADE_DURATION } from "@/constants/animations";
import { colors } from "@/theme/colors";

import type { StoryArtworkProps } from "./StoryArtwork.types";

export function StoryArtwork({ uri, size, borderRadius }: StoryArtworkProps) {
  return (
    <Image
      source={{ uri }}
      style={{ width: size, height: size, borderRadius, backgroundColor: colors.artworkBackdrop }}
      contentFit="cover"
      transition={ARTWORK_FADE_DURATION}
    />
  );
}
