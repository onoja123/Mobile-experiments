import { Coin } from '@/interfaces/coin.interface';
import { HoldingPosition } from '@/interfaces/holdingPosition.interface';

export type AssetsScreenProps = {
  onOpenCoin: (coin: Coin) => void;
};

export type AllocationBarProps = {
  positions: HoldingPosition[];
};

export type HoldingRowProps = {
  position: HoldingPosition;
  isLast: boolean;
  onPress: () => void;
};
