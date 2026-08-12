import { useRef, useSyncExternalStore } from 'react';
import type { ScrollView } from 'react-native';
import { runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const DIRECTION_THRESHOLD = 8;
const ARM_AT = 28;

/**
 * Web stand-in for expo-native-compact-tabs, whose view is native-only. The
 * latching compact logic is JS, so it is mirrored here to keep the web demo
 * behaving like the app.
 */
function createWebController() {
  let compact = false;
  const listeners = new Set<() => void>();

  function setCompact(next: boolean) {
    if (next === compact) return;
    compact = next;
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    useCompact: () => useSyncExternalStore(subscribe, () => compact),
    expand: () => setCompact(false),
    scrollToTop: () => false,
    useCollapsingScroll: () => {
      const scrollRef = useRef<ScrollView>(null);
      const scrollY = useSharedValue(0);
      const anchor = useSharedValue(0);

      const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
          const maxY = Math.max(event.contentSize.height - event.layoutMeasurement.height, 0);
          const y = Math.min(Math.max(event.contentOffset.y, 0), maxY);
          scrollY.value = y;

          if (y <= ARM_AT) {
            anchor.value = y;
            runOnJS(setCompact)(false);
            return;
          }

          const dy = y - anchor.value;
          if (dy > DIRECTION_THRESHOLD) {
            anchor.value = y;
            runOnJS(setCompact)(true);
          } else if (dy < -DIRECTION_THRESHOLD) {
            anchor.value = y;
            runOnJS(setCompact)(false);
          }
        },
      });

      return { scrollRef, scrollY, onScroll };
    },
  };
}

export const tabBarController = createWebController();
