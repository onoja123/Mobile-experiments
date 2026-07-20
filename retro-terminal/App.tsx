import './global.css';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ScreenPager } from '@/navigation/ScreenPager';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenPager />
    </SafeAreaProvider>
  );
}
