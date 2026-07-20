import '../global.css';

import { useEffect } from 'react';
import { useFonts } from '@expo-google-fonts/plus-jakarta-sans';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NAV_FADE_MS, NAV_RISE_MS } from '@/constants/animation';
import { appFonts, palette } from '@/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts(appFonts);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: palette.white },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home" options={{ animation: 'fade', animationDuration: NAV_FADE_MS }} />
        <Stack.Screen
          name="hotel/[id]"
          options={{ animation: 'fade_from_bottom', animationDuration: NAV_RISE_MS }}
        />
      </Stack>
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}
