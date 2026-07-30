import { Text, TextInput, View } from 'react-native';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';

import { palette } from '@/theme';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type PriceBoundsRowProps = {
  lowDisplay: SharedValue<number>;
  highDisplay: SharedValue<number>;
  initialLow: number;
  initialHigh: number;
};

function formatPrice(value: number) {
  'worklet';
  const n = Math.round(value);
  return n >= 1000 ? `$${Math.floor(n / 1000)},${`${n % 1000}`.padStart(3, '0')}` : `$${n}`;
}

type PriceBoundProps = {
  label: string;
  display: SharedValue<number>;
  initialValue: number;
};

function PriceBound({ label, display, initialValue }: PriceBoundProps) {
  const animatedProps = useAnimatedProps(() => ({ text: formatPrice(display.value) }) as never);

  return (
    <View className="flex-1">
      <Text className="mb-1.5 font-jakarta text-[12px] text-muted">{label}</Text>
      <View className="h-12 justify-center rounded-full border border-line px-4">
        <AnimatedTextInput
          editable={false}
          defaultValue={formatPrice(initialValue)}
          animatedProps={animatedProps}
          style={{
            fontFamily: 'PlusJakartaSans_500Medium',
            fontSize: 14,
            color: palette.ink,
            padding: 0,
          }}
        />
      </View>
    </View>
  );
}

export function PriceBoundsRow({
  lowDisplay,
  highDisplay,
  initialLow,
  initialHigh,
}: PriceBoundsRowProps) {
  return (
    <View className="mt-3 flex-row gap-3">
      <PriceBound label="Min price" display={lowDisplay} initialValue={initialLow} />
      <PriceBound label="Max price" display={highDisplay} initialValue={initialHigh} />
    </View>
  );
}
