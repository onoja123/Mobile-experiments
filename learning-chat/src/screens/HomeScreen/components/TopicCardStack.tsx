import React from "react";
import { View } from "react-native";
import { COMPACT_CARD_STACK_SCALE } from "@/constants";
import { useTopicCardStack } from "@/hooks/useTopicCardStack";
import { Topic } from "@/types";
import { TopicCard } from "./TopicCard";

type TopicCardStackProps = {
  topics: Topic[];
  isCompact: boolean;
  onTopicConfirmed: (topic: Topic) => void;
};

export function TopicCardStack({ topics, isCompact, onTopicConfirmed }: TopicCardStackProps) {
  const { layouts, pressCard } = useTopicCardStack(topics.length, (index) =>
    onTopicConfirmed(topics[index])
  );

  return (
    <View
      className="flex-1 mt-6"
      style={isCompact ? { transform: [{ scale: COMPACT_CARD_STACK_SCALE }] } : undefined}
    >
      {topics.map((topic, index) => (
        <TopicCard
          key={topic.key}
          topic={topic}
          layout={layouts[index]}
          onPress={() => pressCard(index)}
        />
      ))}
    </View>
  );
}
