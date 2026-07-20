import { useCallback, useState } from 'react';

import {
  runOnJS,
  SharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { durations, easings, springs } from '@/constants/animation';
import { DESTINATIONS } from '@/data/destinations';
import { CardStackRelation } from '@/enums';
import type { Destination, ExpandedDestination, Rect } from '@/types';

export function useDestinationExpansion(progress: SharedValue<number>) {
  const [expanded, setExpanded] = useState<ExpandedDestination | null>(null);
  const [isReserving, setIsReserving] = useState(false);

  const expandCard = useCallback(
    (destination: Destination, originRect: Rect) => {
      const index = DESTINATIONS.findIndex((d) => d.id === destination.id);
      setExpanded({ destination, index, originRect });
      progress.value = 0;
      progress.value = withSpring(1, springs.cardExpand);
    },
    [progress],
  );

  const collapseCard = useCallback(() => {
    setIsReserving(false);
    progress.value = withTiming(
      0,
      { duration: durations.cardCollapse, easing: easings.cardCollapse },
      (finished) => {
        if (finished) runOnJS(setExpanded)(null);
      },
    );
  }, [progress]);

  const relationTo = useCallback(
    (index: number): CardStackRelation => {
      if (!expanded) return CardStackRelation.None;
      if (index === expanded.index) return CardStackRelation.Active;
      return index < expanded.index
        ? CardStackRelation.Above
        : CardStackRelation.Below;
    },
    [expanded],
  );

  const startReserving = useCallback(() => setIsReserving(true), []);
  const stopReserving = useCallback(() => setIsReserving(false), []);

  return {
    expanded,
    isReserving,
    expandCard,
    collapseCard,
    relationTo,
    startReserving,
    stopReserving,
  };
}
