import { Ionicons } from '@expo/vector-icons';

import { PressableScale } from '@/components';
import { palette } from '@/theme';

type CircleIconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export function CircleIconButton({ icon, onPress }: CircleIconButtonProps) {
  return (
    <PressableScale
      scaleTo={0.9}
      className="h-11 w-11 items-center justify-center rounded-full bg-white"
      onPress={onPress}
    >
      <Ionicons name={icon} size={19} color={palette.ink} />
    </PressableScale>
  );
}
