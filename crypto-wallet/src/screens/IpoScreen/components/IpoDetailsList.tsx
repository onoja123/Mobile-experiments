import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import type { IpoDetail } from '@/interfaces/ipo.interface';
import { colors, liftIn } from '@/theme';

type IpoDetailsListProps = {
  details: IpoDetail[];
  baseDelay?: number;
};

export function IpoDetailsList({ details, baseDelay = 0 }: IpoDetailsListProps) {
  return (
    <View className="gap-2.5">
      {details.map((detail, index) => (
        <Animated.View
          key={detail.id}
          entering={liftIn(baseDelay + index * 70)}
          className="flex-row items-center rounded-[20px] bg-white px-4 py-3.5"
        >
          <View className="h-10 w-10 items-center justify-center rounded-full bg-accentSoft">
            <Feather
              name={detail.icon as keyof typeof Feather.glyphMap}
              size={17}
              color={colors.accent}
            />
          </View>
          <View className="ml-3.5 flex-1">
            <Text className="text-[12px] text-subtle">{detail.label}</Text>
            <Text className="mt-0.5 text-[14px] font-bold text-ink" numberOfLines={1}>
              {detail.value}
            </Text>
          </View>
        </Animated.View>
      ))}
    </View>
  );
}
