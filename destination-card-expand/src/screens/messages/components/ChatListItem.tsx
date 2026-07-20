import React from 'react';
import { Pressable, Text, View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import Avatar from '@/components/Avatar';
import { durations } from '@/constants/animation';
import { avatarSizes, presenceDotSizes } from '@/constants/layout';
import { typography } from '@/theme';
import type { Chat } from '@/types';

import PresenceDot from './PresenceDot';

export default function ChatListItem({
  chat,
  index,
}: {
  chat: Chat;
  index: number;
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(
        durations.listIntroDelay + index * durations.listIntroStagger,
      ).duration(durations.listIntro)}
    >
      <Pressable className="flex-row items-center gap-4 px-6 py-3.5 active:opacity-70">
        <View>
          <Avatar uri={chat.avatar} size={avatarSizes.chatRow} />
          {chat.online && <PresenceDot size={presenceDotSizes.chatRow} />}
        </View>
        <View className="flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-ink" style={typography.emphasis}>
              {chat.name}
            </Text>
            <Text className="font-sans text-muted" style={typography.caption}>
              {chat.time}
            </Text>
          </View>
          <View className="mt-0.5 flex-row items-center justify-between gap-3">
            <Text
              numberOfLines={1}
              className={`flex-1 font-sans ${
                chat.typing
                  ? 'font-semibold text-online'
                  : chat.unread
                    ? 'text-ink'
                    : 'text-muted'
              }`}
              style={typography.body}
            >
              {chat.typing ? 'typing…' : chat.message}
            </Text>
            {!!chat.unread && (
              <View className="h-[22px] min-w-[22px] items-center justify-center rounded-full bg-pill px-1.5">
                <Text className="font-bold text-white" style={typography.badge}>
                  {chat.unread}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}
