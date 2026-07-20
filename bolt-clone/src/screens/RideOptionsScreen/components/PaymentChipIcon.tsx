import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { colors } from '@/theme';

export default function PaymentChipIcon() {
  return (
    <View className="flex-row items-center rounded-full bg-surface p-[3px]">
      <View className="z-10 h-9 w-9 items-center justify-center rounded-full bg-white">
        <Ionicons name="person" size={16} color={colors.ink} />
      </View>
      <View className="-ml-2.5 h-9 w-9 items-center justify-center rounded-full bg-edge">
        <MaterialCommunityIcons name="briefcase" size={15} color={colors.inkSoft} />
      </View>
    </View>
  );
}
