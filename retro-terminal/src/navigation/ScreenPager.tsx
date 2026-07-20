import React, { useEffect, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AUTO_JUMP_DELAY_MS, AUTO_JUMP_PAGE_INDEX } from '@/constants/pager';
import { EnvironScreen } from '@/screens/EnvironScreen';
import { InterlinkedScreen } from '@/screens/InterlinkedScreen';
import { TerminalScreen } from '@/screens/TerminalScreen';
import { palette } from '@/theme';
import { SceneScreenProps } from '@/types';

type ScenePage = {
  Screen: React.ComponentType<SceneScreenProps>;
  initialTick: number;
  background: string;
  statusBarStyle: StatusBarStyle;
};

const SCENE_PAGES: ScenePage[] = [
  { Screen: TerminalScreen, initialTick: 0, background: palette.paper, statusBarStyle: 'dark' },
  { Screen: EnvironScreen, initialTick: 4, background: palette.void, statusBarStyle: 'light' },
  { Screen: InterlinkedScreen, initialTick: 6, background: palette.paper, statusBarStyle: 'dark' },
];

export function ScreenPager() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [pageIndex, setPageIndex] = useState(0);
  const [ticks, setTicks] = useState(() => SCENE_PAGES.map((page) => page.initialTick));
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      scrollRef.current?.scrollTo({ x: width * AUTO_JUMP_PAGE_INDEX, animated: false });
      setPageIndex(AUTO_JUMP_PAGE_INDEX);
    }, AUTO_JUMP_DELAY_MS);
    return () => clearTimeout(id);
  }, [width]);

  const advanceTick = (index: number) =>
    setTicks((prev) => prev.map((tick, i) => (i === index ? tick + 1 : tick)));

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setPageIndex(Math.round(event.nativeEvent.contentOffset.x / width));

  const screenHeight = height - insets.top - insets.bottom;
  const { background, statusBarStyle } = SCENE_PAGES[pageIndex];

  return (
    <View style={{ flex: 1, backgroundColor: background }}>
      <StatusBar style={statusBarStyle} />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        {SCENE_PAGES.map(({ Screen }, index) => (
          <Pressable key={index} onPress={() => advanceTick(index)}>
            <Screen tick={ticks[index]} width={width} height={screenHeight} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
