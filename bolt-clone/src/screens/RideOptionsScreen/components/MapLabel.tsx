import { Text, View } from 'react-native';
import type { MapLabelProps } from '@/interfaces';
import { colors } from '@/theme';

export default function MapLabel({ title, value, tail }: MapLabelProps) {
  return (
    <View>
      <View className="rounded-[10px] px-3 py-1.5" style={{ backgroundColor: colors.labelGreen }}>
        <Text className="text-[13px] text-white/85">{title}</Text>
        <Text className="text-[19px] font-bold text-white">{value}</Text>
      </View>
      {tail && (
        <View
          className="-mt-1.5 ml-5 h-3 w-3"
          style={{ backgroundColor: colors.labelGreen, transform: [{ rotate: '45deg' }] }}
        />
      )}
    </View>
  );
}
