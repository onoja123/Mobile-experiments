import React from 'react';
import { ScrollView, View } from 'react-native';

import { SharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SCREEN_H_PADDING, TAB_BAR_CLEARANCE } from '@/constants/layout';
import { DESTINATIONS } from '@/data/destinations';

import DestinationCard from './components/DestinationCard';
import DestinationCardSlot from './components/DestinationCardSlot';
import DestinationDetailActions from './components/DestinationDetailActions';
import DestinationDetailSheet from './components/DestinationDetailSheet';
import DestinationHero from './components/DestinationHero';
import ExploreHeader from './components/ExploreHeader';
import ReserveSheet from './components/ReserveSheet';
import { useDestinationExpansion } from './hooks/useDestinationExpansion';

type ExploreScreenProps = {
  progress: SharedValue<number>;
};

export default function ExploreScreen({ progress }: ExploreScreenProps) {
  const insets = useSafeAreaInsets();
  const {
    expanded,
    isReserving,
    expandCard,
    collapseCard,
    relationTo,
    startReserving,
    stopReserving,
  } = useDestinationExpansion(progress);

  return (
    <View className="flex-1 bg-cream">
      <View className="flex-1" pointerEvents={expanded ? 'none' : 'auto'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: insets.top + 10,
            paddingHorizontal: SCREEN_H_PADDING,
            paddingBottom: insets.bottom + TAB_BAR_CLEARANCE,
          }}
        >
          <ExploreHeader progress={progress} />

          <View className="mt-6 gap-5">
            {DESTINATIONS.map((destination, index) => (
              <DestinationCardSlot
                key={destination.id}
                progress={progress}
                relation={relationTo(index)}
              >
                <DestinationCard
                  destination={destination}
                  hidden={expanded?.destination.id === destination.id}
                  onOpen={expandCard}
                />
              </DestinationCardSlot>
            ))}
          </View>
        </ScrollView>
      </View>

      {expanded && (
        <>
          <DestinationDetailSheet
            destination={expanded.destination}
            progress={progress}
          />
          <DestinationDetailActions
            progress={progress}
            onExploreOptions={collapseCard}
            onReserve={startReserving}
          />
          <DestinationHero
            destination={expanded.destination}
            originRect={expanded.originRect}
            progress={progress}
            onClose={collapseCard}
          />
          {isReserving && (
            <ReserveSheet
              destination={expanded.destination}
              onClose={stopReserving}
            />
          )}
        </>
      )}
    </View>
  );
}
