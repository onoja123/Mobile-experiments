import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  Path,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import {
  Easing,
  cancelAnimation,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { colors } from '@/theme';

const ORBIT_MS = 3600;

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    position: 'absolute',
  },
});

type CountdownRingProps = {
  size: number;
  progress: number;
  paused?: boolean;
};

export function CountdownRing({ size, progress, paused = false }: CountdownRingProps) {
  const rotation = useSharedValue(0);
  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1100, easing: Easing.out(Easing.cubic) });
  }, [progress, fill]);

  useEffect(() => {
    if (paused) {
      cancelAnimation(rotation);
      return undefined;
    }
    rotation.value = withRepeat(
      withTiming(rotation.value + Math.PI * 2, {
        duration: ORBIT_MS,
        easing: Easing.linear,
      }),
      -1,
    );
    return () => cancelAnimation(rotation);
  }, [paused, rotation]);

  const inset = 5;
  const arc = useMemo(() => {
    const path = Skia.Path.Make();
    path.addArc(
      { x: inset, y: inset, width: size - inset * 2, height: size - inset * 2 },
      -90,
      360,
    );
    return path;
  }, [size]);

  const comet = useMemo(() => {
    const path = Skia.Path.Make();
    path.addArc(
      { x: inset, y: inset, width: size - inset * 2, height: size - inset * 2 },
      -90,
      52,
    );
    return path;
  }, [size]);

  const fillEnd = useDerivedValue(() => fill.value);
  const orbit = useDerivedValue(() => [{ rotate: rotation.value }]);
  const center = size / 2;

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Canvas style={[styles.canvas, { width: size, height: size }]}>
        <Circle
          c={vec(center, center)}
          r={center - inset}
          style="stroke"
          strokeWidth={3.5}
          color={colors.chip}
        />
        <Path
          path={arc}
          style="stroke"
          strokeWidth={3.5}
          strokeCap="round"
          color={colors.accent}
          start={0}
          end={fillEnd}
        />
        <Group origin={vec(center, center)} transform={orbit}>
          <Path
            path={comet}
            style="stroke"
            strokeWidth={3.5}
            strokeCap="round"
            color={colors.accentPurple}
          >
            <BlurMask blur={3} style="solid" />
          </Path>
        </Group>
      </Canvas>
      <Feather name="clock" size={size * 0.3} color={colors.subtle} />
    </View>
  );
}
