import { TransactionMerchant } from "@/enums";
import type { Transaction } from "@/types";

export const WALLET_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Money added via •• 1234",
    date: "Sun, 9:41 AM",
    amount: "+$100.00",
    isCredit: true,
    merchant: TransactionMerchant.Mastercard,
  },
  {
    id: "2",
    title: "Xbox Store",
    date: "Mon, 9:41 AM",
    amount: "$80.00",
    merchant: TransactionMerchant.Xbox,
  },
  {
    id: "3",
    title: "Money added via •• 1234",
    date: "Tue, 9:41 AM",
    amount: "+$100.00",
    isCredit: true,
    merchant: TransactionMerchant.Mastercard,
  },
  {
    id: "4",
    title: "Cinescape KW",
    date: "Sun, 9:41 AM",
    amount: "$150.00",
    merchant: TransactionMerchant.Cinescape,
  },
  {
    id: "5",
    title: "Xbox Store",
    date: "Mon, 9:41 AM",
    amount: "$80.00",
    merchant: TransactionMerchant.Xbox,
  },
  {
    id: "6",
    title: "Money added via •• 1234",
    date: "Wed, 9:41 AM",
    amount: "+$100.00",
    isCredit: true,
    merchant: TransactionMerchant.Mastercard,
  },
];
