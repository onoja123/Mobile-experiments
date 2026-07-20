import './global.css';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import FloatingTabBar from '@/components/FloatingTabBar';
import { AppTab } from '@/enums/appTab.enum';
import CollectionsScreen from '@/screens/CollectionsScreen';
import ComingSoonScreen from '@/screens/ComingSoonScreen';
import ExploreScreen from '@/screens/ExploreScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState(AppTab.Explore);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <SafeAreaView edges={['top']} className="flex-1 bg-paper">
          {activeTab === AppTab.Explore && <ExploreScreen />}
          {activeTab === AppTab.Home && <CollectionsScreen />}
          {activeTab === AppTab.Saved && <ComingSoonScreen title={AppTab.Saved} />}
          {activeTab === AppTab.Closet && <ComingSoonScreen title={AppTab.Closet} />}
          <FloatingTabBar activeTab={activeTab} onTabPress={setActiveTab} />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
