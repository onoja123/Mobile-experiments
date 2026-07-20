import type { GradientColors } from "@/types";

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  avatarColors: GradientColors;
}
