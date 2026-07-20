import { Text, View } from 'react-native';

import { NightlyRate } from '@/components';
import { Hotel } from '@/interfaces';

type HotelSummaryProps = {
  hotel: Hotel;
};

export function HotelSummary({ hotel }: HotelSummaryProps) {
  return (
    <View className="flex-row items-start justify-between">
      <View className="flex-1 pr-3">
        <Text className="font-jakarta-bold text-[19px] text-ink">{hotel.name}</Text>
        <Text className="mt-1 font-jakarta text-[13px] text-muted">
          {hotel.area}, {hotel.city}, {hotel.country}
        </Text>
      </View>
      <NightlyRate price={hotel.price} className="text-[18px]" />
    </View>
  );
}
