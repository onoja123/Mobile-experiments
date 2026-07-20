import React, { memo } from 'react';
import { View, type TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { buildRollingCells } from './buildRollingCells';
import { RollingDigit } from './RollingDigit';
import type { RollingNumberProps } from './RollingNumber.types';
import { cellLayout, rollIn, rollOut } from './rollTransitions';

export const RollingNumber = memo(function RollingNumber({
  text,
  fontSize,
  color,
  fontWeight = '700',
  keyMode = 'typed',
  accessibilityLabel,
}: RollingNumberProps) {
  const height = Math.round(fontSize * 1.2);
  const textStyle: TextStyle = {
    fontSize,
    height,
    lineHeight: height,
    color,
    fontWeight,
    fontVariant: ['tabular-nums'],
  };

  return (
    <View
      className="flex-row overflow-hidden"
      style={{ height }}
      accessible
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? text}
    >
      {buildRollingCells(text, keyMode).map((cell) =>
        /\d/.test(cell.char) ? (
          <Animated.View
            key={cell.key}
            layout={cellLayout}
            entering={rollIn(height)}
            exiting={rollOut(height)}
          >
            <RollingDigit
              digit={Number(cell.char)}
              height={height}
              textStyle={textStyle}
            />
          </Animated.View>
        ) : (
          <Animated.Text
            key={cell.key}
            layout={cellLayout}
            entering={rollIn(height)}
            exiting={rollOut(height)}
            allowFontScaling={false}
            style={textStyle}
          >
            {cell.char}
          </Animated.Text>
        ),
      )}
    </View>
  );
});
