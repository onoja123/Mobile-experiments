import { ReactNode } from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

import {
  AVALANCHE_PATH,
  BINANCE_DIAMOND_PATHS,
  BITCOIN_BARS_PATH,
  BITCOIN_BODY_PATH,
  CHAINLINK_HEX_PATH,
  ETHEREUM_BOTTOM_PATH,
  ETHEREUM_TOP_PATH,
  POLKADOT_DOTS,
  SOLANA_BAR_PATHS,
  TETHER_BAR_PATH,
  TETHER_STEM_PATH,
} from '@/constants/coinGlyphs';
import { COIN_MARK_SIZE } from '@/constants/layout';
import { CoinMarkProps } from './CoinMark.types';

const markByTicker: Record<string, (color: string) => ReactNode> = {
  BTC: (color) => (
    <>
      <Path
        d={BITCOIN_BODY_PATH}
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d={BITCOIN_BARS_PATH} stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </>
  ),
  ETH: (color) => (
    <>
      <Path d={ETHEREUM_TOP_PATH} fill={color} />
      <Path d={ETHEREUM_BOTTOM_PATH} fill={color} opacity={0.62} />
    </>
  ),
  SOL: (color) =>
    SOLANA_BAR_PATHS.map((path, index) => (
      <Path key={path} d={path} fill={color} opacity={index === 1 ? 0.72 : 1} />
    )),
  DOT: (color) =>
    POLKADOT_DOTS.map((dot) => <Ellipse key={`${dot.cx}-${dot.cy}`} {...dot} fill={color} />),
  LINK: (color) => (
    <Path
      d={CHAINLINK_HEX_PATH}
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
      fill="none"
    />
  ),
  AVAX: (color) => <Path d={AVALANCHE_PATH} fill={color} fillRule="evenodd" />,
  BNB: (color) =>
    BINANCE_DIAMOND_PATHS.map((path) => <Path key={path} d={path} fill={color} />),
  USDT: (color) => (
    <>
      <Path d={TETHER_BAR_PATH} stroke={color} strokeWidth={2} strokeLinecap="round" />
      <Path d={TETHER_STEM_PATH} stroke={color} strokeWidth={2} strokeLinecap="round" />
      <Ellipse cx={12} cy={10.2} rx={5.8} ry={2.5} stroke={color} strokeWidth={1.7} fill="none" />
    </>
  ),
};

export default function CoinMark({ ticker, color, size = COIN_MARK_SIZE }: CoinMarkProps) {
  const mark = markByTicker[ticker];

  if (!mark) {
    return null;
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {mark(color)}
    </Svg>
  );
}
