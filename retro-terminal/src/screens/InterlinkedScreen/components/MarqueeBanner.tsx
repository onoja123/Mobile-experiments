import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

import { fonts, palette } from '@/theme';

const MARQUEE_TEXT = ' · DR-5 · INTERLINKED · ENVIRO LOG';
const SEGMENT_WIDTH = 620;
const REPEAT_COUNT = 4;
const SCROLL_DURATION_MS = 9000;

export function MarqueeBanner({ width }: { width: number }) {
  const translateX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(translateX, {
        toValue: -SEGMENT_WIDTH,
        duration: SCROLL_DURATION_MS,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [translateX]);
  return (
    <View style={{ height: 34, overflow: 'hidden', width }}>
      <Animated.Text
        numberOfLines={1}
        style={{
          position: 'absolute',
          fontFamily: fonts.mono,
          fontSize: 23,
          fontWeight: '700',
          letterSpacing: 2,
          color: palette.ink,
          width: SEGMENT_WIDTH * REPEAT_COUNT,
          transform: [{ translateX }],
        }}
      >
        {MARQUEE_TEXT.repeat(REPEAT_COUNT)}
      </Animated.Text>
    </View>
  );
}
