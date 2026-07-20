import React, { useMemo } from 'react';
import { Canvas, Group, Path, Skia, useClock, vec } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';
import { colors } from '@/theme';
import type { LoadingRingProps } from './LoadingRing.types';
import { styles } from './styles';

export function LoadingRing({ size, color = colors.accent, strokeWidth = 3 }: LoadingRingProps) {
  const clock = useClock();

  const path = useMemo(() => {
    const p = Skia.Path.Make();
    p.addArc({ x: 5, y: 5, width: size - 10, height: size - 10 }, 0, 265);
    return p;
  }, [size]);

  const transform = useDerivedValue(() => [
    { rotate: (clock.value / 650) % (Math.PI * 2) },
  ]);

  return (
    <Canvas style={[styles.ring, { width: size, height: size }]}>
      <Group origin={vec(size / 2, size / 2)} transform={transform}>
        <Path
          path={path}
          style="stroke"
          strokeWidth={strokeWidth}
          strokeCap="round"
          color={color}
          opacity={0.9}
        />
      </Group>
    </Canvas>
  );
}
