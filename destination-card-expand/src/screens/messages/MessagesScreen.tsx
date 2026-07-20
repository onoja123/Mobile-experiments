import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenHeader from '@/components/ScreenHeader';
import { durations } from '@/constants/animation';
import { TAB_BAR_CLEARANCE } from '@/constants/layout';
import { ACTIVE_NOW_CONTACTS, CHATS } from '@/data/chats';
import { ChatFilter } from '@/enums';
import { filterChatsByCategory } from '@/helpers/filterChatsByCategory';

import ActiveNowRail from './components/ActiveNowRail';
import ArchivedEmptyState from './components/ArchivedEmptyState';
import ChatFilterTabs from './components/ChatFilterTabs';
import ChatListItem from './components/ChatListItem';

export default function MessagesScreen() {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<ChatFilter>(ChatFilter.All);

  const chats = filterChatsByCategory(CHATS, filter);

  return (
    <View className="flex-1 bg-cream">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + TAB_BAR_CLEARANCE,
        }}
      >
        <Animated.View entering={FadeInDown.duration(durations.headerIntro)}>
          <ScreenHeader
            title="Messages"
            actionIcon="edit"
            actionIconSize={18}
            className="px-5"
          />
        </Animated.View>

        <ActiveNowRail contacts={ACTIVE_NOW_CONTACTS} />

        <ChatFilterTabs active={filter} onChange={setFilter} />

        <View className="mt-4">
          {chats.map((chat, index) => (
            <ChatListItem key={`${filter}-${chat.id}`} chat={chat} index={index} />
          ))}
          {chats.length === 0 && <ArchivedEmptyState />}
        </View>
      </ScrollView>
    </View>
  );
}
