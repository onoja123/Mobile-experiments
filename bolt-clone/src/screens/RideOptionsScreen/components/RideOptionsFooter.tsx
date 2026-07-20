import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PAYMENT_METHOD_LABELS } from '@/constants/paymentMethodLabels';
import type { RideOptionsFooterProps } from '@/interfaces';
import { colors } from '@/theme';
import PaymentChipIcon from './PaymentChipIcon';

export default function RideOptionsFooter({ method, onOpenPaymentSheet }: RideOptionsFooterProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="px-4 pt-2" style={{ paddingBottom: insets.bottom + 8 }}>
      <Pressable
        className="flex-row items-center self-start rounded-full py-1 pr-2"
        onPress={onOpenPaymentSheet}
        hitSlop={8}
      >
        <PaymentChipIcon />
        <Text className="ml-2.5 text-[18px] font-semibold text-ink">
          {PAYMENT_METHOD_LABELS[method]}
        </Text>
        <Ionicons name="chevron-down" size={17} color={colors.inkSoft} style={{ marginLeft: 4 }} />
      </Pressable>

      <View className="mt-2.5 flex-row items-center" style={{ gap: 12 }}>
        <Pressable
          className="h-[60px] flex-1 items-center justify-center rounded-full"
          style={{ backgroundColor: colors.boltGreen }}
        >
          <Text className="text-[21px] font-bold text-white">Continue</Text>
        </Pressable>
        <Pressable
          className="h-[60px] w-[60px] items-center justify-center rounded-full"
          style={{ backgroundColor: colors.boltGreen }}
        >
          <MaterialCommunityIcons name="calendar-clock-outline" size={27} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}
