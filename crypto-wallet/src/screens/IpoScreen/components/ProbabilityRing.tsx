import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlurMask, Canvas, Circle, Path, Skia, vec } from '@shopify/react-native-skia';
import {
  interpolateColor,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { FadeSwapText } from '@/components/FadeSwapText';
import type { AllocationTier } from '@/enums/allocationTier.enum';
import { colors, springs } from '@/theme';

const AMBER = '#E8A33D';

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    position: 'absolute',
  },
});

type ProbabilityRingProps = {
  size: number;
  tier: AllocationTier;
  score: number;
};

export function ProbabilityRing({ size, tier, score }: ProbabilityRingProps) {
  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withSpring(score, springs.roll);
  }, [score, fill]);

  const inset = 7;
  const arc = useMemo(() => {
    const path = Skia.Path.Make();
    path.addArc(
      { x: inset, y: inset, width: size - inset * 2, height: size - inset * 2 },
      -90,
      360,
    );
    return path;
  }, [size]);

  const end = useDerivedValue(() => fill.value);
  const color = useDerivedValue(() =>
    interpolateColor(fill.value, [0.3, 0.6, 0.92], [colors.loss, AMBER, colors.gain]),
  );
  const center = size / 2;

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Canvas style={[styles.canvas, { width: size, height: size }]}>
        <Circle
          c={vec(center, center)}
          r={center - inset}
          style="stroke"
          strokeWidth={5}
          color={colors.chip}
        />
        <Path
          path={arc}
          style="stroke"
          strokeWidth={5}
          strokeCap="round"
          color={color}
          start={0}
          end={end}
          opacity={0.45}
        >
          <BlurMask blur={6} style="solid" />
        </Path>
        <Path
          path={arc}
          style="stroke"
          strokeWidth={5}
          strokeCap="round"
          color={color}
          start={0}
          end={end}
        />
      </Canvas>
      <FadeSwapText text={tier} className="text-[16px] font-bold text-ink" />
      <Text className="text-[10px] text-subtle">probability</Text>
    </View>
  );
}
