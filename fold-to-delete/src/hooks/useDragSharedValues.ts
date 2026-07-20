import * as Haptics from "expo-haptics";
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from "react-native-reanimated";

import type { DragSharedValues } from "@/types";

export function useDragSharedValues(): DragSharedValues {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const lift = useSharedValue(0);
  const vanish = useSharedValue(0);
  const dragging = useSharedValue(0);
  const hover = useSharedValue(0);
  const zoneProximity = useSharedValue(0);

  useAnimatedReaction(
    () => hover.value,
    (current, previous) => {
      if (current === 1 && previous === 0) {
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
      }
    }
  );

  return {
    translationX,
    translationY,
    lift,
    vanish,
    dragging,
    hover,
    zoneProximity,
  };
}
