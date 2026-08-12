import { WalletTab } from '@/enums/walletTab.enum';

export interface SegmentTabsProps {
  active: WalletTab;
  onChange: (tab: WalletTab) => void;
}
