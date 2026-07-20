import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, Text, View } from 'react-native';
import type { StageSheetContentProps } from '@/interfaces';
import { colors } from '@/theme';
import PaymentBrandChips from './PaymentBrandChips';

const headingColor = { color: colors.slate.heading };
const bodyColor = { color: colors.slate.body, lineHeight: 24 };

export default function BalanceInfoSheet({ close, height, bottomInset }: StageSheetContentProps) {
  return (
    <View style={{ height }}>
      <View className="h-12 flex-row items-center px-4">
        <Pressable onPress={close} hitSlop={10}>
          <Ionicons name="close" size={26} color={colors.slate.icon} />
        </Pressable>
        <Text className="flex-1 pr-7 text-center text-[19px] font-bold" style={headingColor}>
          What is Bolt balance?
        </Text>
      </View>

      <ScrollView className="px-6" contentContainerStyle={{ paddingBottom: bottomInset + 48 }}>
        <Text className="mt-7 text-[27px] font-bold" style={headingColor}>
          What is Bolt balance?
        </Text>
        <Text className="mt-3 text-[18px]" style={bodyColor}>
          Bolt balance is an in-app virtual payment method to pay for Bolt products. The use of
          Bolt balance is governed by{' '}
          <Text className="underline" style={{ color: colors.slate.link }}>
            Terms and Conditions for Bolt balance
          </Text>
          .
        </Text>

        <Text className="mt-10 text-[24px] font-bold" style={headingColor} numberOfLines={1}>
          How do I top up my Bolt balance?
        </Text>
        <Text className="mt-4 text-[18px]" style={bodyColor}>
          Unfortunately, you can’t currently top up Bolt balance in your location if you have a
          zero or positive balance. But we’re working on it!
        </Text>
        <Text className="mt-6 text-[18px]" style={bodyColor}>
          If you have a negative balance, you can use iDeal, Bancontact, Paypal, and debit or
          credit cards, including MasterCard, Visa, American Express, Diners Club, M-Pesa, and JCB
          to settle your balance.
        </Text>
        <Text className="mt-6 text-[18px]" style={bodyColor}>
          In addition, your Bolt balance can be topped up via refunds from Bolt.
        </Text>

        <PaymentBrandChips />

        <Text className="mt-10 text-[24px] font-bold" style={headingColor}>
          How do I use it?
        </Text>
        <Text className="mt-4 text-[18px]" style={bodyColor}>
          Your Bolt balance automatically applies to your order. We’ll use another payment method
          to cover the remaining cost if your balance hits zero.
        </Text>

        <View className="mb-10 mt-14 h-px bg-divider" />

        <Text className="text-[27px] font-bold" style={headingColor}>
          Frequently asked questions
        </Text>
        <Text className="mt-7 text-[19px] font-bold" style={headingColor}>
          Why is my balance negative?
        </Text>
        <Text className="mt-3 text-[18px]" style={bodyColor}>
          Your Bolt balance might be negative if your last trip payment didn’t go through. You can
          settle it with any of the payment methods listed above.
        </Text>
      </ScrollView>
    </View>
  );
}
