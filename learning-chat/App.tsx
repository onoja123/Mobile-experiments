import "./global.css";
import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import {
  Amiri_400Regular,
  Amiri_400Regular_Italic,
  Amiri_700Bold,
} from "@expo-google-fonts/amiri";
import { Jost_400Regular, Jost_500Medium } from "@expo-google-fonts/jost";
import { CHAT_ENTER_DURATION_MS, CHAT_EXIT_DURATION_MS } from "@/constants";
import ChatScreen from "@/screens/ChatScreen";
import HomeScreen from "@/screens/HomeScreen";
import { Topic } from "@/types";

export default function App() {
  const [fontsLoaded] = useFonts({
    Amiri_400Regular,
    Amiri_400Regular_Italic,
    Amiri_700Bold,
    Jost_400Regular,
    Jost_500Medium,
  });
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-cream">
        <HomeScreen onOpenChat={setActiveTopic} />
        {activeTopic && (
          <Animated.View
            entering={SlideInRight.duration(CHAT_ENTER_DURATION_MS)}
            exiting={SlideOutRight.duration(CHAT_EXIT_DURATION_MS)}
            className="absolute inset-0"
          >
            <ChatScreen topic={activeTopic} onBack={() => setActiveTopic(null)} />
          </Animated.View>
        )}
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}
