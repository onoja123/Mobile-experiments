import { Text, View } from 'react-native';

import { DetailStatProps } from './DetailStat.types';

export default function DetailStat({ label, value }: DetailStatProps) {
  return (
    <View className="flex-1">
      <Text className="font-sans text-[12px] text-smoke">{label}</Text>
      <Text className="mt-1 font-semi text-[13px] text-ink">{value}</Text>
    </View>
  );
}
