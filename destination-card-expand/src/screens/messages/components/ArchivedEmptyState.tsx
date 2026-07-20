import React from 'react';
import { Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { durations } from '@/constants/animation';
import { colors, typography } from '@/theme';

export default function ArchivedEmptyState() {
  return (
    <Animated.View
      entering={FadeInDown.delay(durations.listIntroDelay).duration(
        durations.listIntro,
      )}
      className="items-center gap-3 px-6 py-16"
    >
      <View className="h-16 w-16 items-center justify-center rounded-full bg-white">
        <Feather name="archive" size={24} color={colors.muted} />
      </View>
      <Text className="font-semibold text-muted" style={typography.callout}>
        No archived chats yet
      </Text>
    </Animated.View>
  );
}
