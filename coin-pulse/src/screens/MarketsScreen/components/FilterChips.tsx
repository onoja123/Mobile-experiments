import { Pressable, Text, View } from 'react-native';

import { MarketFilter } from '@/enums/marketFilter.enum';
import { FilterChipsProps } from '../MarketsScreen.types';

const FILTERS = Object.values(MarketFilter);

export default function FilterChips({ active, onSelect }: FilterChipsProps) {
  return (
    <View className="flex-row gap-2">
      {FILTERS.map((filter) => {
        const selected = filter === active;
        return (
          <Pressable
            key={filter}
            className={`h-8 items-center justify-center rounded-full px-3.5 active:opacity-70 ${
              selected ? 'bg-ink' : 'border border-mist'
            }`}
            onPress={() => onSelect(filter)}
          >
            <Text
              className={`text-[12px] ${selected ? 'font-semi text-white' : 'font-sans text-smoke'}`}
            >
              {filter}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
