import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';
import { PressableScale } from '../PressableScale';
import type { FlowHeaderProps } from './FlowHeader.types';

export function FlowHeader({ title, subtitle, onBack }: FlowHeaderProps) {
  return (
    <View className="flex-row items-center px-5 pb-1 pt-2">
      <PressableScale
        scaleTo={0.92}
        onPress={onBack}
        className="h-11 w-11 items-center justify-center rounded-full bg-white"
        accessibilityLabel="Back"
      >
        <Feather name="chevron-left" size={22} color={colors.ink} />
      </PressableScale>
      <View className="flex-1 items-center">
        <Text className="text-[17px] font-bold text-ink" maxFontSizeMultiplier={1.4}>
          {title}
        </Text>
        <Text className="text-[12px] text-subtle" maxFontSizeMultiplier={1.4}>
          {subtitle}
        </Text>
      </View>
      <View className="h-11 w-11" />
    </View>
  );
}
