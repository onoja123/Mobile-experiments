import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { PressableScale, PriceRangeSlider, Stepper, usePriceRange } from '@/components';
import { MIN_BOTTOM_INSET } from '@/constants/layout';
import { HOTELS } from '@/data/hotels';
import { PropertyType } from '@/enums';
import { formatUsDate } from '@/helpers/formatUsDate';
import { parseUsDate } from '@/helpers/parseUsDate';
import { palette } from '@/theme';

import { SEARCH_DEFAULTS, SEARCH_LATENCY_MS } from '../home.constants';
import { DateRangeRow } from './DateRangeRow';
import { FieldLabel } from './FieldLabel';
import { LocationField } from './LocationField';
import { PriceBoundsRow } from './PriceBoundsRow';
import { PropertyTypeSelector } from './PropertyTypeSelector';
import { SearchButton } from './SearchButton';

type SearchSheetProps = {
  height: number;
  bottomInset: number;
  onClose: () => void;
};

export function SearchSheet({ height, bottomInset, onClose }: SearchSheetProps) {
  const [location, setLocation] = useState(SEARCH_DEFAULTS.location);
  const [adults, setAdults] = useState(SEARCH_DEFAULTS.adults);
  const [children, setChildren] = useState(SEARCH_DEFAULTS.children);
  const [propertyType, setPropertyType] = useState<PropertyType>(SEARCH_DEFAULTS.propertyType);
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>(() => ({
    start: parseUsDate(SEARCH_DEFAULTS.checkIn),
    end: parseUsDate(SEARCH_DEFAULTS.checkOut),
  }));
  const range = usePriceRange({
    initialLow: SEARCH_DEFAULTS.minPrice,
    initialHigh: SEARCH_DEFAULTS.maxPrice,
  });

  const resetFilters = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLocation(SEARCH_DEFAULTS.location);
    setAdults(SEARCH_DEFAULTS.adults);
    setChildren(SEARCH_DEFAULTS.children);
    setPropertyType(SEARCH_DEFAULTS.propertyType);
    setDateRange({
      start: parseUsDate(SEARCH_DEFAULTS.checkIn),
      end: parseUsDate(SEARCH_DEFAULTS.checkOut),
    });
    range.reset();
  };

  const runSearch = async () => {
    await new Promise((resolve) => setTimeout(resolve, SEARCH_LATENCY_MS));
    const town = location.split(',')[0].trim();
    const dates =
      dateRange.start && dateRange.end
        ? `${formatUsDate(dateRange.start).slice(0, 5)} – ${formatUsDate(dateRange.end).slice(0, 5)}`
        : 'Any dates';
    return {
      title: `${HOTELS.length} stays found`,
      subtitle: `${town} · ${dates} · ${adults + children} guests`,
    };
  };

  return (
    <View
      className="px-5"
      style={{ height, paddingBottom: Math.max(bottomInset, MIN_BOTTOM_INSET) }}
    >
      <View className="h-12 items-center justify-center">
        <Text className="font-jakarta-semibold text-[15px] text-ink">Search places</Text>
        <Pressable hitSlop={10} className="absolute right-0" onPress={onClose}>
          <Ionicons name="close" size={22} color={palette.ink} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-4">
        <Text className="mt-1 font-jakarta-bold text-[20px] text-ink">
          Your stay is just a tap away
        </Text>
        <Text className="mt-1 font-jakarta text-[13px] text-muted">
          Set your travel preferences to see tailored stays
        </Text>

        <FieldLabel className="mt-6">Location</FieldLabel>
        <LocationField value={location} onChangeText={setLocation} />

        <FieldLabel className="mt-5">Dates</FieldLabel>
        <DateRangeRow
          start={dateRange.start}
          end={dateRange.end}
          onChangeRange={(start, end) => setDateRange({ start, end })}
        />

        <View className="mt-5 flex-row gap-3">
          <View className="flex-1">
            <FieldLabel>Adults</FieldLabel>
            <Stepper value={adults} min={1} onChange={setAdults} />
          </View>
          <View className="flex-1">
            <FieldLabel>Children</FieldLabel>
            <Stepper value={children} onChange={setChildren} />
          </View>
        </View>

        <FieldLabel className="mt-6">Price range</FieldLabel>
        <PriceRangeSlider range={range} />
        <PriceBoundsRow
          lowDisplay={range.lowDisplay}
          highDisplay={range.highDisplay}
          initialLow={SEARCH_DEFAULTS.minPrice}
          initialHigh={SEARCH_DEFAULTS.maxPrice}
        />

        <PropertyTypeSelector selected={propertyType} onSelect={setPropertyType} />

        <View className="mt-7 flex-row gap-3">
          <PressableScale
            className="h-[52px] flex-[0.8] items-center justify-center rounded-full border border-line bg-white"
            onPress={resetFilters}
          >
            <Text className="font-jakarta-semibold text-[14px] text-ink">Reset</Text>
          </PressableScale>
          <SearchButton search={runSearch} onComplete={onClose} />
        </View>
      </ScrollView>
    </View>
  );
}
