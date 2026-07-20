import React, { memo, useMemo } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { randomTelemetryLine } from '@/helpers/randomTelemetryLine';
import { fonts, palette } from '@/theme';
import { createSeededRandom } from '@/utils/seededRandom';

import { generateGalaxy } from '../generateGalaxy';

const SPINNER_FRAMES = ['|', '/', '—', '\\'];

function CornerBracket({ position }: { position: ViewStyle }) {
  return (
    <View
      style={[{ position: 'absolute', width: 22, height: 22, borderColor: palette.cream }, position]}
    />
  );
}

type GalaxyFieldProps = { tick: number; width: number; height: number };

export const GalaxyField = memo(function GalaxyField({ tick, width, height }: GalaxyFieldProps) {
  const fieldWidth = width - 32;
  const { particles, glyphs } = useMemo(
    () => generateGalaxy(tick, fieldWidth, height),
    [tick, fieldWidth],
  );
  const random = createSeededRandom(tick * 883 + 21);
  return (
    <View style={{ width: fieldWidth, height, alignSelf: 'center' }}>
      <CornerBracket position={{ left: 0, top: 0, borderLeftWidth: 1.5, borderTopWidth: 1.5 }} />
      <CornerBracket position={{ right: 0, top: 0, borderRightWidth: 1.5, borderTopWidth: 1.5 }} />
      <CornerBracket position={{ left: 0, bottom: 0, borderLeftWidth: 1.5, borderBottomWidth: 1.5 }} />
      <CornerBracket position={{ right: 0, bottom: 0, borderRightWidth: 1.5, borderBottomWidth: 1.5 }} />
      {particles.map((particle, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
        />
      ))}
      {glyphs.map((glyph, i) => (
        <Text
          key={`c${i}`}
          style={{
            position: 'absolute',
            left: glyph.x,
            top: glyph.y,
            fontFamily: fonts.mono,
            fontSize: 8,
            color: palette.creamFaded,
          }}
        >
          {glyph.char}
        </Text>
      ))}
      <View style={{ position: 'absolute', left: 10, top: 8 }}>
        {[0, 1, 2].map((i) => (
          <Text key={i} style={telemetryText}>
            {randomTelemetryLine(random)}
          </Text>
        ))}
      </View>
      <Text
        style={{
          position: 'absolute',
          right: 26,
          top: 14,
          fontFamily: fonts.mono,
          fontSize: 14,
          color: palette.cream,
        }}
      >
        {SPINNER_FRAMES[tick % SPINNER_FRAMES.length]}
      </Text>
      <View style={{ position: 'absolute', right: 10, bottom: 10, alignItems: 'flex-start' }}>
        {[0, 1, 2].map((i) => (
          <Text key={i} style={telemetryText}>
            {randomTelemetryLine(random)}
          </Text>
        ))}
      </View>
    </View>
  );
});

const telemetryText = {
  fontFamily: fonts.mono,
  fontSize: 6.5,
  lineHeight: 9,
  color: palette.creamMuted,
};
