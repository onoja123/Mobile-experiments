import { ScrollView, Text, View } from "react-native";

import { StoryCard } from "@/components/StoryCard";

import type { StoryShelfProps } from "./StoryShelf.types";

export function StoryShelf({ title, stories }: StoryShelfProps) {
  return (
    <View className="mt-8">
      <Text className="px-6 text-[20px] font-semibold text-ink">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 16, paddingTop: 16 }}
      >
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
}
