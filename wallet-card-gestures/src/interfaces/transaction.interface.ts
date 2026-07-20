import type { TransactionIcon } from "@/types";

export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: string;
  date: string;
  icon: TransactionIcon;
}
