import { Pressable, useColorScheme } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import GlassSurface from '@/components/GlassSurface';
import { colors } from '@/theme';
import { CircleActionButtonProps } from './CircleActionButton.types';

const SIZE = 48;

export default function CircleActionButton({ icon, onPress }: CircleActionButtonProps) {
  const inkColor = useColorScheme() === 'dark' ? colors.white : colors.ink;
  return (
    <GlassSurface
      style={{ width: SIZE, height: SIZE, borderRadius: SIZE / 2, overflow: 'hidden' }}
    >
      <Pressable className="flex-1 items-center justify-center" onPress={onPress}>
        {icon === 'locate' ? (
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Circle cx={12} cy={12} r={6.2} stroke={inkColor} strokeWidth={1.7} />
            <Circle cx={12} cy={12} r={1.6} fill={inkColor} />
            <Path
              d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3"
              stroke={inkColor}
              strokeWidth={1.7}
              strokeLinecap="round"
            />
          </Svg>
        ) : (
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M8.5 4.5 5 8l3.5 3.5M5 8h14M15.5 12.5 19 16l-3.5 3.5M19 16H5"
              stroke={inkColor}
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}
      </Pressable>
    </GlassSurface>
  );
}
