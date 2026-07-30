import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const FADE_MS = 150;
const SLIDE_PX = 6;

type CrossfadeTextProps = {
  text: string;
  className?: string;
};

export function CrossfadeText({ text, className }: CrossfadeTextProps) {
  const [previous, setPrevious] = useState('');
  const prevTextRef = useRef(text);
  const progress = useSharedValue(1);

  useEffect(() => {
    if (text === prevTextRef.current) return;
    setPrevious(prevTextRef.current);
    prevTextRef.current = text;
    progress.value = 0;
    progress.value = withTiming(1, { duration: FADE_MS });
  }, [text, progress]);

  const outStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    transform: [{ translateY: -SLIDE_PX * progress.value }],
  }));
  const inStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: SLIDE_PX * (1 - progress.value) }],
  }));

  return (
    <View>
      {previous !== '' && (
        <Animated.Text className={className} style={[outStyle, { position: 'absolute' }]}>
          {previous}
        </Animated.Text>
      )}
      <Animated.Text className={className} style={inStyle}>
        {text}
      </Animated.Text>
    </View>
  );
}
