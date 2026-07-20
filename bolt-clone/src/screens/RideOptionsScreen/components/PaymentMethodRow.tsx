import { Pressable, Text, View } from 'react-native';
import type { PaymentMethodRowProps } from '@/interfaces';
import { colors } from '@/theme';

export default function PaymentMethodRow({ label, icon, selected, onPress }: PaymentMethodRowProps) {
  return (
    <Pressable className="flex-row items-center border-b border-surface py-4" onPress={onPress}>
      <View className="w-10 items-center">{icon}</View>
      <Text className="ml-4 flex-1 text-[19px] text-ink">{label}</Text>
      {selected ? (
        <View
          className="h-[26px] w-[26px] items-center justify-center rounded-full"
          style={{ backgroundColor: colors.boltGreen }}
        >
          <View className="h-[18px] w-[18px] items-center justify-center rounded-full bg-white">
            <View className="h-3 w-3 rounded-full" style={{ backgroundColor: colors.boltGreen }} />
          </View>
        </View>
      ) : (
        <View
          className="h-[26px] w-[26px] rounded-full"
          style={{ borderWidth: 1.5, borderColor: colors.outline }}
        />
      )}
    </Pressable>
  );
}
