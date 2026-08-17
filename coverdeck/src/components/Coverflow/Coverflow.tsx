import { forwardRef, useImperativeHandle } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  clamp,
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { SNAP_SPRING } from '@/constants/springs';

import CoverCard from './CoverCard';
import { REFLECTION_RATIO } from './Coverflow.constants';
import type { CoverflowHandle, CoverflowProps } from './Coverflow.types';

const Coverflow = forwardRef<CoverflowHandle, CoverflowProps>(function Coverflow(
  { albums, initialIndex = 0, onIndexChange, progress },
  ref,
) {
  const { width } = useWindowDimensions();
  const size = Math.min(width * 0.56, 250);
  const spacing = size * 0.36;
  const centerGap = size * 0.3;
  const count = albums.length;

  const internal = useSharedValue(initialIndex);
  const scrollX = progress ?? internal;

  useImperativeHandle(ref, () => ({
    scrollTo: (index: number) => {
      scrollX.set(withSpring(Math.min(Math.max(index, 0), count - 1), SNAP_SPRING));
    },
  }));

  useAnimatedReaction(
    () => Math.round(clamp(scrollX.get(), 0, count - 1)),
    (current, previous) => {
      if (previous !== null && current !== previous && onIndexChange) {
        runOnJS(onIndexChange)(current);
      }
    },
  );

  const pan = Gesture.Pan()
    .activeOffsetX([-6, 6])
    .onChange((event) => {
      scrollX.set(clamp(scrollX.get() - event.changeX / spacing, -0.35, count - 0.65));
    })
    .onEnd((event) => {
      const velocity = -event.velocityX / spacing;
      const projected = scrollX.get() + velocity * 0.18;
      const target = clamp(Math.round(projected), 0, count - 1);
      scrollX.set(withSpring(target, { ...SNAP_SPRING, velocity }));
    });

  const tap = Gesture.Tap().onEnd((event) => {
    const dx = event.x - width / 2;
    if (Math.abs(dx) <= size / 2) return;
    const adjusted = dx - Math.sign(dx) * centerGap;
    const target = clamp(Math.round(scrollX.get() + adjusted / spacing), 0, count - 1);
    scrollX.set(withSpring(target, SNAP_SPRING));
  });

  return (
    <GestureDetector gesture={Gesture.Exclusive(pan, tap)}>
      <View style={{ height: size + size * REFLECTION_RATIO + 3 }}>
        {albums.map((album, index) => (
          <CoverCard
            key={album.id}
            album={album}
            index={index}
            scrollX={scrollX}
            size={size}
            spacing={spacing}
            centerGap={centerGap}
            containerWidth={width}
          />
        ))}
      </View>
    </GestureDetector>
  );
});

export default Coverflow;
