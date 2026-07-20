import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlowHeader, NumericKeyboard, PrimaryButton, TokenSelectSheet } from '@/components';
import { TOKENS } from '@/data';
import { SwapSlot } from '@/enums/swapSlot.enum';
import { formatRate, parseAmount } from '@/helpers';
import { useAmountInput } from '@/hooks';
import type { Token } from '@/interfaces';
import {
  RouteCard,
  SwapCard,
  SwapConfirmation,
  SwapDetailsCard,
} from './components';
import { useSwapQuote } from './hooks/useSwapQuote';

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
  },
  spaced: {
    marginTop: 12,
    paddingHorizontal: 20,
  },
});

type SwapScreenProps = {
  onBack: () => void;
};

export function SwapScreen({ onBack }: SwapScreenProps) {
  const insets = useSafeAreaInsets();

  const [tokenA, setTokenA] = useState<Token>(TOKENS[0]);
  const [tokenB, setTokenB] = useState<Token>(TOKENS[1]);
  const [flipped, setFlipped] = useState(false);
  const [sheetSlot, setSheetSlot] = useState<SwapSlot | null>(null);
  const [confirming, setConfirming] = useState(false);

  const fromToken = flipped ? tokenB : tokenA;
  const toToken = flipped ? tokenA : tokenB;

  const { amount, setAmount, handleKey, clear } = useAmountInput(fromToken.displayDecimals);
  const amountNum = parseAmount(amount);

  const { quote, refreshing } = useSwapQuote(fromToken, toToken, amountNum);

  const toAmountText = useMemo(
    () => quote.toAmount.toFixed(Math.min(toToken.displayDecimals, 4)),
    [quote.toAmount, toToken.displayDecimals],
  );

  const rateText = `1 ${fromToken.symbol} = ${formatRate(quote.rate)} ${toToken.symbol}`;
  const summary = `${amountNum || 0} ${fromToken.symbol} → ${toAmountText} ${toToken.symbol}`;

  const insufficient = amountNum > fromToken.balance;
  const canSwap = amountNum > 0 && !insufficient && !refreshing;
  const ctaLabel = insufficient ? `Insufficient ${fromToken.symbol}` : 'Swap';

  const handleMax = useCallback(() => {
    setAmount(String(fromToken.balance));
  }, [fromToken.balance, setAmount]);

  const handleFlip = useCallback(() => {
    setFlipped((current) => !current);
  }, []);

  const handleSelect = useCallback(
    (token: Token) => {
      if (!sheetSlot) return;
      const other = sheetSlot === SwapSlot.A ? tokenB : tokenA;
      if (token.id === other.id) {
        setFlipped((current) => !current);
        return;
      }
      if (sheetSlot === SwapSlot.A) setTokenA(token);
      else setTokenB(token);
    },
    [sheetSlot, tokenA, tokenB],
  );

  const handleSwapPress = useCallback(() => {
    setConfirming(true);
  }, []);

  const handleDone = useCallback(() => {
    setConfirming(false);
    setAmount('');
  }, [setAmount]);

  return (
    <View className="flex-1 bg-screen" style={{ paddingTop: insets.top }}>
      <FlowHeader title="Swap" subtitle="Exchange assets instantly" onBack={onBack} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow pb-3 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(40).duration(420)} style={styles.section}>
          <SwapCard
            tokenA={tokenA}
            tokenB={tokenB}
            flipped={flipped}
            fromToken={fromToken}
            amount={amount}
            toAmountText={toAmountText}
            rateText={rateText}
            refreshing={refreshing}
            onFlip={handleFlip}
            onPressChipA={() => setSheetSlot(SwapSlot.A)}
            onPressChipB={() => setSheetSlot(SwapSlot.B)}
            onMax={handleMax}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(130).duration(420)} style={styles.spaced}>
          <SwapDetailsCard
            quote={quote}
            fromToken={fromToken}
            toToken={toToken}
            refreshing={refreshing}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(210).duration(420)} style={styles.spaced}>
          <RouteCard fromToken={fromToken} toToken={toToken} />
        </Animated.View>
      </ScrollView>

      <View className="pt-3" style={{ paddingBottom: insets.bottom + 6 }}>
        <View className="px-5 pb-3">
          <PrimaryButton enabled={canSwap} onPress={handleSwapPress} label={ctaLabel} />
        </View>
        <NumericKeyboard onKey={handleKey} onClearAll={clear} />
      </View>

      <TokenSelectSheet
        open={sheetSlot !== null}
        onClose={() => setSheetSlot(null)}
        tokens={TOKENS}
        selectedId={(sheetSlot === SwapSlot.B ? tokenB : tokenA).id}
        onSelect={handleSelect}
        searchable
      />

      <SwapConfirmation
        visible={confirming}
        fromToken={fromToken}
        toToken={toToken}
        summary={summary}
        onDone={handleDone}
      />
    </View>
  );
}
