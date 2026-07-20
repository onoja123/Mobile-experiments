import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Atlas, Blur, Canvas, Group, Image } from '@shopify/react-native-skia';
import {
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { DISSOLVE_DURATION_MS, FROST_EFFECT, MATERIALIZE_DURATION_MS } from '@/constants';
import { useDissolveParticles } from '@/hooks/useDissolveParticles';

import type { DissolveCanvasProps } from './DissolveCanvas.types';

export function DissolveCanvas({ job, onDone }: DissolveCanvasProps) {
  const { image, x, y, width, height, reverse } = job;
  const progress = useSharedValue(reverse ? 1 : 0);

  useEffect(() => {
    const finish = () => onDone(job);
    progress.value = withTiming(
      reverse ? 0 : 1,
      {
        duration: reverse ? MATERIALIZE_DURATION_MS : DISSOLVE_DURATION_MS,
        easing: Easing.linear,
      },
      (finished) => {
        if (finished) runOnJS(finish)();
      },
    );
  }, [job, onDone, progress, reverse]);

  const { sprites, transforms, colors } = useDissolveParticles(job, progress);

  const frostSigma = useDerivedValue(() =>
    interpolate(progress.value, [0, FROST_EFFECT.blurEnd], [0, FROST_EFFECT.maxBlur], Extrapolation.CLAMP),
  );
  const frostOpacity = useDerivedValue(() =>
    interpolate(progress.value, [0, FROST_EFFECT.hold, FROST_EFFECT.clear], [1, 1, 0], Extrapolation.CLAMP),
  );

  return (
    <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
      <Atlas
        image={image}
        sprites={sprites}
        transforms={transforms}
        colors={colors}
        colorBlendMode="modulate"
      />
      <Group opacity={frostOpacity}>
        <Image image={image} x={x} y={y} width={width} height={height} fit="fill">
          <Blur blur={frostSigma} />
        </Image>
      </Group>
    </Canvas>
  );
}
