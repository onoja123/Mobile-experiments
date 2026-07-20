import "./global.css";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ChatsScreen } from "@/screens/ChatsScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <ChatsScreen />
    </SafeAreaProvider>
  );
}
