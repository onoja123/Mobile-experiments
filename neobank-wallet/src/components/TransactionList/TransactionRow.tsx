import { Text, View } from "react-native";

import type { Transaction } from "@/types";

import { TransactionMerchantIcon } from "./TransactionMerchantIcon";

export function TransactionRow({
  transaction,
  isLast,
}: {
  transaction: Transaction;
  isLast: boolean;
}) {
  return (
    <View
      className={`flex-row items-center gap-3 py-3.5 ${isLast ? "" : "border-b border-hairline"}`}
    >
      <TransactionMerchantIcon merchant={transaction.merchant} />
      <View className="flex-1">
        <Text className="text-[14px] font-medium text-ink">{transaction.title}</Text>
        <Text className="mt-1 text-[11.5px] text-faint">{transaction.date}</Text>
      </View>
      <Text
        className={`text-[13.5px] font-semibold ${transaction.isCredit ? "text-credit" : "text-ink"}`}
      >
        {transaction.amount}
      </Text>
    </View>
  );
}
