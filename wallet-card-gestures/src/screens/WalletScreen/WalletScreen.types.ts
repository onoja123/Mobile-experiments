import type { WalletViewMode } from "@/enums";
import type { Card, Transaction } from "@/interfaces";

export type WalletHeaderProps = {
  mode: WalletViewMode;
  topInset: number;
};

export type WalletCardProps = {
  card: Card;
  index: number;
  activeIndex: number;
  cardCount: number;
  mode: WalletViewMode;
  onPress: () => void;
};

export type TransactionListProps = {
  transactions: Transaction[];
  topOffset: number;
  bottomInset: number;
};

export type AddCardButtonProps = {
  visible: boolean;
  bottomInset: number;
  onPress: () => void;
};
