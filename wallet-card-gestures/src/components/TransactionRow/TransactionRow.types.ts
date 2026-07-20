import type { Transaction } from "@/interfaces";
import type { TransactionIcon } from "@/types";

export type TransactionRowProps = {
  transaction: Transaction;
  index: number;
};

export type TransactionIconTileProps = {
  icon: TransactionIcon;
};
