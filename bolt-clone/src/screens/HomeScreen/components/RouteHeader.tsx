import { Feather, Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SEARCH_FOCUS_DELAY_MS } from '@/constants/animation';
import { ROUTE_HEADER_CONTENT_HEIGHT } from '@/constants/layout';
import { PICKUP_LABEL } from '@/data/tripRoute';
import type { RouteHeaderProps } from '@/interfaces';
import { colors } from '@/theme';

export default function RouteHeader({ progress, active, onClose }: RouteHeaderProps) {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (active) {
      const t = setTimeout(() => inputRef.current?.focus(), SEARCH_FOCUS_DELAY_MS);
      return () => clearTimeout(t);
    }
    inputRef.current?.blur();
  }, [active]);

  const slideStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: (progress.value - 1) * (insets.top + ROUTE_HEADER_CONTENT_HEIGHT) },
    ],
  }));

  return (
    <Animated.View
      className="absolute left-0 right-0 top-0 z-30 bg-white"
      style={[{ paddingTop: insets.top }, slideStyle]}
      pointerEvents={active ? 'auto' : 'none'}
    >
      <View className="h-11 flex-row items-center px-4">
        <Pressable onPress={onClose} hitSlop={10}>
          <Ionicons name="close" size={28} color={colors.ink} />
        </Pressable>
        <Text className="flex-1 pr-7 text-center text-[20px] font-bold text-ink">Route</Text>
      </View>

      <View className="flex-row px-4 pb-3">
        <View className="flex-1">
          <View className="h-[52px] flex-row items-center rounded-xl bg-field px-4">
            <View className="h-6 w-6 items-center justify-center rounded-full bg-brand-soft">
              <View className="h-3.5 w-3.5 rounded-full bg-brand-deep" />
            </View>
            <Text className="ml-4 text-[18px] text-ink" numberOfLines={1}>
              {PICKUP_LABEL}
            </Text>
          </View>

          <View
            className="mt-2 h-[54px] flex-row items-center rounded-xl bg-white pl-3 pr-2"
            style={{ borderWidth: 1.5, borderColor: colors.boltGreen }}
          >
            <Ionicons name="search" size={22} color={colors.ink} />
            <TextInput
              ref={inputRef}
              className="ml-2 flex-1 text-[18px] text-ink"
              placeholder="Dropoff location"
              placeholderTextColor={colors.muted}
              returnKeyType="done"
            />
            <View className="h-10 w-10 items-center justify-center rounded-lg bg-field">
              <Ionicons name="location" size={20} color={colors.pinGreen} />
            </View>
          </View>
        </View>

        <View className="ml-2 w-9 items-center">
          <View className="h-[52px] items-center justify-center">
            <Feather name="plus" size={26} color={colors.ink} />
          </View>
          <View className="mt-2 h-[54px] items-center justify-center">
            <Ionicons name="swap-vertical" size={24} color={colors.ink} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
