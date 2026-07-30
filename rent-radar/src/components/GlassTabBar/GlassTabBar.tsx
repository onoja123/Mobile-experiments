import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import GlassSurface from '@/components/GlassSurface';
import {
  TAB_BAR_BOTTOM_OFFSET,
  TAB_BAR_COLLAPSED_HEIGHT,
  TAB_BAR_HEIGHT,
  TAB_BAR_HORIZONTAL_INSET,
  TAB_BAR_INDICATOR_COLLAPSED_HEIGHT,
  TAB_BAR_INDICATOR_HEIGHT,
  TAB_BAR_PADDING,
} from '@/constants/layout';
import { AppTab } from '@/enums/appTab.enum';
import { colors, springs } from '@/theme';
import { GlassTabBarProps } from './GlassTabBar.types';
import TabBarItem from './TabBarItem';

const TABS = Object.values(AppTab);
const BAR_GAP = 12;
const COLLAPSED_ITEM_WIDTH = 44;
const COLLAPSED_BAR_WIDTH = TAB_BAR_PADDING * 2 + TABS.length * COLLAPSED_ITEM_WIDTH;

export default function GlassTabBar({ activeTab, onTabPress, collapsed = false }: GlassTabBarProps) {
  const insets = useSafeAreaInsets();
  const [rowWidth, setRowWidth] = useState(0);
  const fastEdge = useSharedValue(TABS.indexOf(activeTab));
  const slowEdge = useSharedValue(TABS.indexOf(activeTab));
  const collapseProgress = useSharedValue(0);

  useEffect(() => {
    const index = TABS.indexOf(activeTab);
    fastEdge.value = withSpring(index, springs.leading);
    slowEdge.value = withSpring(index, springs.trailing);
  }, [activeTab, fastEdge, slowEdge]);

  useEffect(() => {
    collapseProgress.value = withSpring(collapsed ? 1 : 0, springs.collapse);
  }, [collapsed, collapseProgress]);

  const fullBarWidth = rowWidth > 0 ? rowWidth - BAR_GAP - TAB_BAR_HEIGHT : 0;

  const barStyle = useAnimatedStyle(() => {
    const height = interpolate(
      collapseProgress.value,
      [0, 1],
      [TAB_BAR_HEIGHT, TAB_BAR_COLLAPSED_HEIGHT],
    );
    return {
      width: interpolate(collapseProgress.value, [0, 1], [fullBarWidth, COLLAPSED_BAR_WIDTH]),
      height,
      borderRadius: height / 2,
    };
  }, [fullBarWidth]);

  const searchStyle = useAnimatedStyle(() => {
    const size = interpolate(
      collapseProgress.value,
      [0, 1],
      [TAB_BAR_HEIGHT, TAB_BAR_COLLAPSED_HEIGHT],
    );
    return { width: size, height: size, borderRadius: size / 2 };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const lower = Math.min(fastEdge.value, slowEdge.value);
    const upper = Math.max(fastEdge.value, slowEdge.value);
    const barWidth = interpolate(
      collapseProgress.value,
      [0, 1],
      [fullBarWidth, COLLAPSED_BAR_WIDTH],
    );
    const itemWidth = (barWidth - TAB_BAR_PADDING * 2) / TABS.length;
    const barHeight = interpolate(
      collapseProgress.value,
      [0, 1],
      [TAB_BAR_HEIGHT, TAB_BAR_COLLAPSED_HEIGHT],
    );
    const height = interpolate(
      collapseProgress.value,
      [0, 1],
      [TAB_BAR_INDICATOR_HEIGHT, TAB_BAR_INDICATOR_COLLAPSED_HEIGHT],
    );
    return {
      left: TAB_BAR_PADDING + lower * itemWidth,
      width: (upper - lower) * itemWidth + itemWidth,
      top: (barHeight - height) / 2,
      height,
      borderRadius: height / 2,
    };
  }, [fullBarWidth]);

  const handlePress = (tab: AppTab) => {
    Haptics.selectionAsync();
    onTabPress(tab);
  };

  return (
    <View
      className="absolute flex-row items-end justify-center"
      style={{
        left: TAB_BAR_HORIZONTAL_INSET,
        right: TAB_BAR_HORIZONTAL_INSET,
        bottom: insets.bottom + TAB_BAR_BOTTOM_OFFSET,
        height: TAB_BAR_HEIGHT,
        gap: BAR_GAP,
      }}
      onLayout={(event) => setRowWidth(event.nativeEvent.layout.width)}
    >
      <GlassSurface
        tint="dark"
        style={[
          { overflow: 'hidden' },
          fullBarWidth > 0 ? barStyle : { flex: 1, height: TAB_BAR_HEIGHT, borderRadius: TAB_BAR_HEIGHT / 2 },
        ]}
      >
        <View
          className="flex-1 flex-row items-center"
          style={{ paddingHorizontal: TAB_BAR_PADDING }}
        >
          {fullBarWidth > 0 && (
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  backgroundColor: 'rgba(255,255,255,0.16)',
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,0.08)',
                },
                indicatorStyle,
              ]}
            />
          )}
          {TABS.map((tab, index) => (
            <TabBarItem
              key={tab}
              tab={tab}
              index={index}
              fastEdge={fastEdge}
              slowEdge={slowEdge}
              collapseProgress={collapseProgress}
              onPress={() => handlePress(tab)}
            />
          ))}
        </View>
      </GlassSurface>

      <GlassSurface tint="dark" style={[{ overflow: 'hidden' }, searchStyle]}>
        <Pressable
          className="flex-1 items-center justify-center"
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        >
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Circle cx={11} cy={11} r={6.5} stroke={colors.white} strokeWidth={1.9} />
            <Path
              d="m16 16 4.2 4.2"
              stroke={colors.white}
              strokeWidth={1.9}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>
      </GlassSurface>
    </View>
  );
}
