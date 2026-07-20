import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { colors, layout, radius, shadows, spacing, typography } from "@/theme";
import { SendIcon } from "@/components/icons";
import { PressableFade } from "@/components/ui/PressableFade";

const messageSchema = z.object({
  message: z.string().trim().min(1),
});

type MessageForm = z.infer<typeof messageSchema>;

export interface InputFrame {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  onSend: (text: string, frame: InputFrame) => void;
}

export function ChatInput({ onSend }: Props) {
  const containerRef = useRef<View>(null);
  const { control, handleSubmit, reset, watch } = useForm<MessageForm>({
    resolver: zodResolver(messageSchema),
    defaultValues: { message: "" },
  });

  const hasText = watch("message").trim().length > 0;

  const submit = handleSubmit(({ message }) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    containerRef.current?.measureInWindow((x, y, width, height) => {
      onSend(message.trim(), { x, y, width, height });
    });
    reset();
  });

  return (
    <View ref={containerRef} style={styles.container}>
      <Controller
        control={control}
        name="message"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Write..."
            placeholderTextColor={colors.inkMuted}
            style={styles.input}
            multiline={false}
            returnKeyType="send"
            onSubmitEditing={() => submit()}
            submitBehavior="submit"
          />
        )}
      />
      {hasText && (
        <Animated.View entering={ZoomIn.springify().damping(16)} exiting={FadeOut.duration(150)}>
          <PressableFade
            onPress={() => submit()}
            hitSlop={layout.iconHitSlop}
            style={styles.sendButton}
            pressedOpacity={0.45}
          >
            <SendIcon size={22} color={colors.ink} strokeWidth={1.4} />
          </PressableFade>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radius.input,
    minHeight: layout.inputMinHeight,
    paddingLeft: spacing.xl,
    paddingRight: spacing.md,
    ...shadows.input,
  },
  input: {
    flex: 1,
    ...typography.input,
    paddingVertical: spacing.lg,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
