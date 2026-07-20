import { ScrollView, View } from "react-native";

import { ScreenTitle } from "@/components/ScreenTitle";
import { PLAYLISTS } from "@/data/playlists";
import { useTabScreenPadding } from "@/hooks/useTabScreenPadding";

import { CreatePlaylistRow } from "./components/CreatePlaylistRow";
import { PlaylistRow } from "./components/PlaylistRow";

export function PlaylistsScreen() {
  const contentPadding = useTabScreenPadding();

  return (
    <View className="flex-1 bg-canvas">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={contentPadding}>
        <ScreenTitle title="Playlists" />
        <View className="mt-6 gap-3 px-6">
          {PLAYLISTS.map((playlist) => (
            <PlaylistRow key={playlist.id} playlist={playlist} />
          ))}
          <CreatePlaylistRow />
        </View>
      </ScrollView>
    </View>
  );
}
