import React from 'react';
import { Pressable, Text, View } from 'react-native';

import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { durations, easings } from '@/constants/animation';
import { INSURANCE_RATE } from '@/constants/booking';
import { SHEET_H_PADDING } from '@/constants/layout';
import { parseNaira } from '@/helpers/parseNaira';
import { colors, typography } from '@/theme';
import type { Destination } from '@/types';

import { useCalendarMonth } from '../hooks/useCalendarMonth';
import { useStayDateRange } from '../hooks/useStayDateRange';
import CalendarGrid from './CalendarGrid';
import CalendarMonthHeader from './CalendarMonthHeader';
import PriceSummary from './PriceSummary';

type ReserveSheetProps = {
  destination: Destination;
  onClose: () => void;
};

export default function ReserveSheet({
  destination,
  onClose,
}: ReserveSheetProps) {
  const insets = useSafeAreaInsets();
  const {
    days,
    monthLabel,
    canGoToPreviousMonth,
    goToPreviousMonth,
    goToNextMonth,
  } = useCalendarMonth();
  const { checkIn, checkOut, nights, selectDay } = useStayDateRange();

  const payment = parseNaira(destination.price) * nights;
  const insurance = Math.round(payment * INSURANCE_RATE);

  return (
    <View className="absolute inset-0">
      <Animated.View
        entering={FadeIn.duration(durations.backdropIn)}
        exiting={FadeOut.duration(durations.backdropOut)}
        className="absolute inset-0 bg-black/35"
      >
        <Pressable className="flex-1" onPress={onClose} />
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(durations.sheetIn).easing(easings.sheetSlide)}
        exiting={SlideOutDown.duration(durations.sheetOut)}
        layout={LinearTransition.duration(durations.sheetResize).easing(
          easings.sheetSlide,
        )}
        className="absolute inset-x-0 bottom-0 rounded-t-sheet bg-white"
        style={{
          paddingHorizontal: SHEET_H_PADDING,
          paddingTop: 22,
          paddingBottom: (insets.bottom || 16) + 10,
        }}
      >
        <CalendarMonthHeader
          monthLabel={monthLabel}
          canGoToPreviousMonth={canGoToPreviousMonth}
          onPreviousMonth={goToPreviousMonth}
          onNextMonth={goToNextMonth}
        />

        <CalendarGrid
          days={days}
          checkIn={checkIn}
          checkOut={checkOut}
          onSelectDay={selectDay}
        />

        {nights > 0 && <PriceSummary payment={payment} insurance={insurance} />}

        <Pressable
          disabled={nights === 0}
          onPress={onClose}
          className="mt-5 h-14 items-center justify-center rounded-full active:opacity-90"
          style={{ backgroundColor: nights > 0 ? colors.sky : colors.skyFaded }}
        >
          <Text className="font-bold text-white" style={typography.emphasis}>
            Book now
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
