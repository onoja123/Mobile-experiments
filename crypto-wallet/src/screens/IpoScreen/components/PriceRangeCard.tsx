import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  BlurMask,
  Canvas,
  Circle,
  LinearGradient,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import { useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { RollingNumber } from '@/components/RollingNumber';
import { colors, springs } from '@/theme';
import { nextPriceEstimate } from '../helpers/nextPriceEstimate';

const UPDATE_MS = 4200;
const CANVAS_HEIGHT = 44;
const TRACK_HEIGHT = 8;
const TRACK_Y = (CANVAS_HEIGHT - TRACK_HEIGHT) / 2;
const KNOB_RADIUS = 9;
const EDGE = KNOB_RADIUS + 4;

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    backgroundColor: colors.card,
    padding: 20,
  },
  canvas: {
    height: CANVAS_HEIGHT,
  },
});

type PriceRangeCardProps = {
  low: number;
  high: number;
};

export function PriceRangeCard({ low, high }: PriceRangeCardProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const [estimate, setEstimate] = useState(() => (low + high) / 2 + 0.2);
  const position = useSharedValue(0.5);

  useEffect(() => {
    const timer = setInterval(() => setEstimate(nextPriceEstimate(low, high)), UPDATE_MS);
    return () => clearInterval(timer);
  }, [low, high]);

  useEffect(() => {
    position.value = withSpring((estimate - low) / (high - low), springs.roll);
  }, [estimate, low, high, position]);

  const knobX = useDerivedValue(
    () => EDGE + position.value * Math.max(0, trackWidth - EDGE * 2),
  );
  const fillWidth = useDerivedValue(() => knobX.value);
  const gradientEnd = useDerivedValue(() => vec(Math.max(knobX.value, 1), 0));

  return (
    <View style={styles.card}>
      <Text className="text-[13px] font-semibold text-subtle">Price Range</Text>
      <View className="mt-2 flex-row items-center">
        <RollingNumber
          text={`$${low}`}
          fontSize={30}
          color={colors.ink}
          keyMode="value"
        />
        <Text className="mx-2.5 text-[24px] font-semibold text-cents">—</Text>
        <RollingNumber
          text={`$${high}`}
          fontSize={30}
          color={colors.ink}
          keyMode="value"
        />
      </View>

      <View
        className="mt-3"
        onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
      >
        {trackWidth > 0 && (
          <Canvas style={styles.canvas}>
            <RoundedRect
              x={0}
              y={TRACK_Y}
              width={trackWidth}
              height={TRACK_HEIGHT}
              r={TRACK_HEIGHT / 2}
              color={colors.chip}
            />
            <RoundedRect
              x={0}
              y={TRACK_Y}
              width={fillWidth}
              height={TRACK_HEIGHT}
              r={TRACK_HEIGHT / 2}
            >
              <LinearGradient
                start={vec(0, 0)}
                end={gradientEnd}
                colors={[colors.accentSoft, colors.accent]}
              />
            </RoundedRect>
            <Circle cx={knobX} cy={CANVAS_HEIGHT / 2} r={KNOB_RADIUS + 5} color={colors.accent} opacity={0.35}>
              <BlurMask blur={7} style="normal" />
            </Circle>
            <Circle cx={knobX} cy={CANVAS_HEIGHT / 2} r={KNOB_RADIUS} color="#FFFFFF" />
            <Circle cx={knobX} cy={CANVAS_HEIGHT / 2} r={4.5} color={colors.accent} />
          </Canvas>
        )}
      </View>

      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-[12px] text-subtle">Street estimate</Text>
        <RollingNumber
          text={`$${estimate.toFixed(2)}`}
          fontSize={14}
          color={colors.ink}
          keyMode="value"
          accessibilityLabel={`Street estimate $${estimate.toFixed(2)}`}
        />
      </View>
    </View>
  );
}
