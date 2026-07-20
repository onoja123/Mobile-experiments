import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Avatar } from "@/components/Avatar";
import { TYPING_ENTER_DURATION_MS, TYPING_PULSE_DURATION_MS } from "@/constants";
import { BOT_AVATAR } from "@/data/avatars";
import { colors, typography } from "@/theme";

export function TypingIndicator() {
  const pulse = useSharedValue(0.45);

  useEffect(() => {
    pulse.value = withRepeat(withTiming(1, { duration: TYPING_PULSE_DURATION_MS }), -1, true);
  }, []);

  const pulseStyle = useAnimatedStyle(() => ({ opacity: pulse.value }));

  return (
    <Animated.View
      entering={FadeInUp.duration(TYPING_ENTER_DURATION_MS)}
      className="flex-row items-end mt-3"
    >
      <Avatar emoji={BOT_AVATAR.emoji} backgroundColor={BOT_AVATAR.backgroundColor} size={22} />
      <View className="ml-2 bg-sand rounded-[16px] px-4 py-3">
        <Animated.Text
          style={[pulseStyle, typography.typingLabel, { color: colors.typingLabel }]}
        >
          Typing...
        </Animated.Text>
      </View>
    </Animated.View>
  );
}
