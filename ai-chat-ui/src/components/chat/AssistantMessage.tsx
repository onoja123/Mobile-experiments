import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { motion, spacing, typography } from "@/theme";
import { ChatMessage } from "@/types/chat";
import { useTypewriter } from "@/hooks/useTypewriter";
import { CodeBlock } from "./CodeBlock";

interface Props {
  message: ChatMessage;
  animate: boolean;
  onStreamEnd: (messageId: string) => void;
}

function TypedParagraph({
  text,
  animate,
  onDone,
}: {
  text: string;
  animate: boolean;
  onDone: () => void;
}) {
  const visible = useTypewriter(text, {
    enabled: animate,
    charDelay: motion.typewriterCharDelay,
    onDone,
  });

  return <Text style={typography.message}>{visible}</Text>;
}

export function AssistantMessage({ message, animate, onStreamEnd }: Props) {
  const [revealedCount, setRevealedCount] = useState(animate ? 1 : message.segments.length);

  const advance = () => {
    if (revealedCount >= message.segments.length) {
      onStreamEnd(message.id);
      return;
    }
    setRevealedCount((current) => current + 1);
  };

  return (
    <View style={styles.container}>
      {message.segments.slice(0, revealedCount).map((segment, index) =>
        segment.type === "text" ? (
          <TypedParagraph
            key={index}
            text={segment.text}
            animate={animate}
            onDone={advance}
          />
        ) : (
          <CodeBlock
            key={index}
            code={segment.code}
            animate={animate}
            onDone={advance}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xxl,
    marginBottom: spacing.xxl,
  },
});
