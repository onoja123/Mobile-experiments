import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { RatingBar } from '@/components';
import { Hotel } from '@/interfaces';
import { palette } from '@/theme';

import { RATING_BAR_BASE_DELAY_MS, RATING_BAR_STAGGER_MS } from '../hotelDetail.constants';

type RatingSummaryProps = {
  hotel: Hotel;
};

export function RatingSummary({ hotel }: RatingSummaryProps) {
  return (
    <>
      <Text className="mt-6 font-jakarta-semibold text-[15px] text-ink">Rating and reviews</Text>
      <View className="mt-3 flex-row items-center gap-1.5">
        <Ionicons name="star" size={16} color={palette.star} />
        <Text className="font-jakarta-bold text-[16px] text-ink">{hotel.rating}</Text>
        <Text className="font-jakarta text-[13px] text-muted">· {hotel.reviews} reviews</Text>
      </View>
      <View className="mt-4 gap-3">
        {hotel.categories.map((category, index) => (
          <RatingBar
            key={category.label}
            label={category.label}
            score={category.score}
            delay={RATING_BAR_BASE_DELAY_MS + index * RATING_BAR_STAGGER_MS}
          />
        ))}
      </View>
    </>
  );
}
