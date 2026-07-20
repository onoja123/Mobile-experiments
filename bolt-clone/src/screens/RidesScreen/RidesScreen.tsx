import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import SegmentedControl from '@/components/SegmentedControl';
import { RIDE_HISTORY_SEGMENT_LABELS } from '@/constants/rideHistory';
import { PAST_RIDES } from '@/data/pastRides';
import { RideHistorySegment } from '@/enums';
import { useTabScreenPadding } from '@/hooks/useTabScreenPadding';
import PastRideList from './components/PastRideList';
import UpcomingRides from './components/UpcomingRides';

export default function RidesScreen() {
  const contentPadding = useTabScreenPadding();
  const [segment, setSegment] = useState<number>(RideHistorySegment.UPCOMING);

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={contentPadding}
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-[32px] font-extrabold tracking-tight text-ink">Rides</Text>

      <SegmentedControl
        segments={RIDE_HISTORY_SEGMENT_LABELS}
        value={segment}
        onChange={setSegment}
      />

      {segment === RideHistorySegment.UPCOMING ? (
        <UpcomingRides />
      ) : (
        <PastRideList rides={PAST_RIDES} />
      )}
    </ScrollView>
  );
}
