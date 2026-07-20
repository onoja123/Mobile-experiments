import React from 'react';
import { View, ViewStyle } from 'react-native';

import { palette } from '@/theme';

import { SegmentKey, SevenSegmentCharacterProps } from './SevenSegmentDisplay.types';
import { DIGIT_SEGMENTS } from './digitSegments';

export function SevenSegmentCharacter({
  char,
  size,
  color = palette.ink,
}: SevenSegmentCharacterProps) {
  const height = size;
  const width = size * 0.64;
  const thickness = size * 0.15;
  const halfHeight = height / 2 + thickness / 2;

  const segmentRects: Record<SegmentKey, ViewStyle> = {
    A: { top: 0, left: 0, width, height: thickness },
    B: { top: 0, right: 0, width: thickness, height: halfHeight },
    C: { bottom: 0, right: 0, width: thickness, height: halfHeight },
    D: { bottom: 0, left: 0, width, height: thickness },
    E: { bottom: 0, left: 0, width: thickness, height: halfHeight },
    F: { top: 0, left: 0, width: thickness, height: halfHeight },
    G: { top: height / 2 - thickness / 2, left: 0, width, height: thickness },
  };

  const diagonalLength = Math.hypot(width - thickness, height - thickness * 0.6);
  const diagonalDegrees = (Math.atan2(width - thickness, height - thickness * 0.6) * 180) / Math.PI;
  const diagonal = (direction: 1 | -1) => (
    <View
      style={{
        position: 'absolute',
        left: width / 2 - thickness / 2,
        top: height / 2 - diagonalLength / 2,
        width: thickness * 0.85,
        height: diagonalLength,
        backgroundColor: color,
        transform: [{ rotate: `${direction * diagonalDegrees}deg` }],
      }}
    />
  );

  let content: React.ReactNode = null;
  if (char === '/') content = diagonal(1);
  else if (char === '\\') content = diagonal(-1);
  else if (char === '|')
    content = (
      <View
        style={{
          position: 'absolute',
          left: width / 2 - thickness / 2,
          top: 0,
          width: thickness,
          height,
          backgroundColor: color,
        }}
      />
    );
  else if (char === '-')
    content = (
      <View
        style={[
          { position: 'absolute', backgroundColor: color },
          { top: height / 2 - thickness / 2, left: 0, width, height: thickness },
        ]}
      />
    );
  else {
    const segments = DIGIT_SEGMENTS[char] ?? [];
    content = (
      <>
        {segments.map((segment) => (
          <View
            key={segment}
            style={[{ position: 'absolute', backgroundColor: color }, segmentRects[segment]]}
          />
        ))}
        {char === '0' && diagonal(1)}
      </>
    );
  }

  return <View style={{ width, height }}>{content}</View>;
}
