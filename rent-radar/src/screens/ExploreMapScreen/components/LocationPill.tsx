import { useEffect, useState } from 'react';
import { Pressable, Text, useColorScheme } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import GlassSurface from '@/components/GlassSurface';
import { colors, springs } from '@/theme';
import { LocationPillProps } from './LocationPill.types';

const PILL_HEIGHT = 44;
const SIDE_PADDING = (PILL_HEIGHT - 18) / 2;

export default function LocationPill({ collapsed = false }: LocationPillProps) {
  const [fullWidth, setFullWidth] = useState(0);
  const inkColor = useColorScheme() === 'dark' ? colors.white : colors.ink;
  const collapseProgress = useSharedValue(0);

  useEffect(() => {
    collapseProgress.value = withSpring(collapsed ? 1 : 0, springs.collapse);
  }, [collapsed, collapseProgress]);

  const pillStyle = useAnimatedStyle(() => ({
    width: interpolate(collapseProgress.value, [0, 1], [fullWidth, PILL_HEIGHT]),
  }), [fullWidth]);

  const fadeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(collapseProgress.value, [0, 0.4], [1, 0], Extrapolation.CLAMP),
  }));

  return (
    <GlassSurface
      style={[
        {
          height: PILL_HEIGHT,
          borderRadius: PILL_HEIGHT / 2,
          overflow: 'hidden',
        },
        fullWidth > 0 ? pillStyle : {},
      ]}
    >
      <Pressable
        className="flex-row items-center"
        style={{
          height: PILL_HEIGHT,
          paddingLeft: SIDE_PADDING,
          paddingRight: SIDE_PADDING + 2,
          alignSelf: 'flex-start',
        }}
        onLayout={(event) => {
          if (fullWidth === 0) setFullWidth(event.nativeEvent.layout.width);
        }}
      >
        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 21s-6.5-5.4-6.5-10.3A6.4 6.4 0 0 1 12 4.2a6.4 6.4 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z"
            stroke={inkColor}
            strokeWidth={1.7}
          />
          <Circle cx={12} cy={10.6} r={2.3} stroke={inkColor} strokeWidth={1.7} />
        </Svg>
        <Animated.View className="flex-row items-center" style={fadeStyle}>
          <Text className="mx-2.5 text-[15px] font-semibold text-ink dark:text-white" numberOfLines={1}>
            San Francisco, CA
          </Text>
          <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
            <Path
              d="m6 9.5 6 6 6-6"
              stroke={colors.smoke}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </Pressable>
    </GlassSurface>
  );
}
