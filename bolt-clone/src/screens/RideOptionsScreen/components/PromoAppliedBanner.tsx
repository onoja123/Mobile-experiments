import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { colors } from '@/theme';

export default function PromoAppliedBanner() {
  return (
    <View className="rounded-t-3xl pb-8" style={{ backgroundColor: colors.promoViolet }}>
      <View className="h-12 flex-row items-center justify-center">
        <Ionicons name="checkmark" size={18} color={colors.white} />
        <Text className="ml-2 text-[17px] font-semibold text-white">5% promo applied</Text>
      </View>
    </View>
  );
}
