import { Feather } from '@expo/vector-icons';

import { palette } from '@/theme';

import { PressableScale } from '../PressableScale';
import { StepButtonProps } from './Stepper.types';

export function StepButton({ icon, onPress }: StepButtonProps) {
  return (
    <PressableScale
      hitSlop={6}
      scaleTo={0.88}
      className="h-9 w-9 items-center justify-center rounded-full bg-chip"
      onPress={onPress}
    >
      <Feather name={icon} size={15} color={palette.ink} />
    </PressableScale>
  );
}
