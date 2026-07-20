import { Pressable, Text, View } from "react-native";

import { StoryArtwork } from "@/components/StoryArtwork";

import type { StoryCardProps } from "./StoryCard.types";

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Pressable className="w-[156px] active:opacity-85">
      <View style={{ backgroundColor: story.tint }} className="rounded-[24px] p-2">
        <StoryArtwork uri={story.artwork} size={140} borderRadius={17} />
        <View className="px-1.5 pb-2 pt-2.5">
          <Text numberOfLines={1} className="text-[15px] font-semibold text-ink">
            {story.title}
          </Text>
          <Text numberOfLines={1} className="mt-0.5 text-[12px] font-medium text-ink/45">
            {story.studio}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
