import "./global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DriveScreen from "@/screens/DriveScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <DriveScreen />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
