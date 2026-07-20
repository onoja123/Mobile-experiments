import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import Collapsible from '@/components/Collapsible';
import {
  HEADING_SECTION_HEIGHT,
  PROMO_SECTION_HEIGHT,
  SHORTCUT_CARDS_SECTION_HEIGHT,
} from '@/constants/homeSheet';
import { SEARCH_BAR_HEIGHT } from '@/constants/layout';
import { HOME_RECENT_DESTINATIONS } from '@/data/recentDestinations';
import { SERVICE_SHORTCUTS } from '@/data/serviceShortcuts';
import type { HomeSheetContentProps } from '@/interfaces';
import { colors } from '@/theme';
import PromoBanner from './PromoBanner';
import ServiceShortcutCard from './ServiceShortcutCard';

export default function HomeSheetContent({ collapseProgress, onSearchPress }: HomeSheetContentProps) {
  return (
    <View className="flex-1 px-4">
      <Collapsible fullHeight={PROMO_SECTION_HEIGHT} progress={collapseProgress}>
        <PromoBanner />
      </Collapsible>

      <Collapsible fullHeight={HEADING_SECTION_HEIGHT} progress={collapseProgress}>
        <Text className="text-[27px] font-extrabold tracking-tight text-ink">
          Let's get you on your way.
        </Text>
      </Collapsible>

      <Collapsible fullHeight={SHORTCUT_CARDS_SECTION_HEIGHT} progress={collapseProgress}>
        <View className="flex-row gap-3 pt-2.5">
          {SERVICE_SHORTCUTS.map((shortcut) => (
            <ServiceShortcutCard key={shortcut.title} shortcut={shortcut} />
          ))}
        </View>
      </Collapsible>

      <Pressable
        className="flex-row items-center rounded-2xl bg-field pl-4 pr-1.5"
        style={{ height: SEARCH_BAR_HEIGHT }}
        onPress={onSearchPress}
      >
        <Ionicons name="search" size={22} color={colors.ink} />
        <Text className="ml-3 flex-1 text-[19px] font-bold text-ink">Where to?</Text>
        <View className="h-10 flex-row items-center gap-1.5 rounded-xl bg-white px-3">
          <MaterialCommunityIcons name="calendar-clock-outline" size={19} color={colors.ink} />
          <Text className="text-[15px] font-semibold text-ink">Later</Text>
        </View>
      </Pressable>

      <View className="mt-3">
        {HOME_RECENT_DESTINATIONS.map((destination) => (
          <View key={destination.title} className="flex-row items-center py-2.5">
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-field">
              <Ionicons name="time-outline" size={24} color={colors.inkSoft} />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-[17px] text-ink" numberOfLines={1}>
                {destination.title}
              </Text>
              <Text className="mt-0.5 text-[14px] text-muted" numberOfLines={1}>
                {destination.subtitle}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
