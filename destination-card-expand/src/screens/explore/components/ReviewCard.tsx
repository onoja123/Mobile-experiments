import React from 'react';
import { Text, View } from 'react-native';

import Avatar from '@/components/Avatar';
import { avatarSizes, REVIEW_CARD_WIDTH } from '@/constants/layout';
import { typography } from '@/theme';
import type { DestinationReview } from '@/types';

export default function ReviewCard({ review }: { review: DestinationReview }) {
  return (
    <View
      className="rounded-3xl border border-black/5 bg-white p-4"
      style={{ width: REVIEW_CARD_WIDTH }}
    >
      <View className="flex-row items-center gap-2.5">
        <Avatar uri={review.avatar} size={avatarSizes.review} />
        <Text className="font-semibold text-ink" style={typography.emphasis}>
          {review.name}
        </Text>
      </View>
      <Text
        className="mt-3 font-sans text-muted"
        style={typography.reviewText}
        numberOfLines={3}
      >
        {review.text}
      </Text>
    </View>
  );
}
