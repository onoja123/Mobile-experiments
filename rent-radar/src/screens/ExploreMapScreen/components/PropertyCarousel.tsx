import { ScrollView } from 'react-native';

import { CAROUSEL_CARD_GAP, CAROUSEL_CARD_WIDTH } from '@/constants/layout';
import PropertyCard from './PropertyCard';
import { PropertyCarouselProps } from './PropertyCarousel.types';

export default function PropertyCarousel({ properties, onCardPress }: PropertyCarouselProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CAROUSEL_CARD_WIDTH + CAROUSEL_CARD_GAP}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: 20, gap: CAROUSEL_CARD_GAP }}
    >
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onPress={() => onCardPress?.(property)}
        />
      ))}
    </ScrollView>
  );
}
