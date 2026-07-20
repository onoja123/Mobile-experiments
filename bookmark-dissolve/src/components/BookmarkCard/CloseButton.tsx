import { Pressable, View } from 'react-native';

import { colors } from '@/theme';

type CloseButtonProps = {
  onPress: () => void;
};

export function CloseButton({ onPress }: CloseButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={12}
      style={({ pressed }) => ({ opacity: pressed ? 0.35 : 1 })}>
      <View className="h-[15px] w-[15px] items-center justify-center">
        <View
          className="absolute h-[1.5px] w-[15px] rounded-full"
          style={{ backgroundColor: colors.closeIcon, transform: [{ rotate: '45deg' }] }}
        />
        <View
          className="absolute h-[1.5px] w-[15px] rounded-full"
          style={{ backgroundColor: colors.closeIcon, transform: [{ rotate: '-45deg' }] }}
        />
      </View>
    </Pressable>
  );
}
