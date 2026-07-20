import React from "react";
import { View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COMPACT_HEIGHT_BREAKPOINT } from "@/constants";
import { TOPICS } from "@/data/topics";
import { Topic } from "@/types";
import { HomeHeader } from "./components/HomeHeader";
import { HomeHeading } from "./components/HomeHeading";
import { PracticeTabs } from "./components/PracticeTabs";
import { TopicCardStack } from "./components/TopicCardStack";

type HomeScreenProps = {
  onOpenChat: (topic: Topic) => void;
};

export default function HomeScreen({ onOpenChat }: HomeScreenProps) {
  const { height } = useWindowDimensions();
  const isCompact = height < COMPACT_HEIGHT_BREAKPOINT;

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="flex-1 px-6">
        <HomeHeader />
        <HomeHeading isCompact={isCompact} />
        <PracticeTabs />
        <TopicCardStack
          topics={TOPICS}
          isCompact={isCompact}
          onTopicConfirmed={onOpenChat}
        />
      </View>
    </SafeAreaView>
  );
}
