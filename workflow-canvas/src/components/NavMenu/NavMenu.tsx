import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { X } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { NAV_LINKS } from "@/constants/routes";
import { colors } from "@/theme";

export function NavMenu({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose}>
      <View
        className="flex-1 bg-ink px-8"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="items-end">
          <Pressable
            onPress={onClose}
            className="h-[52px] w-[52px] items-center justify-center rounded-full bg-white"
          >
            <X size={22} color={colors.ink} strokeWidth={2.2} />
          </Pressable>
        </View>
        <View className="flex-1 justify-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.route;
            return (
              <Pressable
                key={link.route}
                onPress={() => {
                  onClose();
                  if (!active) router.push(link.route);
                }}
                className="flex-row items-center gap-4"
              >
                <View
                  className={`h-2.5 w-2.5 rounded-full ${active ? "bg-white" : "bg-white/20"}`}
                />
                <Text
                  className={`font-jost-medium text-[38px] ${active ? "text-white" : "text-white/40"}`}
                >
                  {link.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}
