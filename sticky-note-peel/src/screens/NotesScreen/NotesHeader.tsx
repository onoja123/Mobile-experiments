import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { NOTES_SCREEN_TITLE } from '@/constants/copy';
import { TITLE_COLLAPSE } from '@/constants/layout';
import { useChromeDimStyle } from '@/hooks/useChromeDimStyle';
import { colors } from '@/theme';
import type { NotesHeaderProps } from './NotesScreen.types';

export default function NotesHeader({ scrollY, dim }: NotesHeaderProps) {
  const chromeStyle = useChromeDimStyle(dim);

  const smallTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, TITLE_COLLAPSE.smallTitleRange, [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          TITLE_COLLAPSE.smallTitleRange,
          [TITLE_COLLAPSE.titleShift, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <Animated.View style={chromeStyle}>
      <View className="flex-row items-center justify-between px-5 py-2">
        <Animated.View
          pointerEvents="none"
          style={[
            { position: 'absolute', left: 0, right: 0, alignItems: 'center' },
            smallTitleStyle,
          ]}
        >
          <Text className="font-q600 text-[16px] text-white">{NOTES_SCREEN_TITLE}</Text>
        </Animated.View>
        <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-2xl bg-surface">
          <Feather name="menu" size={18} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity className="h-11 w-11 items-center justify-center">
          <Feather name="search" size={21} color={colors.white} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
