import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { TERMINAL_LOG_LINES } from '@/data/terminalLogLines';
import { randomPercentLabel } from '@/helpers/randomPercentLabel';
import { fonts, palette } from '@/theme';
import { createSeededRandom, randomInt } from '@/utils/seededRandom';

import { Barcode } from './Barcode';
import { ShadeBlock } from './ShadeBlock';

type SystemLogPanelProps = { seed: number; width: number };

export const SystemLogPanel = memo(function SystemLogPanel({ seed, width }: SystemLogPanelProps) {
  const random = createSeededRandom(seed * 1299709 + 2);
  const start = randomInt(random, 0, TERMINAL_LOG_LINES.length - 1);
  const logLines = Array.from(
    { length: 12 },
    (_, i) => TERMINAL_LOG_LINES[(start + i) % TERMINAL_LOG_LINES.length],
  );
  const percent = () => randomPercentLabel(random);
  const halfWidth = (width - 44) / 2;
  return (
    <View style={{ paddingHorizontal: 14 }}>
      <View
        style={{ backgroundColor: palette.ink, borderRadius: 14, padding: 12, marginBottom: 14 }}
      >
        {logLines.map((line, i) => (
          <Text
            key={i}
            numberOfLines={1}
            style={{ fontFamily: fonts.mono, fontSize: 8.5, lineHeight: 12.5, color: palette.paper }}
          >
            {line}
          </Text>
        ))}
      </View>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View style={{ width: halfWidth }}>
          <ShadeBlock seed={seed + 9} rows={11} cols={12} />
          <View style={{ height: 10 }} />
          <Barcode seed={seed + 1} width={halfWidth} height={120} />
        </View>
        <View style={{ width: halfWidth }}>
          <ShadeBlock seed={seed + 4} rows={11} cols={12} />
          <View style={{ height: 10 }} />
          <Barcode seed={seed + 7} width={halfWidth} height={26} />
          <View style={{ height: 6 }} />
          <ShadeBlock seed={seed + 5} rows={8} cols={12} />
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={largeStatText}>{`RKU: ${percent()} WAV: ${percent()}`}</Text>
        <Text style={largeStatText}>{`RQM: ${percent()} ION: ${percent()}`}</Text>
        <View style={{ height: 10 }} />
        <Text style={smallStatText}>{`GTU: ${percent()}  I/O: ${percent()}  APU: ${percent()}`}</Text>
        <Text style={smallStatText}>{`NET: ${percent()}  FAN: ${percent()}  RET: ${percent()}`}</Text>
      </View>
    </View>
  );
});

const largeStatText = {
  fontFamily: fonts.mono,
  fontSize: 27,
  lineHeight: 34,
  fontWeight: '700' as const,
  color: palette.ink,
  letterSpacing: 1,
};

const smallStatText = {
  fontFamily: fonts.mono,
  fontSize: 16,
  lineHeight: 22,
  fontWeight: '700' as const,
  color: palette.ink,
};
