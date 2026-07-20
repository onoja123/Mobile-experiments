import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  BlurMask,
  Canvas,
  LinearGradient,
  RoundedRect,
  useClock,
  vec,
} from '@shopify/react-native-skia';
import { useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { RollingNumber } from '@/components/RollingNumber';
import { colors, springs } from '@/theme';
import { DemandMeterParticles } from './DemandMeterParticles';

const TRACK_HEIGHT = 16;
const CANVAS_HEIGHT = 36;
const TRACK_TOP = (CANVAS_HEIGHT - TRACK_HEIGHT) / 2;
const FILL_COLORS = [colors.accent, colors.accentPurple, colors.accentPink];

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    backgroundColor: colors.card,
    padding: 20,
  },
  canvas: {
    height: CANVAS_HEIGHT,
    marginHorizontal: -2,
  },
});

type DemandMeterProps = {
  percent: number;
};

export function DemandMeter({ percent }: DemandMeterProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const clock = useClock();
  const fillWidth = useSharedValue(0);

  useEffect(() => {
    if (trackWidth === 0) return;
    fillWidth.value = withSpring((percent / 100) * trackWidth, springs.roll);
  }, [percent, trackWidth, fillWidth]);

  const gradientEnd = useDerivedValue(() => vec(Math.max(fillWidth.value, 1), 0));

  return (
    <View style={styles.card}>
      <View className="flex-row items-end justify-between">
        <View>
          <Text className="text-[13px] font-semibold text-subtle">Subscription</Text>
          <Text className="mt-0.5 text-[12px] text-cents">Demand across all investors</Text>
        </View>
        <View className="flex-row items-end">
          <RollingNumber
            text={`${Math.round(percent)}`}
            fontSize={30}
            color={colors.ink}
            keyMode="value"
            accessibilityLabel={`${Math.round(percent)} percent subscribed`}
          />
          <Text className="pb-[3px] text-[18px] font-bold text-subtle">%</Text>
        </View>
      </View>

      <View
        className="mt-4"
        onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
      >
        {trackWidth > 0 && (
          <Canvas style={styles.canvas}>
            <RoundedRect
              x={0}
              y={TRACK_TOP}
              width={trackWidth}
              height={TRACK_HEIGHT}
              r={TRACK_HEIGHT / 2}
              color={colors.chip}
            />
            <RoundedRect
              x={0}
              y={TRACK_TOP}
              width={fillWidth}
              height={TRACK_HEIGHT}
              r={TRACK_HEIGHT / 2}
              opacity={0.55}
            >
              <LinearGradient start={vec(0, 0)} end={gradientEnd} colors={FILL_COLORS} />
              <BlurMask blur={9} style="normal" />
            </RoundedRect>
            <RoundedRect
              x={0}
              y={TRACK_TOP}
              width={fillWidth}
              height={TRACK_HEIGHT}
              r={TRACK_HEIGHT / 2}
            >
              <LinearGradient start={vec(0, 0)} end={gradientEnd} colors={FILL_COLORS} />
            </RoundedRect>
            <DemandMeterParticles width={fillWidth} clock={clock} />
          </Canvas>
        )}
      </View>

      <View className="mt-3 flex-row justify-between">
        <Text className="text-[12px] text-subtle">Oversubscribed 2.4x</Text>
        <Text className="text-[12px] font-semibold text-gain">Filling fast</Text>
      </View>
    </View>
  );
}
