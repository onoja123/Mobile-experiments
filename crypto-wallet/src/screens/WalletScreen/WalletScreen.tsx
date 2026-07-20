import React, { useEffect } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppleSpinner } from '@/components';
import { WALLET_ASSETS, WALLET_PROFILE } from '@/data';
import {
  AssetList,
  BalanceDisplay,
  WalletActionBar,
  WalletHeader,
} from './components';
import { usePullToRefresh } from './hooks/usePullToRefresh';
import { useWalletRefresh } from './hooks/useWalletRefresh';

const INITIAL_BALANCE = 2378.12;
const INITIAL_GAIN = { amount: 52.36, percent: 1.74 };
const AUTO_REFRESH_DELAY_MS = 1200;

type WalletScreenProps = {
  onSend?: () => void;
  onReceive?: () => void;
  onSwap?: () => void;
  onIpo?: () => void;
};

export function WalletScreen({ onSend, onReceive, onSwap, onIpo }: WalletScreenProps) {
  const insets = useSafeAreaInsets();
  const controller = useWalletRefresh(INITIAL_BALANCE, INITIAL_GAIN);
  const { spinner, shift, refresh } = controller;
  const { panGesture, spinnerVisibility, spacerStyle } = usePullToRefresh(
    refresh,
    spinner,
    shift,
  );

  useEffect(() => {
    const timer = setTimeout(refresh, AUTO_REFRESH_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GestureDetector gesture={panGesture}>
      <View className="flex-1 bg-band">
        <View
          className="overflow-hidden rounded-b-[36px] bg-white pb-8"
          style={{ paddingTop: insets.top }}
        >
          <AppleSpinner
            visibility={spinnerVisibility}
            style={{ position: 'absolute', top: insets.top + 4, alignSelf: 'center' }}
          />
          <Animated.View style={spacerStyle} />
          <View className="pt-4">
            <WalletHeader profile={WALLET_PROFILE} />
          </View>
          <View className="mt-6">
            <BalanceDisplay controller={controller} />
          </View>
        </View>

        <WalletActionBar onSend={onSend} onReceive={onReceive} onSwap={onSwap} onIpo={onIpo} />

        <AssetList assets={WALLET_ASSETS} />
      </View>
    </GestureDetector>
  );
}
