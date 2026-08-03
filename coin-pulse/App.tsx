import './global.css';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Animated, { FadeOut, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import {
  BricolageGrotesque_400Regular,
  BricolageGrotesque_600SemiBold,
  BricolageGrotesque_700Bold,
  useFonts,
} from '@expo-google-fonts/bricolage-grotesque';

import TabBar from '@/components/TabBar';
import { AppTab } from '@/enums/appTab.enum';
import { Coin } from '@/interfaces/coin.interface';
import AssetsScreen from '@/screens/AssetsScreen';
import ComingSoonScreen from '@/screens/ComingSoonScreen';
import HomeScreen from '@/screens/HomeScreen';
import MarketsScreen from '@/screens/MarketsScreen';
import OnboardingScreen from '@/screens/OnboardingScreen';
import TradeScreen from '@/screens/TradeScreen';

const BUILT_TABS = [AppTab.Home, AppTab.Assets, AppTab.Markets];

export default function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [activeTab, setActiveTab] = useState(AppTab.Home);
  const [tradeCoin, setTradeCoin] = useState<Coin | null>(null);

  const [fontsLoaded] = useFonts({
    BricolageGrotesque_400Regular,
    BricolageGrotesque_600SemiBold,
    BricolageGrotesque_700Bold,
  });

  if (!fontsLoaded) {
    return <View className="flex-1 bg-paper" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <View className="flex-1 bg-paper">
          {activeTab === AppTab.Home && <HomeScreen onOpenCoin={setTradeCoin} />}
          {activeTab === AppTab.Assets && <AssetsScreen onOpenCoin={setTradeCoin} />}
          {activeTab === AppTab.Markets && <MarketsScreen onOpenCoin={setTradeCoin} />}
          {!BUILT_TABS.includes(activeTab) && <ComingSoonScreen title={activeTab} />}
          <TabBar activeTab={activeTab} onTabPress={setActiveTab} />
          {tradeCoin && (
            <Animated.View
              entering={SlideInRight.duration(300)}
              exiting={SlideOutRight.duration(260)}
              style={StyleSheet.absoluteFill}
              className="bg-paper"
            >
              <TradeScreen coin={tradeCoin} onBack={() => setTradeCoin(null)} />
            </Animated.View>
          )}
          {!onboarded && (
            <Animated.View exiting={FadeOut.duration(350)} style={StyleSheet.absoluteFill}>
              <OnboardingScreen onGetStarted={() => setOnboarded(true)} />
            </Animated.View>
          )}
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
