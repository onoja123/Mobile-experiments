import { View } from 'react-native';

import CoinMark from '@/components/CoinMark';
import { COIN_BADGE_SIZE } from '@/constants/layout';
import { CoinBadgeProps } from './CoinBadge.types';

export default function CoinBadge({ coin, size = COIN_BADGE_SIZE }: CoinBadgeProps) {
  return (
    <View
      className="items-center justify-center rounded-full"
      style={{ width: size, height: size, backgroundColor: coin.badgeBg }}
    >
      <CoinMark ticker={coin.ticker} color={coin.badgeColor} size={size * 0.53} />
    </View>
  );
}
