import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  Blur,
  Canvas,
  Group,
  Paint,
  RoundedRect,
  Text as SkiaText,
  matchFont,
} from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';
import { colors, skiaFontFamily } from '@/theme';
import {
  AMOUNT_BASELINE,
  AMOUNT_SIZE,
  BALANCE_CANVAS_HEIGHT,
  BLUR_MAX,
  GAIN_BASELINE,
  GAIN_SIZE,
  LABEL_BASELINE,
  LABEL_SIZE,
  PILL_HEIGHT,
} from '@/constants/balanceCanvas';
import { INT_DIGITS } from '@/constants/balanceDigits';
import { computeBalanceLayout } from '../../helpers/computeBalanceLayout';
import type { AnimatedBalanceProps, BalanceSharedValues } from './AnimatedBalance.types';
import { MorphDigit } from './MorphDigit';

export function AnimatedBalance({
  gain,
  time,
  morph,
  cycling,
  settle,
  digits,
}: AnimatedBalanceProps) {
  const { width } = useWindowDimensions();

  const fonts = useMemo(
    () => ({
      amount: matchFont({
        fontFamily: skiaFontFamily,
        fontSize: AMOUNT_SIZE,
        fontStyle: 'normal',
        fontWeight: 'bold',
      }),
      label: matchFont({
        fontFamily: skiaFontFamily,
        fontSize: LABEL_SIZE,
        fontStyle: 'normal',
        fontWeight: '500',
      }),
      gain: matchFont({
        fontFamily: skiaFontFamily,
        fontSize: GAIN_SIZE,
        fontStyle: 'normal',
        fontWeight: '600',
      }),
    }),
    [],
  );

  const layout = useMemo(
    () => computeBalanceLayout(fonts, width, gain),
    [fonts, width, gain],
  );

  const blur = useDerivedValue(() => morph.value * BLUR_MAX);

  const gainColor = gain.amount >= 0 ? colors.gain : colors.loss;
  const pillColor = gain.amount >= 0 ? colors.gainSoft : '#FBE4E4';

  const sharedValues: BalanceSharedValues = {
    time,
    morph,
    cycling,
    settle,
    digits,
  };

  return (
    <Canvas style={{ width, height: BALANCE_CANVAS_HEIGHT }}>
      <Group
        layer={
          <Paint>
            <Blur blur={blur} />
          </Paint>
        }
      >
        <SkiaText
          x={layout.labelX}
          y={LABEL_BASELINE}
          text="Total Balance"
          font={fonts.label}
          color={colors.subtle}
        />

        {layout.staticChars.map((item) => (
          <SkiaText
            key={item.char}
            x={item.x}
            y={AMOUNT_BASELINE}
            text={item.char}
            font={fonts.amount}
            color={item.color}
          />
        ))}
        {layout.digitX.map((x, i) => (
          <MorphDigit
            key={i}
            index={i}
            x={x}
            y={AMOUNT_BASELINE}
            font={fonts.amount}
            baseColor={i >= INT_DIGITS ? colors.cents : colors.ink}
            {...sharedValues}
          />
        ))}

        <SkiaText
          x={layout.gainX}
          y={GAIN_BASELINE}
          text={layout.gainText}
          font={fonts.gain}
          color={gainColor}
        />
        <RoundedRect
          x={layout.pillX}
          y={GAIN_BASELINE - GAIN_SIZE - (PILL_HEIGHT - GAIN_SIZE) / 2}
          width={layout.pillWidth}
          height={PILL_HEIGHT}
          r={PILL_HEIGHT / 2}
          color={pillColor}
        />
        <SkiaText
          x={layout.pctX}
          y={GAIN_BASELINE}
          text={layout.pctText}
          font={fonts.gain}
          color={gainColor}
        />
      </Group>
    </Canvas>
  );
}
