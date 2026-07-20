import { TransactionIconType } from "@/enums";

export type TransactionIcon =
  | { type: TransactionIconType.FontAwesome; name: string; color: string; bg: string }
  | { type: TransactionIconType.Ionicon; name: string; color: string; bg: string }
  | { type: TransactionIconType.Letter; letter: string; color: string; bg: string };
