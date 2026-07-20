import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { WalletFlow } from '@/enums';
import { IpoScreen } from '@/screens/IpoScreen';
import { ReceiveScreen } from '@/screens/ReceiveScreen';
import { SendScreen } from '@/screens/SendScreen';
import { SwapScreen } from '@/screens/SwapScreen';
import { WalletScreen } from '@/screens/WalletScreen';
import { springs } from '@/theme';

const WALLET_SCALE_DELTA = 0.06;
const WALLET_CORNER_RADIUS = 28;
const DIM_OPACITY = 0.3;
const INITIAL_FLOW = WalletFlow.Ipo;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    overflow: 'hidden',
  },
  dim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  flow: StyleSheet.absoluteFillObject,
});

export function RootNavigator() {
  const { height } = useWindowDimensions();
  const [flow, setFlow] = useState<WalletFlow | null>(INITIAL_FLOW);
  const progress = useSharedValue(0);

  const openSend = useCallback(() => setFlow(WalletFlow.Send), []);
  const openReceive = useCallback(() => setFlow(WalletFlow.Receive), []);
  const openSwap = useCallback(() => setFlow(WalletFlow.Swap), []);
  const openIpo = useCallback(() => setFlow(WalletFlow.Ipo), []);

  useEffect(() => {
    if (flow) {
      progress.value = withSpring(1, springs.screen);
    }
  }, [flow, progress]);

  const closeFlow = useCallback(() => {
    progress.value = withSpring(0, springs.screen, (finished) => {
      if (finished) runOnJS(setFlow)(null);
    });
  }, [progress]);

  const walletStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - progress.value * WALLET_SCALE_DELTA }],
    borderRadius: progress.value * WALLET_CORNER_RADIUS,
  }));

  const dimStyle = useAnimatedStyle(() => ({
    opacity: progress.value * DIM_OPACITY,
  }));

  const flowStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: (1 - progress.value) * height }],
  }));

  return (
    <View className="flex-1 bg-band">
      <Animated.View style={[styles.wallet, walletStyle]}>
        <WalletScreen
          onSend={openSend}
          onReceive={openReceive}
          onSwap={openSwap}
          onIpo={openIpo}
        />
        <Animated.View pointerEvents="none" style={[styles.dim, dimStyle]} />
      </Animated.View>

      {flow && (
        <Animated.View style={[styles.flow, flowStyle]}>
          {flow === WalletFlow.Send && <SendScreen onBack={closeFlow} />}
          {flow === WalletFlow.Receive && <ReceiveScreen onBack={closeFlow} />}
          {flow === WalletFlow.Swap && <SwapScreen onBack={closeFlow} />}
          {flow === WalletFlow.Ipo && <IpoScreen onBack={closeFlow} />}
        </Animated.View>
      )}
    </View>
  );
}
