import { StyleSheet, Text, View } from "react-native";

import { Avatar } from "@/components/Avatar";
import type { Chat } from "@/interfaces";

type ChatRowProps = {
  chat: Chat;
};

export function ChatRow({ chat }: ChatRowProps) {
  return (
    <View className="flex-row items-center px-5">
      <Avatar colors={chat.avatarColors} />
      <View
        className="ml-4 flex-1 self-stretch justify-center border-black/10 py-3.5"
        style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
      >
        <View className="flex-row items-baseline justify-between">
          <Text className="text-[17px] font-semibold tracking-[-0.2px] text-ink">
            {chat.name}
          </Text>
          <Text className="text-[13px] text-subtle">{chat.lastMessageTime}</Text>
        </View>
        <Text
          numberOfLines={2}
          className="mt-0.5 pr-10 text-[15px] leading-[20px] text-subtle"
        >
          {chat.lastMessage}
        </Text>
      </View>
    </View>
  );
}
