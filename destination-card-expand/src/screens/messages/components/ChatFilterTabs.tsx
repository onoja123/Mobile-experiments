import React from 'react';
import { Pressable, Text } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { durations } from '@/constants/animation';
import { ChatFilter } from '@/enums';
import { typography } from '@/theme';

const FILTERS = Object.values(ChatFilter);

export default function ChatFilterTabs({
  active,
  onChange,
}: {
  active: ChatFilter;
  onChange: (filter: ChatFilter) => void;
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(durations.filtersDelay).duration(
        durations.filtersIntro,
      )}
      className="mt-6 flex-row gap-2.5 px-5"
    >
      {FILTERS.map((filter) => (
        <Pressable
          key={filter}
          onPress={() => onChange(filter)}
          className={`h-10 items-center justify-center rounded-full px-5 ${
            active === filter ? 'bg-pill' : 'border border-black/10 bg-white'
          }`}
        >
          <Text
            className={`font-semibold ${
              active === filter ? 'text-white' : 'text-ink'
            }`}
            style={typography.chip}
          >
            {filter}
          </Text>
        </Pressable>
      ))}
    </Animated.View>
  );
}
