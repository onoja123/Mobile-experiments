import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { palette } from '@/theme';

import { StepButtonProps } from './Stepper.types';

export function StepButton({ icon, onPress }: StepButtonProps) {
  return (
    <Pressable
      hitSlop={6}
      className="h-9 w-9 items-center justify-center rounded-full bg-chip active:bg-line"
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Feather name={icon} size={15} color={palette.ink} />
    </Pressable>
  );
}
