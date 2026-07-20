import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SEGMENT_FADE_DURATION_MS } from '@/constants/animation';
import { SCHEDULED_RIDE } from '@/data/scheduledRide';
import { colors } from '@/theme';

export default function UpcomingRides() {
  return (
    <Animated.View entering={FadeInDown.duration(SEGMENT_FADE_DURATION_MS)}>
      <View className="mt-6 flex-row items-center rounded-2xl bg-brand-soft p-4">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-brand">
          <MaterialCommunityIcons name="calendar-clock-outline" size={22} color={colors.white} />
        </View>
        <View className="ml-4 flex-1">
          <Text className="text-[17px] font-bold text-ink">Scheduled ride</Text>
          <Text className="mt-0.5 text-[14px] text-subtle">{SCHEDULED_RIDE.summary}</Text>
        </View>
        <View className="rounded-full bg-white px-2.5 py-1">
          <Text className="text-[13px] font-bold text-brand">{SCHEDULED_RIDE.discountLabel}</Text>
        </View>
      </View>
      <Text className="mt-6 text-center text-[14px] text-muted">
        Book ahead and lock in your fare.
      </Text>
    </Animated.View>
  );
}
