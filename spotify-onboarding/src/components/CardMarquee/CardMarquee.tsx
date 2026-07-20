import { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

import type { MarqueeItem } from "@/types";

import {
  MARQUEE_INITIAL_COPY,
  MARQUEE_ITEM_HEIGHT,
  MARQUEE_LOOP_COPIES,
  TOP_FADE_COLORS,
} from "./CardMarquee.constants";
import { MarqueeArcItem } from "./MarqueeArcItem";
import { MarqueeBottomFade } from "./MarqueeBottomFade";

type CardMarqueeProps = {
  items: MarqueeItem[];
};

export function CardMarquee({ items }: CardMarqueeProps) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollY = useScrollViewOffset(scrollRef);
  const [viewportHeight, setViewportHeight] = useState(0);

  const copyHeight = items.length * MARQUEE_ITEM_HEIGHT;

  useAnimatedReaction(
    () => scrollY.value,
    (y) => {
      if (y < copyHeight) {
        scrollTo(scrollRef, 0, y + copyHeight, false);
      } else if (y > copyHeight * (MARQUEE_LOOP_COPIES - 2)) {
        scrollTo(scrollRef, 0, y - copyHeight, false);
      }
    },
  );

  const loopedItems = Array.from(
    { length: MARQUEE_LOOP_COPIES },
    () => items,
  ).flat();

  return (
    <View
      className="flex-1 overflow-hidden"
      onLayout={(e) => setViewportHeight(e.nativeEvent.layout.height)}
    >
      <Animated.ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentOffset={{ x: 0, y: copyHeight * MARQUEE_INITIAL_COPY }}
        snapToInterval={MARQUEE_ITEM_HEIGHT}
        decelerationRate="fast"
      >
        {loopedItems.map((item, index) => (
          <MarqueeArcItem
            key={`${item.id}-${Math.floor(index / items.length)}`}
            item={item}
            index={index}
            scrollY={scrollY}
            viewportHeight={viewportHeight}
          />
        ))}
      </Animated.ScrollView>

      <LinearGradient
        colors={TOP_FADE_COLORS}
        className="absolute left-0 right-0 top-0 h-24"
        pointerEvents="none"
      />
      <MarqueeBottomFade />
    </View>
  );
}
