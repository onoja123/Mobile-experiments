import React from 'react';
import { Text, View } from 'react-native';

import { GridBackground } from '@/components/GridBackground';
import { TerminalScene } from '@/enums';
import { fonts, palette } from '@/theme';
import { SceneScreenProps } from '@/types';
import { createSeededRandom, randomDigits, randomItem } from '@/utils/seededRandom';

import { CheckerField } from './components/CheckerField';
import { DotField } from './components/DotField';
import { LetterTable } from './components/LetterTable';
import { NoiseBlob } from './components/NoiseBlob';
import { SystemLogPanel } from './components/SystemLogPanel';

const SCENE_COUNT = 8;

export function TerminalScreen({ tick, width, height }: SceneScreenProps) {
  const scene: TerminalScene = tick % SCENE_COUNT;
  const random = createSeededRandom(tick * 6151 + 44);
  const showFooter = scene <= TerminalScene.CheckerFieldWithHole;
  return (
    <View style={{ width, height, backgroundColor: palette.paper }}>
      <GridBackground width={width} height={height} step={9} color={palette.gridLineOnPaper} />
      {scene !== TerminalScene.SystemLog && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 6,
          }}
        >
          <Text style={headerText}>{`00:25:0${scene}`}</Text>
          <Text style={headerText}>24556 DR 5</Text>
        </View>
      )}
      <View style={{ flex: 1, paddingTop: scene === TerminalScene.SystemLog ? 12 : 0 }}>
        {scene === TerminalScene.SmallNoiseBlob && <NoiseBlob seed={tick} big={false} />}
        {scene === TerminalScene.LargeNoiseBlob && <NoiseBlob seed={tick} big />}
        {scene === TerminalScene.CheckerField && (
          <CheckerField seed={tick} hole={false} width={width} height={height - 75} />
        )}
        {scene === TerminalScene.CheckerFieldWithHole && (
          <CheckerField seed={tick} hole width={width} height={height - 75} />
        )}
        {scene === TerminalScene.LetterTable && (
          <LetterTable seed={tick} width={width} height={height - 60} />
        )}
        {scene === TerminalScene.DotField && (
          <DotField seed={tick} variant={0} width={width} height={height - 60} />
        )}
        {scene === TerminalScene.DotFieldWithBlockLetter && (
          <DotField seed={tick} variant={1} width={width} height={height - 60} />
        )}
        {scene === TerminalScene.SystemLog && <SystemLogPanel seed={tick} width={width} />}
      </View>
      {showFooter && (
        <View style={{ paddingHorizontal: 60, paddingBottom: 18 }}>
          <Text
            style={{
              fontFamily: fonts.mono,
              fontSize: 19,
              fontWeight: '600',
              color: palette.ink,
              letterSpacing: 1,
            }}
          >
            {`${randomDigits(random, 7)} | ${randomDigits(random, 8)}`}
          </Text>
          <Text style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: '600', color: palette.ink }}>
            {randomItem(random, ['-----|', '--   |', '- - -|'])}
          </Text>
        </View>
      )}
    </View>
  );
}

const headerText = {
  fontFamily: fonts.mono,
  fontSize: 17,
  fontWeight: '600' as const,
  color: palette.ink,
  letterSpacing: 1,
};
