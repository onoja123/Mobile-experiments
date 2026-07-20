import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SCREEN_ENTER_MS } from '@/constants/animation';
import { ROUTES } from '@/constants/routes';
import { DESTINATIONS } from '@/data/destinations';
import { HOTELS, INITIAL_FAVORITE_HOTEL_IDS } from '@/data/hotels';
import { BottomTab } from '@/enums';
import { useFavorites } from '@/hooks/useFavorites';

import { BottomNav } from './components/BottomNav';
import { DestinationCard } from './components/DestinationCard';
import { FilterChipRow } from './components/FilterChipRow';
import { GreetingHeader } from './components/GreetingHeader';
import { HorizontalSection } from './components/HorizontalSection';
import { HotelCard } from './components/HotelCard';
import { SearchBarTrigger } from './components/SearchBarTrigger';
import { SearchSheet } from './components/SearchSheet';
import { HOTEL_FILTERS, SECTION_STAGGER_MS } from './home.constants';

export function HomeScreen() {
  const router = useRouter();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(HOTEL_FILTERS[0]);
  const [activeTab, setActiveTab] = useState(BottomTab.Home);
  const { isFavorite, toggleFavorite } = useFavorites(INITIAL_FAVORITE_HOTEL_IDS);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32">
        <Animated.View entering={FadeInDown.duration(SCREEN_ENTER_MS)} className="px-5 pt-2">
          <GreetingHeader />
          <SearchBarTrigger onPress={() => setSearchOpen(true)} />
        </Animated.View>

        <FilterChipRow
          filters={HOTEL_FILTERS}
          active={activeFilter}
          enterDelay={SECTION_STAGGER_MS}
          onSelect={setActiveFilter}
        />

        <HorizontalSection
          title="Recently explored"
          enterDelay={SECTION_STAGGER_MS * 2}
          gapClassName="gap-3"
        >
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </HorizontalSection>

        <HorizontalSection
          title="Popular hotels"
          enterDelay={SECTION_STAGGER_MS * 3}
          gapClassName="gap-4"
        >
          {HOTELS.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              favorite={isFavorite(hotel.id)}
              onToggleFavorite={() => toggleFavorite(hotel.id)}
              onPress={() => router.push(ROUTES.hotelDetail(hotel.id))}
            />
          ))}
        </HorizontalSection>
      </ScrollView>

      <BottomNav active={activeTab} onChange={setActiveTab} />

      <SearchSheet visible={isSearchOpen} onClose={() => setSearchOpen(false)} />
    </SafeAreaView>
  );
}
