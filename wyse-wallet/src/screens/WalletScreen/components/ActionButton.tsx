import { Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Icon from '@/components/Icon';
import { ActionButtonProps } from './ActionButton.types';
import { colors } from '@/theme';

export default function ActionButton({ label, icon }: ActionButtonProps) {
  const pressed = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    transform: [{ scale: withTiming(pressed.value ? 0.96 : 1, { duration: 120 }) }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPressIn={() => (pressed.value = 1)} onPressOut={() => (pressed.value = 0)}>
        <View className="h-[56px] flex-row items-center justify-center rounded-[18px] bg-card">
          <Icon name={icon} size={16} color={colors.accentInk} strokeWidth={2} />
          <Text className="ml-2 font-medium text-[15px] text-ink">{label}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}
