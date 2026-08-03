import Svg, { Circle, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

import { AVATAR_SIZE } from '@/constants/layout';
import { getInitials } from '@/helpers/getInitials';
import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { AvatarProps } from './Avatar.types';

export default function Avatar({ name, size = AVATAR_SIZE }: AvatarProps) {
  const radius = size / 2;
  const fontSize = size * 0.36;

  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="avatarBody" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#343434" />
          <Stop offset="1" stopColor="#0A0A0A" />
        </LinearGradient>
      </Defs>
      <Circle cx={radius} cy={radius} r={radius} fill="url(#avatarBody)" />
      <SvgText
        x={radius}
        y={radius}
        dy={fontSize * 0.36}
        textAnchor="middle"
        fontSize={fontSize}
        fontFamily={fonts.strong}
        fill={colors.white}
      >
        {getInitials(name)}
      </SvgText>
    </Svg>
  );
}
