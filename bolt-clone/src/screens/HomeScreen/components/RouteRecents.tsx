import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { RECENT_DESTINATIONS } from '@/data/recentDestinations';
import type { RouteRecentsProps } from '@/interfaces';
import { colors } from '@/theme';

export default function RouteRecents({ onSelect }: RouteRecentsProps) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" className="flex-1 px-4">
      {RECENT_DESTINATIONS.map((destination) => (
        <Pressable
          key={destination.title}
          className="flex-row items-center border-b border-surface py-3.5"
          onPress={() => onSelect?.(destination.title)}
        >
          <Ionicons name="time-outline" size={26} color={colors.muted} />
          <View className="ml-4 flex-1 pr-3">
            <Text className="text-[18px] text-ink" numberOfLines={1}>
              {destination.title}
            </Text>
            <Text className="mt-0.5 text-[15px] text-muted" numberOfLines={1}>
              {destination.subtitle}
            </Text>
          </View>
          <Text className="text-[15px] text-muted">{destination.distance}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
