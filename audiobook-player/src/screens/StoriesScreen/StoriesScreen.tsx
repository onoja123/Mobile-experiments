import { ScrollView, View } from "react-native";

import { StoryShelf } from "@/components/StoryShelf";
import { PLAYLISTS } from "@/data/playlists";
import { TRENDING_STORIES } from "@/data/stories";
import { useTabScreenPadding } from "@/hooks/useTabScreenPadding";

import { StoriesHeader } from "./components/StoriesHeader";

export function StoriesScreen() {
  const contentPadding = useTabScreenPadding();

  return (
    <View className="flex-1 bg-canvas">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={contentPadding}>
        <StoriesHeader />
        <StoryShelf title="Trending" stories={TRENDING_STORIES} />
        <StoryShelf title="Playlists" stories={PLAYLISTS} />
      </ScrollView>
    </View>
  );
}
