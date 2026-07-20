import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SEGMENT_PILL_SPRING } from '@/constants/animation';
import type { SegmentedControlProps } from '@/interfaces';

export default function SegmentedControl({ segments, value, onChange }: SegmentedControlProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const offset = useSharedValue(0);
  const segmentWidth = (trackWidth - 8) / segments.length;

  const pillStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value * segmentWidth }],
  }));

  const select = (index: number) => {
    offset.value = withSpring(index, SEGMENT_PILL_SPRING);
    onChange(index);
  };

  return (
    <View
      className="mt-6 h-12 flex-row rounded-full bg-field p-1"
      onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
    >
      {trackWidth > 0 && (
        <Animated.View
          className="absolute left-1 top-1 h-10 rounded-full bg-white shadow-sm"
          style={[{ width: segmentWidth }, pillStyle]}
        />
      )}
      {segments.map((label, index) => (
        <Pressable
          key={label}
          className="flex-1 items-center justify-center"
          onPress={() => select(index)}
        >
          <Text
            className={`text-[15px] ${value === index ? 'font-bold text-ink' : 'font-medium text-muted'}`}
          >
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
