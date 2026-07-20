import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlowHeader, PrimaryButton } from '@/components';
import { useCountdown } from '@/hooks';
import { springs } from '@/theme';
import { IpoContent, IpoSkeleton, SubscribeConfirmation } from './components';
import { useAllocationEstimate } from './hooks/useAllocationEstimate';
import { useDemandTicker } from './hooks/useDemandTicker';
import { useIpoMarket } from './hooks/useIpoMarket';

const DEFAULT_AMOUNT = 1000;

const styles = StyleSheet.create({
  cta: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});

type IpoScreenProps = {
  onBack: () => void;
};

export function IpoScreen({ onBack }: IpoScreenProps) {
  const insets = useSafeAreaInsets();
  const { ipo, related, loading } = useIpoMarket();

  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [confirming, setConfirming] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const { demand, bump } = useDemandTicker(ipo.demandPercent, !loading);
  const countdown = useCountdown(ipo.countdownMs, confirming);
  const { estimate, refreshing } = useAllocationEstimate(ipo, amount);

  const recede = useSharedValue(0);

  useEffect(() => {
    recede.value = withSpring(confirming ? 1 : 0, springs.screen);
  }, [confirming, recede]);

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: 1 - recede.value * 0.02 },
      { translateY: -recede.value * 6 },
    ],
  }));

  const handleSubscribe = useCallback(() => {
    setConfirming(true);
  }, []);

  const handleCancel = useCallback(() => {
    setConfirming(false);
  }, []);

  const handleDone = useCallback(() => {
    setConfirming(false);
    setSubscribed(true);
    bump();
  }, [bump]);

  const canSubscribe = !loading && !subscribed && amount >= ipo.minInvestment;
  const ctaLabel = subscribed ? 'Subscribed' : 'Subscribe to IPO';

  return (
    <View className="flex-1 bg-screen" style={{ paddingTop: insets.top }}>
      <FlowHeader
        title="IPO Market"
        subtitle="Discover and invest in upcoming public offerings"
        onBack={onBack}
      />

      <Animated.View className="flex-1" style={contentStyle}>
        <ScrollView
          className="flex-1"
          contentContainerClassName="pt-3"
          contentContainerStyle={{ paddingBottom: insets.bottom + 96 }}
          showsVerticalScrollIndicator={false}
        >
          {loading ? (
            <IpoSkeleton />
          ) : (
            <IpoContent
              ipo={ipo}
              related={related}
              countdown={countdown}
              paused={confirming}
              subscribed={subscribed}
              demand={demand}
              amount={amount}
              onAmountChange={setAmount}
              estimate={estimate}
              refreshing={refreshing}
            />
          )}
        </ScrollView>
      </Animated.View>

      <View style={[styles.cta, { bottom: insets.bottom + 12 }]}>
        <PrimaryButton enabled={canSubscribe} onPress={handleSubscribe} label={ctaLabel} />
      </View>

      <SubscribeConfirmation
        visible={confirming}
        ipo={ipo}
        amountUsd={amount}
        estimate={estimate}
        bottomInset={insets.bottom}
        onCancel={handleCancel}
        onDone={handleDone}
      />
    </View>
  );
}
