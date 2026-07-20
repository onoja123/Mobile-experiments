import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

import FolderCard from "@/components/FolderCard";
import {
  HOVER_SHRINK_DURATION_MS,
  HOVER_SHRINK_FACTOR,
  LIFT_SCALE_BOOST,
  PROXIMITY_SHRINK_FACTOR,
  VANISH_SHRINK_FACTOR,
} from "@/constants/animations";
import { CARD_WIDTH } from "@/constants/folderGrid";
import type { ActiveDrag, DragSharedValues } from "@/types";

type DragOverlayProps = {
  drag: ActiveDrag;
  values: DragSharedValues;
};

export default function DragOverlay({ drag, values }: DragOverlayProps) {
  const { translationX, translationY, lift, vanish, hover, zoneProximity } =
    values;

  const hoverShrink = useDerivedValue(() =>
    withTiming(hover.value, {
      duration: HOVER_SHRINK_DURATION_MS,
      easing: Easing.out(Easing.quad),
    })
  );

  const overlayStyle = useAnimatedStyle(() => {
    const scale =
      (1 + lift.value * LIFT_SCALE_BOOST) *
      (1 - zoneProximity.value * PROXIMITY_SHRINK_FACTOR) *
      (1 - hoverShrink.value * HOVER_SHRINK_FACTOR) *
      (1 - vanish.value * VANISH_SHRINK_FACTOR);
    return {
      opacity: 1 - vanish.value,
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
        { scale },
      ],
    };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        { position: "absolute", left: drag.x, top: drag.y, width: drag.width },
        overlayStyle,
      ]}
    >
      <FolderCard item={drag.item} width={CARD_WIDTH} floating />
    </Animated.View>
  );
}
