import { HugeiconsIcon } from '@hugeicons/react-native';
import {
  ArrowDataTransferVerticalIcon,
  ArrowDown01Icon,
  ArrowDown02Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUp02Icon,
  ArrowUpRight01Icon,
  Coins01Icon,
  DollarCircleIcon,
  Notification03Icon,
  PlusSignIcon,
  Wallet02Icon,
} from '@hugeicons/core-free-icons';

import { colors } from '@/theme';
import { IconName, IconProps } from './Icon.types';

const ICONS: Record<IconName, typeof PlusSignIcon> = {
  'chevron-down': ArrowDown01Icon,
  'chevron-left': ArrowLeft01Icon,
  'chevron-right': ArrowRight01Icon,
  bell: Notification03Icon,
  'arrow-up-right': ArrowUpRight01Icon,
  plus: PlusSignIcon,
  swap: ArrowDataTransferVerticalIcon,
  'arrow-down': ArrowDown02Icon,
  'arrow-up': ArrowUp02Icon,
  wallet: Wallet02Icon,
  coins: Coins01Icon,
  dollar: DollarCircleIcon,
};

export default function Icon({ name, size = 24, color = colors.ink, strokeWidth = 1.8 }: IconProps) {
  return <HugeiconsIcon icon={ICONS[name]} size={size} color={color} strokeWidth={strokeWidth} />;
}
