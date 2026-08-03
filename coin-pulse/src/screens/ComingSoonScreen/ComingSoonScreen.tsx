import { Text, View } from 'react-native';

import { ComingSoonScreenProps } from './ComingSoonScreen.types';

export default function ComingSoonScreen({ title }: ComingSoonScreenProps) {
  return (
    <View className="flex-1 items-center justify-center bg-paper">
      <Text className="text-lg font-strong text-ink">{title}</Text>
      <Text className="font-sans mt-1 text-[13px] text-smoke">Still on the workbench</Text>
    </View>
  );
}
