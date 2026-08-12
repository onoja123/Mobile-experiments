import Svg, { Circle, Path, Polygon } from 'react-native-svg';

import { Chain } from '@/enums/chain.enum';
import { colors } from '@/theme';
import { CoinIconProps } from './CoinIcon.types';

function EthGlyph({ color }: { color: string }) {
  return (
    <>
      <Polygon points="12,4.2 16.8,12.1 12,15 7.2,12.1" fill={color} opacity={0.9} />
      <Polygon points="12,16.4 16.8,13.5 12,19.8 7.2,13.5" fill={color} opacity={0.65} />
    </>
  );
}

export default function CoinIcon({ chain, size = 40 }: CoinIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {chain === Chain.Bitcoin && (
        <>
          <Circle cx={12} cy={12} r={12} fill={colors.bitcoin} />
          <Path
            d="M9.4 6.8h4.1c1.6 0 2.7.9 2.7 2.3 0 1-.6 1.8-1.5 2.1 1.2.2 2 1.1 2 2.4 0 1.6-1.2 2.6-3 2.6H9.4z M11.2 8.4v2.2h2c.8 0 1.3-.4 1.3-1.1s-.5-1.1-1.3-1.1z M11.2 12.2v2.4h2.3c.9 0 1.4-.4 1.4-1.2s-.6-1.2-1.5-1.2z"
            fill="#FFFFFF"
          />
          <Path d="M11 5.4v1.6M13.4 5.4v1.6M11 17v1.6M13.4 17v1.6" stroke="#FFFFFF" strokeWidth={1} />
        </>
      )}
      {chain === Chain.Tether && (
        <>
          <Circle cx={12} cy={12} r={12} fill={colors.tether} />
          <Path
            d="M6.8 6.9h10.4v2.4h-4v1.3c2.4.1 4.2.6 4.2 1.2 0 .6-1.8 1.1-4.2 1.2v4.6h-2.4V13c-2.4-.1-4.2-.6-4.2-1.2 0-.6 1.8-1.1 4.2-1.2V9.3h-4z"
            fill="#FFFFFF"
          />
        </>
      )}
      {chain === Chain.Ethereum && (
        <>
          <Circle cx={12} cy={12} r={12} fill={colors.ethereum} />
          <EthGlyph color="#FFFFFF" />
        </>
      )}
      {chain === Chain.EthereumLight && (
        <>
          <Circle cx={12} cy={12} r={12} fill={colors.ethereumLight} />
          <EthGlyph color="#101210" />
        </>
      )}
    </Svg>
  );
}
