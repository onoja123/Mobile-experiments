import { useState } from 'react';
import { Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PressableScale } from '@/components';
import { MIN_BOTTOM_INSET } from '@/constants/layout';
import { formatCurrency } from '@/helpers/formatCurrency';
import { Hotel } from '@/interfaces';

import { BOOKED_RESET_MS } from '../hotelDetail.constants';

type BookingBarProps = {
  hotel: Hotel;
};

export function BookingBar({ hotel }: BookingBarProps) {
  const insets = useSafeAreaInsets();
  const [booked, setBooked] = useState(false);

  const confirmBooking = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setBooked(true);
    setTimeout(() => setBooked(false), BOOKED_RESET_MS);
  };

  return (
    <View
      className="absolute inset-x-0 bottom-0 flex-row items-center justify-between border-t border-line bg-white px-5 pt-3"
      style={{ paddingBottom: Math.max(insets.bottom, MIN_BOTTOM_INSET) }}
    >
      <View>
        <Text className="font-jakarta-bold text-[17px] text-ink">
          {formatCurrency(hotel.price * hotel.nights)} total
        </Text>
        <Text className="mt-0.5 font-jakarta text-[12px] text-muted">
          {hotel.guests} guests · {formatCurrency(hotel.price)}/night
        </Text>
      </View>
      <PressableScale
        scaleTo={0.95}
        className={`h-12 min-w-[132px] items-center justify-center rounded-full px-7 ${
          booked ? 'bg-ink/90' : 'bg-pill'
        }`}
        onPress={confirmBooking}
      >
        <Text className="font-jakarta-semibold text-[14px] text-white">
          {booked ? 'Booked ✓' : 'Book now'}
        </Text>
      </PressableScale>
    </View>
  );
}
