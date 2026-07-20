import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/theme/colors';

export default function CircleActionButton() {
  return (
    <Pressable className="h-11 w-11 items-center justify-center rounded-full bg-ink active:opacity-80">
      <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
        <Path
          d="M7 17 17 7M9 7h8v8"
          stroke={colors.white}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
}
