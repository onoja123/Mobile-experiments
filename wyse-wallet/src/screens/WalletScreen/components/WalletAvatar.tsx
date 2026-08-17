import Svg, { Circle, ClipPath, Defs } from 'react-native-svg';

import { WalletAvatarProps } from './WalletAvatar.types';

export default function WalletAvatar({ size = 44 }: WalletAvatarProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <ClipPath id="walletBall">
          <Circle cx={50} cy={50} r={50} />
        </ClipPath>
      </Defs>
      <Circle cx={50} cy={50} r={50} fill="#7FA832" />
      <Circle cx={43} cy={58} r={49} fill="#CDF463" clipPath="url(#walletBall)" />
    </Svg>
  );
}
