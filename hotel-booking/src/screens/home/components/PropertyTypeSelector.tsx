import { useEffect, useRef } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { PressableScale } from '@/components';
import { SETTLE_SPRING } from '@/constants/animation';
import { PropertyType } from '@/enums';
import { palette } from '@/theme';

const LABEL_FADE_MS = 220;
const CHIP_PRESS_SCALE = 0.94;
const LINE_TRANSPARENT = 'rgba(234, 234, 232, 0)';

type ChipLayout = { x: number; y: number; width: number };

type PropertyTypeSelectorProps = {
  selected: PropertyType;
  onSelect: (type: PropertyType) => void;
};

type ChipProps = {
  type: PropertyType;
  isSelected: boolean;
  onLayout: (event: LayoutChangeEvent) => void;
  onPress: () => void;
};

function Chip({ type, isSelected, onLayout, onPress }: ChipProps) {
  const selectedness = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    selectedness.value = withTiming(isSelected ? 1 : 0, { duration: LABEL_FADE_MS });
  }, [isSelected, selectedness]);

  const borderStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(selectedness.value, [0, 1], [palette.line, LINE_TRANSPARENT]),
  }));
  const labelStyle = useAnimatedStyle(() => ({
    color: interpolateColor(selectedness.value, [0, 1], [palette.ink, palette.white]),
  }));

  return (
    <PressableScale
      scaleTo={CHIP_PRESS_SCALE}
      className="h-10 items-center justify-center rounded-full border px-4"
      style={borderStyle}
      onLayout={onLayout}
      onPress={onPress}
    >
      <Animated.Text className="font-jakarta-medium text-[13px]" style={labelStyle}>
        {type}
      </Animated.Text>
    </PressableScale>
  );
}

export function PropertyTypeSelector({ selected, onSelect }: PropertyTypeSelectorProps) {
  const layoutsRef = useRef<Partial<Record<PropertyType, ChipLayout>>>({});
  const placedRef = useRef(false);
  const pillX = useSharedValue(0);
  const pillY = useSharedValue(0);
  const pillWidth = useSharedValue(0);
  const pillOpacity = useSharedValue(0);

  const placePill = (layout: ChipLayout, animate: boolean) => {
    if (animate) {
      pillX.value = withSpring(layout.x, SETTLE_SPRING);
      pillY.value = withSpring(layout.y, SETTLE_SPRING);
      pillWidth.value = withSpring(layout.width, SETTLE_SPRING);
    } else {
      pillX.value = layout.x;
      pillY.value = layout.y;
      pillWidth.value = layout.width;
    }
    pillOpacity.value = 1;
    placedRef.current = true;
  };

  // handleSelect animates in the press handler; this only catches external
  // changes (e.g. Reset)
  const placedForRef = useRef(selected);
  useEffect(() => {
    if (selected === placedForRef.current) return;
    placedForRef.current = selected;
    const layout = layoutsRef.current[selected];
    if (layout) placePill(layout, placedRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleChipLayout = (type: PropertyType) => (event: LayoutChangeEvent) => {
    const { x, y, width } = event.nativeEvent.layout;
    const cached = layoutsRef.current[type];
    const changed =
      !cached ||
      Math.abs(cached.x - x) > 0.5 ||
      Math.abs(cached.y - y) > 0.5 ||
      Math.abs(cached.width - width) > 0.5;
    if (!changed) return;
    layoutsRef.current[type] = { x, y, width };
    if (type === selected) placePill({ x, y, width }, false);
  };

  const handleSelect = (type: PropertyType) => {
    if (type === selected) return;
    Haptics.selectionAsync();
    const layout = layoutsRef.current[type];
    if (layout) {
      placedForRef.current = type;
      placePill(layout, true);
    }
    onSelect(type);
  };

  const pillStyle = useAnimatedStyle(() => ({
    width: pillWidth.value,
    opacity: pillOpacity.value,
    transform: [{ translateX: pillX.value }, { translateY: pillY.value }],
  }));

  return (
    <View className="mt-6 flex-row flex-wrap gap-2">
      <Animated.View
        pointerEvents="none"
        className="absolute left-0 top-0 h-10 rounded-full bg-pill"
        style={pillStyle}
      />
      {Object.values(PropertyType).map((type) => (
        <Chip
          key={type}
          type={type}
          isSelected={type === selected}
          onLayout={handleChipLayout(type)}
          onPress={() => handleSelect(type)}
        />
      ))}
    </View>
  );
}
