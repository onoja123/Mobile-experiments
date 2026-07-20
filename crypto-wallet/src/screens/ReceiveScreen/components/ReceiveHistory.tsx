import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import type { IncomingTransaction } from '@/interfaces/transaction.interface';
import { colors } from '@/theme';

type ReceiveHistoryProps = {
  transactions: IncomingTransaction[];
};

export function ReceiveHistory({ transactions }: ReceiveHistoryProps) {
  return (
    <View>
      <Text className="mb-2.5 text-[13px] font-semibold uppercase tracking-wide text-subtle">
        Recent activity
      </Text>
      <View className="rounded-[24px] bg-white py-1.5">
        {transactions.map((tx, index) => (
          <Animated.View
            key={tx.id}
            entering={FadeInDown.delay(120 + index * 80).duration(380)}
          >
            <View
              className="flex-row items-center px-4 py-3"
              accessible
              accessibilityLabel={`Received ${tx.amount} from ${tx.from}, ${tx.time}`}
            >
              <View className="h-10 w-10 items-center justify-center rounded-full bg-gainSoft">
                <Feather name="arrow-down-left" size={17} color={colors.gain} />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-[15px] font-bold text-ink">{tx.from}</Text>
                <Text className="mt-0.5 text-[12px] text-subtle">{tx.time}</Text>
              </View>
              <View className="items-end">
                <Text className="text-[15px] font-bold text-gain">{tx.amount}</Text>
                <Text className="mt-0.5 text-[12px] text-subtle">{tx.fiat}</Text>
              </View>
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}
