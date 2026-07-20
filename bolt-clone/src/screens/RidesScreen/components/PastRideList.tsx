import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SEGMENT_FADE_DURATION_MS } from '@/constants/animation';
import type { PastRideListProps } from '@/interfaces';
import { colors } from '@/theme';

export default function PastRideList({ rides }: PastRideListProps) {
  return (
    <Animated.View entering={FadeInDown.duration(SEGMENT_FADE_DURATION_MS)} className="mt-4">
      {rides.map((ride) => (
        <Pressable
          key={ride.completedAt}
          className="flex-row items-center py-3"
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
          <View className="h-12 w-12 items-center justify-center rounded-xl bg-field">
            <Ionicons name="car-outline" size={24} color={colors.inkSoft} />
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-[16px] text-ink" numberOfLines={1}>
              {ride.destination}
            </Text>
            <Text className="mt-0.5 text-[14px] text-muted">{ride.completedAt}</Text>
          </View>
          <Text className="ml-3 text-[15px] font-semibold text-ink">{ride.fare}</Text>
        </Pressable>
      ))}
    </Animated.View>
  );
}
