import React from "react";
import { ScrollView } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import TransactionRow from "@/components/TransactionRow";
import { TRANSACTION_LIST_ENTER } from "@/constants/animations";

import type { TransactionListProps } from "../WalletScreen.types";

export default function TransactionList({
  transactions,
  topOffset,
  bottomInset,
}: TransactionListProps) {
  return (
    <Animated.View
      entering={FadeIn.delay(TRANSACTION_LIST_ENTER.delayMs).duration(
        TRANSACTION_LIST_ENTER.durationMs,
      )}
      style={{ position: "absolute", top: topOffset, left: 0, right: 0, bottom: 0 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomInset + 24, paddingTop: 4 }}
      >
        {transactions.map((transaction, index) => (
          <TransactionRow key={transaction.id} transaction={transaction} index={index} />
        ))}
      </ScrollView>
    </Animated.View>
  );
}
