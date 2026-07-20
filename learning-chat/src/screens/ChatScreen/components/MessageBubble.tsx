import React from "react";
import { Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Avatar } from "@/components/Avatar";
import { MESSAGE_ENTER_DURATION_MS } from "@/constants";
import { BOT_AVATAR, USER_AVATAR } from "@/data/avatars";
import { MessageAuthor } from "@/enums";
import { colors, typography } from "@/theme";
import { ChatMessage } from "@/types";

type MessageBubbleProps = {
  message: ChatMessage;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.author === MessageAuthor.Bot;

  return (
    <Animated.View
      entering={FadeInUp.duration(MESSAGE_ENTER_DURATION_MS)}
      className={`flex-row items-end mt-3 ${isBot ? "" : "justify-end"}`}
    >
      {isBot && (
        <Avatar emoji={BOT_AVATAR.emoji} backgroundColor={BOT_AVATAR.backgroundColor} size={22} />
      )}
      <View
        className={`rounded-[16px] px-4 py-3 max-w-[68%] ${
          isBot ? "ml-2 bg-sand" : "mr-2 bg-periwinkle"
        }`}
      >
        <Text
          style={[
            typography.bubbleText,
            { color: isBot ? colors.botBubbleText : colors.userBubbleText },
          ]}
        >
          {message.text}
        </Text>
      </View>
      {!isBot && (
        <Avatar emoji={USER_AVATAR.emoji} backgroundColor={USER_AVATAR.backgroundColor} size={22} />
      )}
    </Animated.View>
  );
}
