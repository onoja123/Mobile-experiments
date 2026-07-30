import { useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { formatUsDate } from '@/helpers/formatUsDate';
import { palette } from '@/theme';

import { CalendarPanel } from './CalendarPanel';
import { CrossfadeText } from './CrossfadeText';

const OPEN_MS = 400;
const CLOSE_MS = 350;
const OPEN_EASING = Easing.out(Easing.back(1.15));
const CLOSE_EASING = Easing.out(Easing.cubic);
const AUTO_COLLAPSE_MS = 700;
const ADD_DATE = 'Add date';

type DateRangeRowProps = {
  start: Date | null;
  end: Date | null;
  onChangeRange: (start: Date | null, end: Date | null) => void;
};

type DateFieldProps = {
  text: string;
  progress: SharedValue<number>;
  onPress: () => void;
};

function DateField({ text, progress, onPress }: DateFieldProps) {
  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));

  return (
    <Pressable
      className="h-12 flex-1 flex-row items-center justify-between rounded-full border border-line px-4 active:bg-chip"
      onPress={onPress}
    >
      <CrossfadeText text={text} className="font-jakarta-medium text-[14px] text-ink" />
      <Animated.View style={chevronStyle}>
        <Feather name="chevron-down" size={16} color={palette.muted} />
      </Animated.View>
    </Pressable>
  );
}

export function DateRangeRow({ start, end, onChangeRange }: DateRangeRowProps) {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const progress = useSharedValue(0);

  const setPanel = (next: boolean) => {
    setOpen(next);
    progress.value = withTiming(next ? 1 : 0, {
      duration: next ? OPEN_MS : CLOSE_MS,
      easing: next ? OPEN_EASING : CLOSE_EASING,
    });
  };

  const toggle = () => {
    Haptics.selectionAsync();
    setPanel(!open);
  };

  const endTime = end?.getTime() ?? null;
  const prevEndRef = useRef(endTime);
  useEffect(() => {
    const changed = endTime !== prevEndRef.current;
    prevEndRef.current = endTime;
    if (!changed || endTime === null || !open) return;
    const timer = setTimeout(() => setPanel(false), AUTO_COLLAPSE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTime]);

  const handleSelectDay = (date: Date) => {
    Haptics.selectionAsync();
    if (!start || end) {
      onChangeRange(date, null);
      return;
    }
    if (date.getTime() > start.getTime()) onChangeRange(start, date);
    else onChangeRange(date, null);
  };

  const wrapperStyle = useAnimatedStyle(() => ({
    height: Math.max(0, contentHeight * progress.value),
  }));

  const monthAnchor = start ?? end ?? new Date();

  return (
    <View>
      <View className="flex-row gap-3">
        <DateField
          text={start ? formatUsDate(start) : ADD_DATE}
          progress={progress}
          onPress={toggle}
        />
        <DateField text={end ? formatUsDate(end) : ADD_DATE} progress={progress} onPress={toggle} />
      </View>

      <Animated.View
        className="overflow-hidden"
        style={wrapperStyle}
        pointerEvents={open ? 'auto' : 'none'}
      >
        <View
          className="absolute inset-x-0 top-0"
          onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}
        >
          <CalendarPanel
            monthAnchor={monthAnchor}
            start={start}
            end={end}
            onSelectDay={handleSelectDay}
          />
        </View>
      </Animated.View>
    </View>
  );
}
