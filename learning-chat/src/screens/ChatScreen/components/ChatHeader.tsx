import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "@/components/Avatar";
import { BOT_AVATAR } from "@/data/avatars";
import { colors, typography } from "@/theme";

type ChatHeaderProps = {
  title: string;
  onBack: () => void;
};

export function ChatHeader({ title, onBack }: ChatHeaderProps) {
  return (
    <View className="flex-row items-center px-5 mt-1.5">
      <Pressable
        onPress={onBack}
        hitSlop={8}
        className="w-10 h-10 rounded-full bg-sand items-center justify-center"
      >
        <Ionicons name="chevron-back" size={18} color={colors.backChevron} />
      </Pressable>
      <View className="flex-1 items-center">
        <Text className="text-fade" style={typography.chatHeaderLabel}>
          Chat with AI bot
        </Text>
        <Text className="font-jost-medium text-[14px] text-ink -mt-0.5">
          {title}
        </Text>
      </View>
      <Avatar emoji={BOT_AVATAR.emoji} backgroundColor={BOT_AVATAR.backgroundColor} />
    </View>
  );
}
