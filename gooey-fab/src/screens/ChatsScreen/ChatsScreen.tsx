import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GooeyFab } from "@/components/GooeyFab";
import { CHATS } from "@/data/chats";
import { ChatRow } from "./components/ChatRow";

export function ChatsScreen() {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-canvas">
      <Text className="px-5 pb-3 pt-2 text-[34px] font-bold tracking-[-0.5px] text-ink">
        Chats
      </Text>
      <FlatList
        data={CHATS}
        keyExtractor={(chat) => chat.id}
        renderItem={({ item }) => <ChatRow chat={item} />}
        showsVerticalScrollIndicator={false}
      />
      <GooeyFab />
    </SafeAreaView>
  );
}
