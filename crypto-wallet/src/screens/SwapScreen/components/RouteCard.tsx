import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Canvas, Circle, Rect, useClock } from '@shopify/react-native-skia';
import Animated, { FadeIn, FadeOut, useDerivedValue } from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { FadeSwapText } from '@/components/FadeSwapText';
import { TokenIcon } from '@/components/TokenIcon';
import type { Token } from '@/interfaces/token.interface';
import { colors } from '@/theme';
import { resolveSwapVenue } from '../helpers/resolveSwapVenue';

const TRACK_HEIGHT = 24;
const CYCLE_MS = 1700;
const PHASES = [0, 0.38, 0.72];

type RouteParticleProps = {
  clock: SharedValue<number>;
  phase: number;
  width: number;
};

function RouteParticle({ clock, phase, width }: RouteParticleProps) {
  const t = useDerivedValue(() => (clock.value / CYCLE_MS + phase) % 1);
  const cx = useDerivedValue(() => t.value * width);
  const fade = useDerivedValue(() => Math.sin(Math.PI * t.value));
  const glow = useDerivedValue(() => fade.value * 0.22);
  const core = useDerivedValue(() => fade.value * 0.95);

  return (
    <>
      <Circle cx={cx} cy={TRACK_HEIGHT / 2} r={5.5} color={colors.accent} opacity={glow} />
      <Circle cx={cx} cy={TRACK_HEIGHT / 2} r={2.2} color={colors.accent} opacity={core} />
    </>
  );
}

type RouteCardProps = {
  fromToken: Token;
  toToken: Token;
};

export function RouteCard({ fromToken, toToken }: RouteCardProps) {
  const clock = useClock();
  const [trackWidth, setTrackWidth] = useState(0);

  const venue = resolveSwapVenue(fromToken, toToken);

  return (
    <View
      className="flex-row items-center rounded-[22px] bg-white px-5 py-4"
      accessible
      accessibilityLabel={`Route: ${fromToken.symbol} to ${toToken.symbol} via ${venue}`}
    >
      <Animated.View
        key={fromToken.id}
        entering={FadeIn.duration(220)}
        exiting={FadeOut.duration(140)}
      >
        <TokenIcon id={fromToken.id} size={32} />
      </Animated.View>

      <View
        className="mx-3 flex-1"
        style={{ height: TRACK_HEIGHT }}
        onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
      >
        {trackWidth > 0 && (
          <Canvas style={{ width: trackWidth, height: TRACK_HEIGHT }}>
            <Rect
              x={0}
              y={TRACK_HEIGHT / 2 - 0.5}
              width={trackWidth}
              height={1}
              color={colors.outline}
            />
            {PHASES.map((phase) => (
              <RouteParticle key={phase} clock={clock} phase={phase} width={trackWidth} />
            ))}
          </Canvas>
        )}
      </View>

      <Animated.View
        key={toToken.id}
        entering={FadeIn.duration(220)}
        exiting={FadeOut.duration(140)}
      >
        <TokenIcon id={toToken.id} size={32} />
      </Animated.View>

      <View className="ml-4 items-end">
        <Text className="text-[10px] font-semibold uppercase tracking-wide text-subtle">
          via
        </Text>
        <FadeSwapText text={venue} className="text-[13px] font-bold text-ink" />
      </View>
    </View>
  );
}
