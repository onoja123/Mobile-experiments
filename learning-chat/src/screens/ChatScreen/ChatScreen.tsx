import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useScriptedChat } from "@/hooks/useScriptedChat";
import { Topic } from "@/types";
import { ChatComposer } from "./components/ChatComposer";
import { ChatHeader } from "./components/ChatHeader";
import { ChatTranscript } from "./components/ChatTranscript";

type ChatScreenProps = {
  topic: Topic;
  onBack: () => void;
};

export default function ChatScreen({ topic, onBack }: ChatScreenProps) {
  const { messages, isTyping, sendMessage } = useScriptedChat(topic);

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ChatHeader title={topic.title} onBack={onBack} />
        <ChatTranscript messages={messages} isTyping={isTyping} />
        <ChatComposer onSend={sendMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
