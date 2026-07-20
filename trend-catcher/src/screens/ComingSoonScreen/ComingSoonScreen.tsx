import { Text, View } from 'react-native';

import { ComingSoonScreenProps } from './ComingSoonScreen.types';

export default function ComingSoonScreen({ title }: ComingSoonScreenProps) {
  return (
    <View className="flex-1 items-center justify-center px-10">
      <Text className="text-[34px] font-bold tracking-tight text-ink">{title.toLowerCase()}</Text>
      <Text className="mt-2 text-center text-sm text-smoke">Nothing here yet — check back soon.</Text>
    </View>
  );
}
