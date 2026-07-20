import React, { memo, useEffect } from 'react';
import { Text, type StyleProp, type TextStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { springs } from '@/theme';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

type RollingDigitProps = {
  digit: number;
  height: number;
  textStyle: StyleProp<TextStyle>;
};

export const RollingDigit = memo(function RollingDigit({
  digit,
  height,
  textStyle,
}: RollingDigitProps) {
  const offset = useSharedValue(-digit * height);

  useEffect(() => {
    offset.value = withSpring(-digit * height, springs.roll);
  }, [digit, height, offset]);

  const rollStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <Animated.View style={rollStyle}>
      {DIGITS.map((value) => (
        <Text key={value} allowFontScaling={false} style={textStyle}>
          {value}
        </Text>
      ))}
    </Animated.View>
  );
});
