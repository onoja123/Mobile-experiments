import { useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import {
  runOnJS,
  useAnimatedReaction,
  useDerivedValue,
  useFrameCallback,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {
  DEFAULT_DOMAIN_MAX,
  DEFAULT_DOMAIN_MIN,
  HAPTIC_MIN_INTERVAL_MS,
  PRICE_BUCKET,
  READOUT_CHASE,
  RESET_SPRING,
} from './PriceRangeSlider.constants';
import { PriceRange, UsePriceRangeOptions } from './PriceRangeSlider.types';

function tickHaptic() {
  Haptics.selectionAsync();
}

export function usePriceRange({
  domainMin = DEFAULT_DOMAIN_MIN,
  domainMax = DEFAULT_DOMAIN_MAX,
  initialLow,
  initialHigh,
  onChange,
}: UsePriceRangeOptions): PriceRange {
  const span = domainMax - domainMin;
  const initialLoFrac = (initialLow - domainMin) / span;
  const initialHiFrac = (initialHigh - domainMin) / span;

  const loFrac = useSharedValue(initialLoFrac);
  const hiFrac = useSharedValue(initialHiFrac);
  const activeThumb = useSharedValue(-1);
  const lowDisplay = useSharedValue(initialLow);
  const highDisplay = useSharedValue(initialHigh);
  const lastHapticAt = useSharedValue(0);

  const lowTarget = useDerivedValue(
    () => Math.round((domainMin + loFrac.value * span) / PRICE_BUCKET) * PRICE_BUCKET,
  );
  const highTarget = useDerivedValue(
    () => Math.round((domainMin + hiFrac.value * span) / PRICE_BUCKET) * PRICE_BUCKET,
  );

  useFrameCallback(() => {
    const loGap = lowTarget.value - lowDisplay.value;
    if (loGap !== 0) {
      lowDisplay.value =
        Math.abs(loGap) < 0.5 ? lowTarget.value : lowDisplay.value + loGap * READOUT_CHASE;
    }
    const hiGap = highTarget.value - highDisplay.value;
    if (hiGap !== 0) {
      highDisplay.value =
        Math.abs(hiGap) < 0.5 ? highTarget.value : highDisplay.value + hiGap * READOUT_CHASE;
    }
  });

  useAnimatedReaction(
    () => ({ low: lowTarget.value, high: highTarget.value }),
    (curr, prev) => {
      if (!prev || (curr.low === prev.low && curr.high === prev.high)) return;
      if (onChange) runOnJS(onChange)(curr.low, curr.high);
      const now = Date.now();
      if (now - lastHapticAt.value >= HAPTIC_MIN_INTERVAL_MS) {
        lastHapticAt.value = now;
        runOnJS(tickHaptic)();
      }
    },
  );

  const reset = useCallback(() => {
    loFrac.value = withSpring(initialLoFrac, RESET_SPRING);
    hiFrac.value = withSpring(initialHiFrac, RESET_SPRING);
  }, [loFrac, hiFrac, initialLoFrac, initialHiFrac]);

  return { loFrac, hiFrac, activeThumb, lowDisplay, highDisplay, reset };
}
