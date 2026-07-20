import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { colors, spacing, typography } from "@/theme";
import { absoluteFill } from "@/utils/style";
import { useChatStore } from "@/stores/chatStore";
import { GearIcon, HelpIcon, TrashIcon } from "@/components/icons";
import { LogoOrb } from "./LogoOrb";
import { SidebarChatItem } from "./SidebarChatItem";
import { NewChatButton } from "./NewChatButton";
import { PressableFade } from "@/components/ui/PressableFade";

function FooterAction({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <PressableFade onPress={onPress} style={styles.footerRow}>
      {icon}
      <Text style={typography.sidebarAction}>{label}</Text>
    </PressableFade>
  );
}

export function Sidebar({ width }: { width: number }) {
  const insets = useSafeAreaInsets();
  const chats = useChatStore((state) => state.chats);
  const activeChatId = useChatStore((state) => state.activeChatId);
  const freshChatTitleId = useChatStore((state) => state.freshChatTitleId);
  const setActiveChat = useChatStore((state) => state.setActiveChat);
  const newChat = useChatStore((state) => state.newChat);
  const cleanChats = useChatStore((state) => state.cleanChats);
  const clearFreshTitle = useChatStore((state) => state.clearFreshTitle);

  const titledChats = chats.filter((chat) => chat.title !== null);

  return (
    <View
      style={[
        styles.container,
        {
          width,
          paddingTop: insets.top + spacing.sm,
          paddingBottom: insets.bottom + spacing.xxl,
        },
      ]}
    >
      <View style={styles.logoWrap}>
        <LogoOrb />
      </View>

      <Text style={[typography.sectionLabel, styles.sectionLabel]}>Chats</Text>

      <View style={styles.chatList}>
        {titledChats.map((chat) => (
          <SidebarChatItem
            key={chat.id}
            title={chat.title ?? ""}
            active={chat.id === activeChatId}
            typing={chat.id === freshChatTitleId}
            onPress={() => setActiveChat(chat.id)}
            onTypingDone={clearFreshTitle}
          />
        ))}
        <NewChatButton onPress={newChat} />
      </View>

      <View style={styles.footer}>
        <FooterAction
          icon={<TrashIcon size={19} strokeWidth={1.4} color={colors.ink} />}
          label="Clean chats"
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            cleanChats();
          }}
        />
        <FooterAction
          icon={<HelpIcon size={19} strokeWidth={1.4} color={colors.ink} />}
          label="Help"
        />
        <FooterAction
          icon={<GearIcon size={19} strokeWidth={1.4} color={colors.ink} />}
          label="Settings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...absoluteFill,
    paddingLeft: 28,
    paddingRight: spacing.xl,
  },
  logoWrap: {
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.xxxl,
  },
  sectionLabel: {
    marginBottom: spacing.xl,
  },
  chatList: {
    gap: 22,
  },
  footer: {
    marginTop: "auto",
    gap: 22,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
});
