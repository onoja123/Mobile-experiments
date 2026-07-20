import { ScrollView, Text } from "react-native";

import { WALLET_TRANSACTIONS } from "@/data/transactions";
import { spacing } from "@/theme";

import { TransactionRow } from "./TransactionRow";

export function TransactionList({ bottomInset = 0 }: { bottomInset?: number }) {
  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: spacing.screenHorizontal,
        paddingBottom: bottomInset + spacing.sectionGap,
      }}
    >
      <Text className="mb-1.5 text-[13px] font-semibold text-ink">
        Latest activity
      </Text>
      {WALLET_TRANSACTIONS.map((transaction, index) => (
        <TransactionRow
          key={transaction.id}
          transaction={transaction}
          isLast={index === WALLET_TRANSACTIONS.length - 1}
        />
      ))}
    </ScrollView>
  );
}
