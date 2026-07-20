import '@/global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { DissolveProvider } from '@/providers/DissolveProvider';
import { colors } from '@/theme';

export default function RootLayout() {
  return (
    <DissolveProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.canvas },
        }}
      />
    </DissolveProvider>
  );
}
