import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography } from "@/theme";

type ChatComposerProps = {
  onSend: (text: string) => void;
};

export function ChatComposer({ onSend }: ChatComposerProps) {
  const [draft, setDraft] = useState("");
  const trimmedDraft = draft.trim();

  const send = () => {
    if (!trimmedDraft) return;
    setDraft("");
    onSend(trimmedDraft);
  };

  return (
    <View className="px-4 pb-2">
      <View className="flex-row items-center bg-sand rounded-full h-[52px] pl-5 pr-2">
        <TextInput
          value={draft}
          onChangeText={setDraft}
          onSubmitEditing={send}
          returnKeyType="send"
          placeholder="Ask anything..."
          placeholderTextColor={colors.inputPlaceholder}
          className="flex-1 text-ink"
          style={typography.composerInput}
        />
        <Pressable className="w-9 h-9 rounded-full items-center justify-center">
          <Ionicons name="happy-outline" size={19} color={colors.composerIcon} />
        </Pressable>
        <Pressable
          onPress={send}
          className="w-9 h-9 rounded-full items-center justify-center"
        >
          <Ionicons
            name={trimmedDraft ? "arrow-up-circle" : "mic-outline"}
            size={trimmedDraft ? 24 : 19}
            color={colors.composerIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}
