import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useStageSheet } from 'react-native-stage-sheet';
import { PaymentMethod } from '@/enums';
import type { PaymentSheetProps } from '@/interfaces';
import { colors } from '@/theme';
import BalanceInfoSheet from './BalanceInfoSheet';
import BoltBalanceCard from './BoltBalanceCard';
import PaymentMethodRow from './PaymentMethodRow';

export default function PaymentSheet({
  close,
  height,
  bottomInset,
  method: initialMethod,
  onSelectMethod,
}: PaymentSheetProps) {
  const { present } = useStageSheet();
  const [method, setMethod] = useState<PaymentMethod>(initialMethod);

  const selectMethod = (nextMethod: PaymentMethod) => {
    setMethod(nextMethod);
    onSelectMethod(nextMethod);
  };

  const openInfo = () =>
    present({
      render: ({ close: closeInfo, height: infoHeight, bottomInset: infoBottom }) => (
        <BalanceInfoSheet close={closeInfo} height={infoHeight} bottomInset={infoBottom} />
      ),
    });

  return (
    <View style={{ height }}>
      <ScrollView contentContainerStyle={{ paddingBottom: bottomInset + 24 }}>
        <View className="rounded-b-xl bg-white px-6 pb-3">
          <View className="h-12 flex-row items-center justify-end">
            <Pressable onPress={close} hitSlop={10}>
              <Text className="text-[19px] font-semibold" style={{ color: colors.boltGreen }}>
                Done
              </Text>
            </Pressable>
          </View>

          <Text className="mt-1 text-[30px] font-extrabold tracking-tight text-ink">Payment</Text>

          <BoltBalanceCard />

          <Pressable
            className="mt-1 flex-row items-center border-b border-surface py-4"
            onPress={openInfo}
          >
            <Ionicons name="help-circle-outline" size={26} color={colors.graphite} />
            <Text className="ml-4 flex-1 text-[19px] text-ink">What is Bolt balance?</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.faint} />
          </Pressable>

          <Pressable className="flex-row items-center py-4">
            <Ionicons name="time-outline" size={26} color={colors.graphite} />
            <Text className="ml-4 flex-1 text-[19px] text-ink">See Bolt balance transactions</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.faint} />
          </Pressable>
        </View>

        <View className="h-2.5 bg-surface-deep" />

        <View className="rounded-t-xl bg-white px-6">
          <Text className="mt-6 text-[24px] font-extrabold tracking-tight text-ink">
            Payment methods
          </Text>

          <View className="mt-5 h-[46px] flex-row rounded-full border border-edge">
            <View
              className="-m-px flex-1 items-center justify-center rounded-full"
              style={{ backgroundColor: colors.boltGreen }}
            >
              <Text className="text-[17px] font-semibold text-white">Personal</Text>
            </View>
            <View className="flex-1 items-center justify-center">
              <Text className="text-[17px] font-semibold text-ink">Work</Text>
            </View>
          </View>

          <PaymentMethodRow
            label="Apple Pay"
            selected={method === PaymentMethod.APPLE_PAY}
            onPress={() => selectMethod(PaymentMethod.APPLE_PAY)}
            icon={
              <View className="h-[22px] w-10 flex-row items-center justify-center rounded border border-outline bg-white">
                <Ionicons name="logo-apple" size={11} color={colors.ink} />
                <Text className="text-[10px] font-semibold text-ink">Pay</Text>
              </View>
            }
          />
          <PaymentMethodRow
            label="Cash"
            selected={method === PaymentMethod.CASH}
            onPress={() => selectMethod(PaymentMethod.CASH)}
            icon={
              <View
                className="h-6 w-9 items-center justify-center rounded-[5px]"
                style={{ backgroundColor: colors.cashGreen }}
              >
                <Ionicons name="cash-outline" size={16} color={colors.white} />
              </View>
            }
          />

          <Pressable className="flex-row items-center py-4">
            <View className="w-10 items-center">
              <Ionicons name="add" size={26} color={colors.ink} />
            </View>
            <Text className="ml-4 flex-1 text-[19px] text-ink">Add debit/credit card</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.chevronFaint} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
