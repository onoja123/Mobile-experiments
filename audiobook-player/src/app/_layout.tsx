import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { PlayerProvider } from "@/contexts/PlayerContext";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PlayerProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }} />
      </PlayerProvider>
    </GestureHandlerRootView>
  );
}
