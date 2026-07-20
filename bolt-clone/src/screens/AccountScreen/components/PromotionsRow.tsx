import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  CHEVRON_ROTATE_DURATION_MS,
  PROMO_COLLAPSE_DURATION_MS,
  PROMO_EXPAND_DURATION_MS,
} from '@/constants/animation';
import { colors } from '@/theme';

export default function PromotionsRow() {
  const [open, setOpen] = useState(false);
  const rotation = useSharedValue(0);

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const toggle = () => {
    rotation.value = withTiming(open ? 0 : 90, { duration: CHEVRON_ROTATE_DURATION_MS });
    setOpen(!open);
  };

  return (
    <View>
      <Pressable
        className="flex-row items-center py-3.5"
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        onPress={toggle}
      >
        <Ionicons name="pricetag-outline" size={24} color={colors.inkSoft} />
        <Text className="ml-4 flex-1 text-[17px] text-ink">Promotions</Text>
        <View className="mr-2 h-6 min-w-6 items-center justify-center rounded-full bg-brand px-1.5">
          <Text className="text-[12px] font-bold text-white">1</Text>
        </View>
        <Animated.View style={chevronStyle}>
          <Ionicons name="chevron-forward" size={20} color={colors.chevron} />
        </Animated.View>
      </Pressable>

      {open && (
        <Animated.View
          entering={FadeInDown.duration(PROMO_EXPAND_DURATION_MS)}
          exiting={FadeOutUp.duration(PROMO_COLLAPSE_DURATION_MS)}
          className="mb-3 flex-row items-center rounded-2xl bg-brand-soft p-4"
        >
          <View className="h-10 w-10 items-center justify-center rounded-full bg-brand">
            <Ionicons name="pricetag" size={18} color={colors.white} />
          </View>
          <View className="ml-3 flex-1">
            <Text className="text-[15px] font-bold text-ink">10% off 1 Scheduled Ride</Text>
            <Text className="mt-0.5 text-[13px] text-subtle">
              Applied automatically at checkout
            </Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}
