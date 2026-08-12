import { Platform, Text, View } from 'react-native';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';

import { colors } from '@/theme';

const glassy = Platform.OS === 'ios' && isLiquidGlassAvailable();

function CardContent() {
  return (
    <View className="px-5 pb-5 pt-4">
      <Text className="font-sans text-[14px] text-on-accent opacity-60">Wallet Balance</Text>
      <View className="mt-1 flex-row items-baseline">
        <Text
          className="font-display text-[42px] leading-[50px] text-on-accent"
          style={{ letterSpacing: -1 }}
        >
          $12,847
        </Text>
        <Text
          className="font-display text-[42px] leading-[50px] text-on-accent opacity-40"
          style={{ letterSpacing: -1 }}
        >
          .60
        </Text>
      </View>
      <View className="mt-2 flex-row items-center">
        <Text className="font-sans text-[13px] text-on-accent opacity-60">$182.40 today</Text>
        <View className="ml-2 rounded-full bg-on-accent px-2.5 py-1">
          <Text className="font-semi text-[12px] text-accent">+1.4%</Text>
        </View>
      </View>
    </View>
  );
}

export default function BalanceCard() {
  return (
    <View className="px-5 pb-2 pt-1">
      {glassy ? (
        <GlassView
          glassEffectStyle="regular"
          tintColor={colors.accent}
          style={{ borderRadius: 26, overflow: 'hidden' }}
        >
          <CardContent />
        </GlassView>
      ) : (
        <View className="overflow-hidden rounded-[26px] bg-accent">
          <CardContent />
        </View>
      )}
    </View>
  );
}
