import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import { HeartPulseIllustration } from "@/components/illustrations";
import { colors } from "@/theme";
import { ChatMessage } from "@/types";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

type ChatTranscriptProps = {
  messages: ChatMessage[];
  isTyping: boolean;
};

export function ChatTranscript({ messages, isTyping }: ChatTranscriptProps) {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <ScrollView
      ref={scrollRef}
      className="flex-1 px-5"
      contentContainerStyle={{ paddingBottom: 16 }}
      onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center mt-6 mb-2">
        <View
          className="absolute left-[-20px] right-[-20px] top-[44px] h-[1px] opacity-70"
          style={{ backgroundColor: colors.transcriptLine }}
          pointerEvents="none"
        />
        <HeartPulseIllustration size={100} />
      </View>

      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
    </ScrollView>
  );
}
