import './global.css';
import { useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import GlassTabBar from '@/components/GlassTabBar';
import { AppTab } from '@/enums/appTab.enum';
import ExploreMapScreen from '@/screens/ExploreMapScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState(AppTab.Explore);
  const [tabBarCollapsed, setTabBarCollapsed] = useState(false);
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <View className="flex-1 bg-white dark:bg-black">
        <ExploreMapScreen
          collapsed={tabBarCollapsed}
          onPanDirection={(direction) => setTabBarCollapsed(direction === 'up')}
        />
        <GlassTabBar activeTab={activeTab} onTabPress={setActiveTab} collapsed={tabBarCollapsed} />
      </View>
    </SafeAreaProvider>
  );
}
