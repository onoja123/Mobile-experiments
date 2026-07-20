import { ScrollView, Share, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { SCREEN_ENTER_MS } from '@/constants/animation';
import { formatCurrency } from '@/helpers/formatCurrency';
import { getHotelById } from '@/helpers/getHotelById';

import { BookingBar } from './components/BookingBar';
import { ExpandableDescription } from './components/ExpandableDescription';
import { GalleryPreview } from './components/GalleryPreview';
import { HotelHero } from './components/HotelHero';
import { HotelSummary } from './components/HotelSummary';
import { PropertyFacts } from './components/PropertyFacts';
import { RatingSummary } from './components/RatingSummary';

export function HotelDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const hotel = getHotelById(id);

  const shareHotel = () => {
    Share.share({ message: `${hotel.name} — ${formatCurrency(hotel.price)}/night` });
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32">
        <HotelHero image={hotel.image} onBack={() => router.back()} onShare={shareHotel} />

        <Animated.View
          entering={FadeInDown.duration(SCREEN_ENTER_MS)}
          className="-mt-7 rounded-t-[28px] bg-white px-5 pt-6"
        >
          <HotelSummary hotel={hotel} />
          <GalleryPreview photos={hotel.gallery} extraCount={hotel.extraPhotos} />
          <PropertyFacts hotel={hotel} />
          <ExpandableDescription text={hotel.description} />
          <RatingSummary hotel={hotel} />
        </Animated.View>
      </ScrollView>

      <BookingBar hotel={hotel} />
    </View>
  );
}
