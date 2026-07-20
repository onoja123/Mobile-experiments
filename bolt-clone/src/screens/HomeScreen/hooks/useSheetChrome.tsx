import type { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';
import { SHEET_HANDLE_HEIGHT } from '@/constants/layout';
import { colors } from '@/theme';

const SHEET_CORNER_RADIUS = 24;
const HANDLE_FADE_START_OFFSET = 10;
const HANDLE_FADE_END_OFFSET = 70;

export function useSheetChrome(position: SharedValue<number>, topInset: number) {
  const backgroundStyle = useAnimatedStyle(() => {
    const radius = interpolate(
      position.value,
      [0, SHEET_CORNER_RADIUS],
      [0, SHEET_CORNER_RADIUS],
      Extrapolation.CLAMP,
    );
    return { borderTopLeftRadius: radius, borderTopRightRadius: radius };
  });

  const statusBarSpacerStyle = useAnimatedStyle(() => ({
    height: interpolate(position.value, [0, topInset], [topInset, 0], Extrapolation.CLAMP),
  }));

  const handleBarStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      position.value,
      [topInset + HANDLE_FADE_START_OFFSET, topInset + HANDLE_FADE_END_OFFSET],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  const renderBackground = useCallback(
    ({ style }: BottomSheetBackgroundProps) => (
      <Animated.View style={[style, styles.sheetBackground, backgroundStyle]} />
    ),
    [backgroundStyle],
  );

  const renderHandle = useCallback(
    () => (
      <View>
        <Animated.View style={statusBarSpacerStyle} />
        <View className="items-center justify-center" style={{ height: SHEET_HANDLE_HEIGHT }}>
          <Animated.View className="h-[5px] w-12 rounded-full bg-grabber" style={handleBarStyle} />
        </View>
      </View>
    ),
    [statusBarSpacerStyle, handleBarStyle],
  );

  return { renderBackground, renderHandle };
}

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 12,
  },
});
