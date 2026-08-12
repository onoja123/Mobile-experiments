import { Text, View } from 'react-native';

import PressableScale from '@/components/PressableScale';
import { ActivityFilter } from '@/enums/activityFilter.enum';
import { FilterChipsProps } from './FilterChips.types';

const FILTERS = [
  ActivityFilter.All,
  ActivityFilter.Received,
  ActivityFilter.Sent,
  ActivityFilter.Swapped,
];

export default function FilterChips({ active, onChange }: FilterChipsProps) {
  return (
    <View className="mt-5 flex-row gap-2 px-5">
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <PressableScale key={filter} scaleTo={0.94} onPress={() => onChange(filter)}>
            <View
              className={`rounded-full px-3.5 py-2 ${isActive ? 'bg-accent' : 'border border-line'}`}
            >
              <Text
                className={`font-medium text-[13px] ${isActive ? 'text-on-accent' : 'text-smoke'}`}
              >
                {filter}
              </Text>
            </View>
          </PressableScale>
        );
      })}
    </View>
  );
}
