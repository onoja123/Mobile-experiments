import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PressableScale, PriceRangeSlider, Stepper } from '@/components';
import { MIN_BOTTOM_INSET } from '@/constants/layout';
import { PropertyType } from '@/enums';
import { palette } from '@/theme';

import { SEARCH_DEFAULTS, SHEET_TOP_OFFSET } from '../home.constants';
import { DateRangeRow } from './DateRangeRow';
import { FieldLabel } from './FieldLabel';
import { LocationField } from './LocationField';
import { PriceBoundsRow } from './PriceBoundsRow';
import { PropertyTypeSelector } from './PropertyTypeSelector';

type SearchSheetProps = {
  visible: boolean;
  onClose: () => void;
};

export function SearchSheet({ visible, onClose }: SearchSheetProps) {
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState(SEARCH_DEFAULTS.location);
  const [adults, setAdults] = useState(SEARCH_DEFAULTS.adults);
  const [children, setChildren] = useState(SEARCH_DEFAULTS.children);
  const [minPrice, setMinPrice] = useState(SEARCH_DEFAULTS.minPrice);
  const [maxPrice, setMaxPrice] = useState(SEARCH_DEFAULTS.maxPrice);
  const [propertyType, setPropertyType] = useState<PropertyType>(SEARCH_DEFAULTS.propertyType);
  const [sliderKey, setSliderKey] = useState(0);

  const resetFilters = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLocation(SEARCH_DEFAULTS.location);
    setAdults(SEARCH_DEFAULTS.adults);
    setChildren(SEARCH_DEFAULTS.children);
    setMinPrice(SEARCH_DEFAULTS.minPrice);
    setMaxPrice(SEARCH_DEFAULTS.maxPrice);
    setPropertyType(SEARCH_DEFAULTS.propertyType);
    setSliderKey((key) => key + 1);
  };

  const submitSearch = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable className="flex-1 bg-black/30" onPress={onClose} />

      <View
        className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-white px-5"
        style={{
          top: insets.top + SHEET_TOP_OFFSET,
          paddingBottom: Math.max(insets.bottom, MIN_BOTTOM_INSET),
        }}
      >
        <View className="h-14 items-center justify-center">
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
          <DateRangeRow dates={[SEARCH_DEFAULTS.checkIn, SEARCH_DEFAULTS.checkOut]} />

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
          <PriceRangeSlider
            key={sliderKey}
            initialLow={minPrice}
            initialHigh={maxPrice}
            onChange={(low, high) => {
              setMinPrice(low);
              setMaxPrice(high);
            }}
          />
          <PriceBoundsRow low={minPrice} high={maxPrice} />

          <PropertyTypeSelector selected={propertyType} onSelect={setPropertyType} />

          <View className="mt-7 flex-row gap-3">
            <PressableScale
              className="h-[52px] flex-[0.8] items-center justify-center rounded-full border border-line bg-white"
              onPress={resetFilters}
            >
              <Text className="font-jakarta-semibold text-[14px] text-ink">Reset</Text>
            </PressableScale>
            <PressableScale
              className="h-[52px] flex-1 items-center justify-center rounded-full bg-pill"
              onPress={submitSearch}
            >
              <Text className="font-jakarta-semibold text-[14px] text-white">Search</Text>
            </PressableScale>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
