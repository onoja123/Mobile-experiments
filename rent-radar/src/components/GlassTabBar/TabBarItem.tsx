import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { colors, shadows } from '@/theme';
import TabBarIcon from './TabBarIcon';
import { TabBarItemProps } from './GlassTabBar.types';

const ICON_SIZE = 26;
const LABEL_HEIGHT = 16;

export default function TabBarItem({
  tab,
  index,
  fastEdge,
  slowEdge,
  collapseProgress,
  onPress,
}: TabBarItemProps) {
  const glowStyle = useAnimatedStyle(() => {
    const mid = (fastEdge.value + slowEdge.value) / 2;
    const intensity = Math.max(0, 1 - Math.abs(mid - index));
    return { opacity: intensity };
  });

  const labelBoxStyle = useAnimatedStyle(() => ({
    height: interpolate(collapseProgress.value, [0, 1], [LABEL_HEIGHT, 0]),
    opacity: interpolate(collapseProgress.value, [0, 0.5], [1, 0], Extrapolation.CLAMP),
  }));

  const labelTextStyle = useAnimatedStyle(() => {
    const mid = (fastEdge.value + slowEdge.value) / 2;
    const intensity = Math.max(0, 1 - Math.abs(mid - index));
    return { color: interpolateColor(intensity, [0, 1], [colors.dimmed, colors.white]) };
  });

  return (
    <Pressable className="flex-1 items-center justify-center" onPress={onPress}>
      <View className="items-center">
        <View style={{ width: ICON_SIZE, height: ICON_SIZE }}>
          <TabBarIcon tab={tab} color={colors.dimmed} />
          <Animated.View style={[StyleSheet.absoluteFill, styles.glow, glowStyle]}>
            <TabBarIcon tab={tab} color={colors.white} filled />
          </Animated.View>
        </View>
        <Animated.View style={[styles.labelBox, labelBoxStyle]}>
          <Animated.Text style={[styles.label, labelTextStyle]} numberOfLines={1}>
            {tab}
          </Animated.Text>
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  glow: {
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.iconGlow,
  },
  labelBox: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
});
