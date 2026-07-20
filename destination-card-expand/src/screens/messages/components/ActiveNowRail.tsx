import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import Avatar from '@/components/Avatar';
import { durations } from '@/constants/animation';
import { avatarSizes, presenceDotSizes } from '@/constants/layout';
import { typography } from '@/theme';
import type { ActiveContact } from '@/types';

import PresenceDot from './PresenceDot';

export default function ActiveNowRail({
  contacts,
}: {
  contacts: ActiveContact[];
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(durations.activeNowDelay).duration(
        durations.activeNowIntro,
      )}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-7"
        contentContainerStyle={{ paddingHorizontal: 24, gap: 18 }}
      >
        {contacts.map((contact) => (
          <View key={contact.name} className="items-center gap-2">
            <View>
              <Avatar uri={contact.avatar} size={avatarSizes.activeNow} />
              <PresenceDot size={presenceDotSizes.activeNow} />
            </View>
            <Text className="font-semibold text-ink" style={typography.caption}>
              {contact.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
}
