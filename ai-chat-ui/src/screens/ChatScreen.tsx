import React, { useCallback, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, layout, spacing } from "@/theme";
import { useActiveChat, useChatStore } from "@/stores/chatStore";
import { ChatMessage } from "@/types/chat";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput, InputFrame } from "@/components/chat/ChatInput";
import { AssistantMessage } from "@/components/chat/AssistantMessage";
import { UserMessage } from "@/components/chat/UserMessage";
import { Frame, SendMorphOverlay } from "@/components/chat/SendMorphOverlay";

interface MorphState {
  messageId: string;
  text: string;
  from: Frame;
  to?: Frame;
}

function MorphTarget({
  message,
  morphing,
  onMeasured,
}: {
  message: ChatMessage;
  morphing: boolean;
  onMeasured: (frame: Frame) => void;
}) {
  const ref = useRef<View>(null);
  const text = message.segments[0]?.type === "text" ? message.segments[0].text : "";

  return (
    <View
      ref={ref}
      onLayout={() => {
        if (!morphing) return;
        requestAnimationFrame(() => {
          ref.current?.measureInWindow((x, y, width, height) => {
            onMeasured({ x, y, width, height });
          });
        });
      }}
    >
      <UserMessage text={text} hidden={morphing} />
    </View>
  );
}

export function ChatScreen() {
  const insets = useSafeAreaInsets();
  const chat = useActiveChat();
  const openDrawer = useChatStore((state) => state.openDrawer);
  const sendMessage = useChatStore((state) => state.sendMessage);

  const scrollRef = useRef<ScrollView>(null);
  const [morph, setMorph] = useState<MorphState | null>(null);

  const handleSend = useCallback(
    (text: string, frame: InputFrame) => {
      const messageId = sendMessage(text);
      if (!messageId) return;
      setMorph({
        messageId,
        text,
        from: { x: frame.x, y: frame.y + 5, width: frame.width, height: frame.height },
      });
    },
    [sendMessage],
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ChatHeader onToggleSidebar={openDrawer} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.flex}
          contentContainerStyle={styles.messages}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => {
            scrollRef.current?.scrollToEnd({ animated: !morph });
          }}
        >
          {chat.messages.map((message, index) => {
            if (message.role === "user") {
              return (
                <MorphTarget
                  key={message.id}
                  message={message}
                  morphing={morph?.messageId === message.id}
                  onMeasured={(to) =>
                    setMorph((current) =>
                      current && current.messageId === message.id && !current.to
                        ? { ...current, to }
                        : current,
                    )
                  }
                />
              );
            }

            return (
              <View key={message.id}>
                <AssistantMessage
                  message={message}
                  animate={false}
                  onStreamEnd={() => undefined}
                />
              </View>
            );
          })}
        </ScrollView>
        <View
          style={[styles.inputWrap, { paddingBottom: Math.max(insets.bottom, spacing.md) + spacing.sm }]}
        >
          <ChatInput onSend={handleSend} />
        </View>
      </KeyboardAvoidingView>
      {morph?.to && (
        <SendMorphOverlay
          text={morph.text}
          from={morph.from}
          to={morph.to}
          onComplete={() => setMorph(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  messages: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingHorizontal: layout.screenPadding,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.lg,
  },
  inputWrap: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
});
