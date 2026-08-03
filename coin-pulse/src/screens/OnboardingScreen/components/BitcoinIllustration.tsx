import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';

import { BITCOIN_BARS_PATH, BITCOIN_BODY_PATH } from '@/constants/coinGlyphs';

const SIZE = 300;
const BODY_WIDTH = 2.6;
const BARS_WIDTH = 2.2;

export default function BitcoinIllustration() {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="1.7 0 24 24">
      <Defs>
        <LinearGradient
          id="glyphSheen"
          gradientUnits="userSpaceOnUse"
          x1="6"
          y1="2"
          x2="21"
          y2="22"
        >
          <Stop offset="0" stopColor="#3A3A3A" />
          <Stop offset="0.5" stopColor="#131313" />
          <Stop offset="1" stopColor="#000000" />
        </LinearGradient>
      </Defs>
      <G rotation={6} origin="12, 12">
        <G translateX={0.55} translateY={0.4} opacity={0.55}>
          <Path
            d={BITCOIN_BODY_PATH}
            fill="none"
            stroke="#2E2E2E"
            strokeWidth={BODY_WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d={BITCOIN_BARS_PATH}
            fill="none"
            stroke="#2E2E2E"
            strokeWidth={BARS_WIDTH}
            strokeLinecap="round"
          />
        </G>
        <Path
          d={BITCOIN_BODY_PATH}
          fill="none"
          stroke="url(#glyphSheen)"
          strokeWidth={BODY_WIDTH}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d={BITCOIN_BARS_PATH}
          fill="none"
          stroke="url(#glyphSheen)"
          strokeWidth={BARS_WIDTH}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
}
