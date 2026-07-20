import React from "react";
import { Text, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

import { TRANSACTION_ROW_ENTER, TRANSACTION_ROW_EXIT } from "@/constants/animations";
import { typography } from "@/theme";

import TransactionIconTile from "./TransactionIconTile";
import type { TransactionRowProps } from "./TransactionRow.types";

export default function TransactionRow({ transaction, index }: TransactionRowProps) {
  return (
    <Animated.View
      entering={FadeInDown.delay(
        TRANSACTION_ROW_ENTER.baseDelayMs + index * TRANSACTION_ROW_ENTER.staggerMs,
      )
        .springify()
        .damping(TRANSACTION_ROW_ENTER.damping)
        .stiffness(TRANSACTION_ROW_ENTER.stiffness)}
      exiting={FadeOutUp.delay(index * TRANSACTION_ROW_EXIT.staggerMs).duration(
        TRANSACTION_ROW_EXIT.durationMs,
      )}
      className="flex-row items-center px-6 py-3"
    >
      <TransactionIconTile icon={transaction.icon} />
      <View className="ml-4 flex-1">
        <Text className="text-ink" style={typography.rowTitle}>
          {transaction.name}
        </Text>
        <Text className="text-subtle mt-0.5" style={typography.rowMeta}>
          {transaction.category}
        </Text>
      </View>
      <View className="items-end">
        <Text className="text-ink" style={typography.rowTitle}>
          {transaction.amount}
        </Text>
        <Text className="text-subtle mt-0.5" style={typography.rowMeta}>
          {transaction.date}
        </Text>
      </View>
    </Animated.View>
  );
}
