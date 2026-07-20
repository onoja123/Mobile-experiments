import type { TransactionMerchant } from "@/enums";

export type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: string;
  isCredit?: boolean;
  merchant: TransactionMerchant;
};
