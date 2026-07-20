import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlowHeader } from '@/components';
import { INCOMING_TRANSACTIONS, NETWORKS } from '@/data';
import { useSimulatedLoading } from '@/hooks';
import type { Network } from '@/interfaces';
import {
  AddressActions,
  InfoCard,
  NetworkSheet,
  ReceiveCard,
  ReceiveHistory,
  ReceiveSkeleton,
} from './components';

const LOAD_MS = 900;

const INFO_MESSAGE =
  'Only send supported assets to this address. Sending unsupported assets may permanently result in loss of funds.';

const styles = StyleSheet.create({
  section: {
    marginTop: 16,
  },
  history: {
    marginTop: 24,
  },
});

type ReceiveScreenProps = {
  onBack: () => void;
};

export function ReceiveScreen({ onBack }: ReceiveScreenProps) {
  const insets = useSafeAreaInsets();

  const [network, setNetwork] = useState<Network>(NETWORKS[0]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const loading = useSimulatedLoading(LOAD_MS);

  return (
    <View className="flex-1 bg-screen" style={{ paddingTop: insets.top }}>
      <FlowHeader title="Receive" subtitle="Receive crypto instantly" onBack={onBack} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pt-2"
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <ReceiveSkeleton />
        ) : (
          <>
            <Animated.View entering={FadeInDown.delay(40).duration(420)}>
              <ReceiveCard network={network} onNetworkPress={() => setSheetOpen(true)} />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(110).duration(420)}
              style={styles.section}
            >
              <AddressActions network={network} />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(180).duration(420)}
              style={styles.section}
            >
              <InfoCard message={INFO_MESSAGE} />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(250).duration(420)}
              style={styles.history}
            >
              <ReceiveHistory transactions={INCOMING_TRANSACTIONS} />
            </Animated.View>
          </>
        )}
      </ScrollView>

      <NetworkSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        networks={NETWORKS}
        selected={network}
        onSelect={setNetwork}
      />
    </View>
  );
}
