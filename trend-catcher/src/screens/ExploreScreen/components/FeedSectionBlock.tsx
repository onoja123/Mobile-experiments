import { ScrollView, Text, View } from 'react-native';

import { FeedSectionBlockProps } from './FeedSectionBlock.types';
import FeedCard from './FeedCard';

export default function FeedSectionBlock({ section }: FeedSectionBlockProps) {
  return (
    <View className="mt-7">
      <Text className="px-5 text-[34px] font-bold leading-[38px] tracking-tight text-ink">
        {section.headline}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-5 pt-4"
        decelerationRate="fast"
        snapToAlignment="start"
      >
        {section.cards.map((card) => (
          <FeedCard key={card.id} card={card} />
        ))}
      </ScrollView>
    </View>
  );
}
