import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { colors } from '@/theme';

export default function PromoBanner() {
  return (
    <View className="h-[82px] flex-row items-center rounded-2xl bg-brand-soft px-4">
      <View className="h-12 w-12 items-center justify-center rounded-full bg-brand">
        <Ionicons name="pricetag" size={20} color={colors.white} />
      </View>
      <View className="ml-4 flex-1">
        <Text className="text-[17px] font-bold text-ink">10% off 1 Scheduled Ride</Text>
        <Text className="mt-0.5 text-[15px] text-subtle">View details</Text>
      </View>
      <Pressable hitSlop={8}>
        <Ionicons name="close" size={22} color={colors.inkSoft} />
      </Pressable>
    </View>
  );
}
