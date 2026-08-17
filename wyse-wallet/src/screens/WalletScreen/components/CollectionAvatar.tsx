import Svg, { Circle, ClipPath, Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { CollectionAvatarProps } from './CollectionAvatar.types';

export default function CollectionAvatar({ id, size = 34 }: CollectionAvatarProps) {
  if (id === 'maskfolk') {
    return (
      <Svg width={size} height={size} viewBox="0 0 40 40">
        <Defs>
          <LinearGradient id="maskBg" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FF7AC6" />
            <Stop offset="1" stopColor="#6C3FE0" />
          </LinearGradient>
          <ClipPath id="maskClip">
            <Circle cx={20} cy={20} r={20} />
          </ClipPath>
        </Defs>
        <Circle cx={20} cy={20} r={20} fill="url(#maskBg)" />
        <Rect x={14} y={11} width={13} height={24} rx={6.5} fill="#2E5BFF" clipPath="url(#maskClip)" />
        <Rect x={14} y={17} width={13} height={5} rx={2.5} fill="#141B33" />
      </Svg>
    );
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <Defs>
        <ClipPath id="dahliaClip">
          <Circle cx={20} cy={20} r={20} />
        </ClipPath>
      </Defs>
      <Circle cx={20} cy={20} r={20} fill="#EFE9DF" />
      <Circle cx={25} cy={13} r={8} fill="#F2762E" clipPath="url(#dahliaClip)" />
      <Circle cx={11} cy={23} r={6.5} fill="#4C7A3F" clipPath="url(#dahliaClip)" />
      <Circle cx={25} cy={28} r={7} fill="#FFFFFF" clipPath="url(#dahliaClip)" />
      <Circle cx={14} cy={11} r={4.5} fill="#3A3A38" clipPath="url(#dahliaClip)" />
    </Svg>
  );
}
