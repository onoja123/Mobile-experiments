import { Image, Text, View } from 'react-native';

import CircleActionButton from '@/components/CircleActionButton';
import { FEED_CARD_HEIGHT, FEED_CARD_WIDTH } from '@/constants/layout';
import { FeedCardProps } from './FeedCard.types';

export default function FeedCard({ card }: FeedCardProps) {
  return (
    <View style={{ width: FEED_CARD_WIDTH }} className="mr-3">
      <Image
        source={{ uri: card.imageUrl }}
        style={{ height: FEED_CARD_HEIGHT }}
        className="w-full bg-mist"
        resizeMode="cover"
      />
      <View className="mt-3 flex-row items-center justify-between">
        <View className="flex-1 pr-3">
          <Text className="text-sm font-semibold text-ink">{card.title}</Text>
          <Text className="mt-0.5 text-xs text-smoke">{card.subtitle}</Text>
        </View>
        <CircleActionButton />
      </View>
    </View>
  );
}
