import { useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, LinearTransition } from 'react-native-reanimated';

import { activitySections } from '@/data/activity';
import { ActivityFilter } from '@/enums/activityFilter.enum';
import ActivityRow from './ActivityRow';
import FilterChips from './FilterChips';

export default function ActivityTab() {
  const [filter, setFilter] = useState(ActivityFilter.All);

  const sections = activitySections
    .map((section) => ({
      ...section,
      items:
        filter === ActivityFilter.All
          ? section.items
          : section.items.filter((item) => item.kind === filter),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <View>
      <FilterChips active={filter} onChange={setFilter} />
      <View className="px-5">
        {sections.map((section) => (
          <Animated.View
            key={section.title}
            layout={LinearTransition.springify().damping(18)}
            className="mt-5"
          >
            <Text className="font-heading text-[16px] text-ink">{section.title}</Text>
            {section.items.map((item, index) => (
              <ActivityRow key={item.id} item={item} index={index} />
            ))}
          </Animated.View>
        ))}
        {sections.length === 0 && (
          <Animated.View entering={FadeIn.duration(240)} className="items-center py-14">
            <Text className="font-sans text-[14px] text-smoke">
              No {filter.toLowerCase()} activity
            </Text>
          </Animated.View>
        )}
      </View>
    </View>
  );
}
