import { View } from "react-native";
import { Tabs } from "expo-router";

import { PlayerSheet } from "@/components/PlayerSheet";
import { TabBar } from "@/components/TabBar";

export default function TabsLayout() {
  return (
    <View className="flex-1">
      <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="search" />
        <Tabs.Screen name="collection" />
        <Tabs.Screen name="playlist" />
      </Tabs>
      <PlayerSheet />
    </View>
  );
}
