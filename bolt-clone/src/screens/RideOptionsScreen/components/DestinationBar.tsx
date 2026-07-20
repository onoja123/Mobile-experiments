import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  DESTINATION_BAR_HEIGHT,
  DESTINATION_BAR_RADIUS,
  DESTINATION_BAR_TOP_GAP,
} from '@/constants/panelLayout';
import { PICKUP_LABEL } from '@/data/tripRoute';
import type { DestinationBarProps } from '@/interfaces';
import { colors } from '@/theme';

export default function DestinationBar({ destination, onClose }: DestinationBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-3 right-3 flex-row items-center bg-white px-4 shadow-md"
      style={{
        top: insets.top + DESTINATION_BAR_TOP_GAP,
        height: DESTINATION_BAR_HEIGHT,
        borderRadius: DESTINATION_BAR_RADIUS,
      }}
    >
      <Pressable onPress={onClose} hitSlop={10}>
        <Ionicons name="close" size={24} color={colors.ink} />
      </Pressable>
      <View className="mx-1.5 flex-1 flex-row items-center justify-center">
        <Text
          className="shrink text-[15px] font-bold"
          numberOfLines={1}
          style={{ color: colors.boltGreen }}
        >
          {PICKUP_LABEL}
        </Text>
        <MaterialCommunityIcons
          name="chevron-double-right"
          size={15}
          color={colors.subtle}
          style={{ marginHorizontal: 2 }}
        />
        <Text className="shrink text-[15px] font-bold text-ink" numberOfLines={1}>
          {destination}
        </Text>
      </View>
      <MaterialCommunityIcons name="pencil" size={22} color={colors.ink} />
    </View>
  );
}
