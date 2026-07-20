import { Text, View } from 'react-native';

export default function BoltBalanceCard() {
  return (
    <View className="mt-5 rounded-2xl bg-surface px-4 py-5">
      <Text className="text-[19px] text-steel">Bolt balance</Text>
      <Text className="mt-1 text-[34px] font-bold text-ghost line-through">₦0</Text>
      <View className="mb-5 mt-4 h-px bg-divider-soft" />
      <Text
        className="text-[15px] leading-[21px] text-charcoal"
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
      >
        Bolt balance is not available with this payment method
      </Text>
    </View>
  );
}
