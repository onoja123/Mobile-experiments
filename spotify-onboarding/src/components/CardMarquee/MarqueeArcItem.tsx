import Animated, {
  useAnimatedStyle,
  type SharedValue,
} from "react-native-reanimated";

import { MarqueeCard } from "@/components/MarqueeCard";
import type { MarqueeItem } from "@/types";

import {
  ARC_RADIUS,
  CENTER_DISTANCE_CLAMP,
  ITEM_TILT_INFLUENCE,
  MARQUEE_ITEM_HEIGHT,
  MAX_SCALE_SHRINK,
  MAX_TILT_DEG,
} from "./CardMarquee.constants";

type MarqueeArcItemProps = {
  item: MarqueeItem;
  index: number;
  scrollY: SharedValue<number>;
  viewportHeight: number;
};

export function MarqueeArcItem({
  item,
  index,
  scrollY,
  viewportHeight,
}: MarqueeArcItemProps) {
  const arcStyle = useAnimatedStyle(() => {
    if (viewportHeight === 0) return {};
    const centerOffset =
      index * MARQUEE_ITEM_HEIGHT +
      MARQUEE_ITEM_HEIGHT / 2 -
      scrollY.value -
      viewportHeight / 2;
    const centerDistance = centerOffset / (viewportHeight / 2);
    const clampedDistance = Math.min(
      Math.max(centerDistance, -CENTER_DISTANCE_CLAMP),
      CENTER_DISTANCE_CLAMP,
    );
    const tilt = centerDistance * MAX_TILT_DEG + item.tilt * ITEM_TILT_INFLUENCE;
    const tiltRad = (tilt * Math.PI) / 180;
    const translateX = -ARC_RADIUS * (1 - Math.cos(tiltRad));
    const scale = 1 - Math.abs(clampedDistance) * MAX_SCALE_SHRINK;
    return {
      transform: [{ translateX }, { rotate: `${tilt}deg` }, { scale }],
    };
  });

  return (
    <Animated.View
      className="items-center justify-center"
      style={[{ height: MARQUEE_ITEM_HEIGHT }, arcStyle]}
    >
      <MarqueeCard item={item} />
    </Animated.View>
  );
}
