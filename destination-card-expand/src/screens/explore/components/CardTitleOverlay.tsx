import React from 'react';
import { Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { colors, typography } from '@/theme';

export default function CardTitleOverlay({ title }: { title: string }) {
  return (
    <View className="absolute inset-x-0 bottom-0">
      <LinearGradient
        colors={['transparent', colors.scrim]}
        className="absolute inset-0"
      />
      <Text className="p-6 font-bold text-white" style={typography.cardTitle}>
        {title}
      </Text>
    </View>
  );
}
