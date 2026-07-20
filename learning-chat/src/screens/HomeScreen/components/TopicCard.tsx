import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { EmojiBadge } from "@/components/EmojiBadge";
import { StarRating } from "@/components/StarRating";
import { SquiggleFlourish } from "@/components/illustrations";
import { CARD_SPRING, TOPIC_CARD_HEIGHT } from "@/constants";
import { shadows, typography } from "@/theme";
import { Topic, TopicCardLayout } from "@/types";

type TopicCardProps = {
  topic: Topic;
  layout: TopicCardLayout;
  onPress: () => void;
};

export function TopicCard({ topic, layout, onPress }: TopicCardProps) {
  const top = useSharedValue(layout.top);
  const rotation = useSharedValue(layout.rotation);
  const scale = useSharedValue(layout.scale);

  useEffect(() => {
    top.value = withSpring(layout.top, CARD_SPRING);
    rotation.value = withSpring(layout.rotation, CARD_SPRING);
    scale.value = withSpring(layout.scale, CARD_SPRING);
  }, [layout.top, layout.rotation, layout.scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    top: top.value,
    transform: [{ rotate: `${rotation.value}deg` }, { scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        animatedStyle,
        shadows.topicCard,
        {
          height: TOPIC_CARD_HEIGHT,
          backgroundColor: topic.color,
          zIndex: layout.zIndex,
          elevation: layout.zIndex,
        },
      ]}
      className="absolute left-0 right-0 rounded-[20px] overflow-hidden"
    >
      <Pressable onPress={onPress} className="flex-1 px-5 pt-2">
        <View
          className="absolute -right-4 top-1 w-[100px] h-[100px] rounded-full border border-white/40"
          pointerEvents="none"
        />
        <View className="absolute right-4 top-4">
          <EmojiBadge emoji={topic.emoji} />
        </View>
        <View className="absolute right-1 bottom-0" pointerEvents="none">
          <SquiggleFlourish />
        </View>
        <Text style={[typography.cardTitle, { color: topic.textColor }]}>
          {topic.title}
        </Text>
        <Text
          style={[typography.cardDescription, { color: topic.textColor, opacity: 0.92 }]}
          className="w-[68%]"
        >
          {topic.description}
        </Text>
        <View className="absolute left-5 bottom-4">
          <StarRating
            count={topic.stars}
            filledColor={topic.starColor}
            emptyColor={topic.starEmptyColor}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}
