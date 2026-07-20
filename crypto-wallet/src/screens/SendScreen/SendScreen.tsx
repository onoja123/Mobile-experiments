import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlowHeader, NumericKeyboard, PrimaryButton, TokenSelectSheet } from '@/components';
import { RECENT_RECIPIENTS, TOKENS } from '@/data';
import { parseAmount } from '@/helpers';
import { useAmountInput } from '@/hooks';
import type { Token } from '@/interfaces';
import { haptics } from '@/services';
import {
  AmountDisplay,
  NetworkFeeCard,
  RecentRecipients,
  RecipientCard,
  TokenPicker,
} from './components';
import { useRecipientResolution } from './hooks/useRecipientResolution';

const styles = StyleSheet.create({
  recipient: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  recents: {
    marginTop: 20,
  },
  amount: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  cards: {
    gap: 12,
    paddingHorizontal: 20,
  },
});

type SendScreenProps = {
  onBack: () => void;
};

export function SendScreen({ onBack }: SendScreenProps) {
  const insets = useSafeAreaInsets();

  const [token, setToken] = useState<Token>(TOKENS[0]);
  const [sheetOpen, setSheetOpen] = useState(false);

  const { amount, handleKey, clear } = useAmountInput();
  const { recipient, resolving, resolvePasted, selectRecipient, clearRecipient } =
    useRecipientResolution();

  const canContinue = recipient !== null && parseAmount(amount) > 0;

  const handleContinue = useCallback(() => {
    haptics.success();
  }, []);

  return (
    <View className="flex-1 bg-screen" style={{ paddingTop: insets.top }}>
      <FlowHeader title="Send" subtitle="Send crypto securely" onBack={onBack} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow pb-3"
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(40).duration(420)} style={styles.recipient}>
          <RecipientCard
            recipient={recipient}
            resolving={resolving}
            onPastePress={resolvePasted}
            onScanPress={resolvePasted}
            onClear={clearRecipient}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(110).duration(420)} style={styles.recents}>
          <RecentRecipients recipients={RECENT_RECIPIENTS} onSelect={selectRecipient} />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(180).duration(420)} style={styles.amount}>
          <AmountDisplay value={amount} token={token} />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(250).duration(420)} style={styles.cards}>
          <TokenPicker selected={token} onPress={() => setSheetOpen(true)} />
          <NetworkFeeCard token={token} />
        </Animated.View>
      </ScrollView>

      <View className="pt-3" style={{ paddingBottom: insets.bottom + 6 }}>
        <View className="px-5 pb-3">
          <PrimaryButton enabled={canContinue} onPress={handleContinue} />
        </View>
        <NumericKeyboard onKey={handleKey} onClearAll={clear} />
      </View>

      <TokenSelectSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        tokens={TOKENS}
        selectedId={token.id}
        onSelect={setToken}
      />
    </View>
  );
}
