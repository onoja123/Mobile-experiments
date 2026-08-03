import { View } from 'react-native';

import { ALLOCATION_BAR_HEIGHT } from '@/constants/layout';
import { AllocationBarProps } from '../AssetsScreen.types';

export default function AllocationBar({ positions }: AllocationBarProps) {
  return (
    <View className="flex-row gap-1 overflow-hidden" style={{ height: ALLOCATION_BAR_HEIGHT }}>
      {positions.map((position) => (
        <View
          key={position.coin.id}
          className="rounded-full"
          style={{ flex: position.allocation, backgroundColor: position.coin.badgeColor }}
        />
      ))}
    </View>
  );
}
