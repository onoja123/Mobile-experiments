import { Image, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { COLLECTION_CARD_HEIGHT, TITLE_PARALLAX_DISTANCE } from '@/constants/layout';
import { CollectionCardProps } from './CollectionCard.types';

export default function CollectionCard({ collection, index, scrollY }: CollectionCardProps) {
  const cardTop = index * COLLECTION_CARD_HEIGHT;

  const titleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [cardTop - COLLECTION_CARD_HEIGHT, cardTop + COLLECTION_CARD_HEIGHT],
          [TITLE_PARALLAX_DISTANCE, -TITLE_PARALLAX_DISTANCE],
        ),
      },
    ],
  }));

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [cardTop - COLLECTION_CARD_HEIGHT, cardTop + COLLECTION_CARD_HEIGHT],
          [-TITLE_PARALLAX_DISTANCE / 2, TITLE_PARALLAX_DISTANCE / 2],
        ),
      },
    ],
  }));

  return (
    <View style={{ height: COLLECTION_CARD_HEIGHT }} className="overflow-hidden bg-ink">
      <Animated.View style={imageStyle} className="absolute inset-0">
        <Image
          source={{ uri: collection.imageUrl }}
          style={{ height: COLLECTION_CARD_HEIGHT + TITLE_PARALLAX_DISTANCE, marginTop: -TITLE_PARALLAX_DISTANCE / 2 }}
          className="w-full"
          resizeMode="cover"
        />
      </Animated.View>
      <Animated.View style={titleStyle} className="flex-1 justify-end px-5 pb-6">
        <Text className="text-[34px] font-bold leading-[38px] tracking-tight text-white">
          {collection.title}
        </Text>
      </Animated.View>
    </View>
  );
}
