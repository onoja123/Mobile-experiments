import React, { useEffect, useMemo } from 'react';
import {
  Canvas,
  LinearGradient,
  Rect,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import qrcode from 'qrcode-generator';
import Animated, {
  FadeOut,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { colors, iosEaseInOut, springs } from '@/theme';

const SWEEP_DELAY_MS = 650;
const SWEEP_MS = 850;

function qrIn() {
  'worklet';
  return {
    initialValues: { opacity: 0, transform: [{ scale: 0.92 }] },
    animations: {
      opacity: withTiming(1, { duration: 280 }),
      transform: [{ scale: withSpring(1, springs.pop) }],
    },
  };
}

type QrCodeProps = {
  value: string;
  size: number;
};

type QrModule = {
  x: number;
  y: number;
};

export function QrCode({ value, size }: QrCodeProps) {
  const { modules, cell } = useMemo(() => {
    const qr = qrcode(0, 'M');
    qr.addData(value);
    qr.make();
    const count = qr.getModuleCount();
    const cellSize = size / count;
    const dark: QrModule[] = [];
    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (qr.isDark(row, col)) {
          dark.push({ x: col * cellSize, y: row * cellSize });
        }
      }
    }
    return { modules: dark, cell: cellSize };
  }, [value, size]);

  const sweep = useSharedValue(-0.6);
  useEffect(() => {
    sweep.value = -0.6;
    sweep.value = withDelay(
      SWEEP_DELAY_MS,
      withTiming(1.6, { duration: SWEEP_MS, easing: iosEaseInOut }),
    );
  }, [value, sweep]);

  const sweepStart = useDerivedValue(() =>
    vec(sweep.value * size, sweep.value * size - size * 0.4),
  );
  const sweepEnd = useDerivedValue(() =>
    vec(sweep.value * size + size * 0.45, sweep.value * size + size * 0.05),
  );

  const inset = cell * 0.08;
  const dot = cell * 0.84;
  const radius = cell * 0.3;

  return (
    <Animated.View
      key={value}
      entering={qrIn}
      exiting={FadeOut.duration(140)}
      accessible
      accessibilityLabel="QR code for your wallet address"
    >
      <Canvas style={{ width: size, height: size }}>
        {modules.map((module) => (
          <RoundedRect
            key={`${module.x}-${module.y}`}
            x={module.x + inset}
            y={module.y + inset}
            width={dot}
            height={dot}
            r={radius}
            color={colors.ink}
          />
        ))}
        <Rect x={0} y={0} width={size} height={size}>
          <LinearGradient
            start={sweepStart}
            end={sweepEnd}
            colors={[
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0.7)',
              'rgba(255,255,255,0)',
            ]}
          />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
