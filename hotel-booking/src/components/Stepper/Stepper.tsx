import { Text, View } from 'react-native';

import { StepButton } from './StepButton';
import { StepperProps } from './Stepper.types';

export function Stepper({ value, min = 0, onChange }: StepperProps) {
  return (
    <View className="h-12 flex-row items-center justify-between rounded-full border border-line px-1.5">
      <StepButton icon="minus" onPress={() => onChange(Math.max(min, value - 1))} />
      <Text className="font-jakarta-semibold text-[14px] text-ink">{value}</Text>
      <StepButton icon="plus" onPress={() => onChange(value + 1)} />
    </View>
  );
}
