import React from 'react';
import { View } from 'react-native';

import { BlockLetter } from '@/components/BlockLetter';
import { palette } from '@/theme';
import { SceneScreenProps } from '@/types';

import { CircuitBoard } from './components/CircuitBoard';
import { MarqueeBanner } from './components/MarqueeBanner';
import { WordSearchPanel } from './components/WordSearchPanel';

const BLOCK_LETTER_CYCLE = ['H', 'M', 'L', 'U', 'T', 'A', 'E', 'B'] as const;
const BLOCK_COUNT_CYCLE = 12;

export function InterlinkedScreen({ tick, width, height }: SceneScreenProps) {
  const circuitDensity = 0.7 + 0.5 * Math.abs(Math.sin(tick * 0.6));
  const blockCount = 1 + (tick % BLOCK_COUNT_CYCLE);
  return (
    <View style={{ width, height, backgroundColor: palette.paper, overflow: 'hidden' }}>
      <CircuitBoard seed={tick} width={width} height={height - 110} density={circuitDensity} />
      <WordSearchPanel tick={tick} width={width} />
      <View style={{ position: 'absolute', left: 28, bottom: 130 }}>
        <BlockLetter
          char={BLOCK_LETTER_CYCLE[tick % BLOCK_LETTER_CYCLE.length]}
          width={width * 0.27}
          height={width * 0.44}
          thickness={width * 0.072}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 74,
          left: 24,
          flexDirection: 'row',
          gap: 5,
        }}
      >
        {Array.from({ length: blockCount }, (_, i) => (
          <View key={i} style={{ width: 15, height: 15, backgroundColor: palette.ink }} />
        ))}
      </View>
      <View style={{ position: 'absolute', bottom: 28, left: 0, right: 0 }}>
        <MarqueeBanner width={width} />
      </View>
    </View>
  );
}
