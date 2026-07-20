import { getFirstName } from "@/helpers/getFirstName";
import type { Chat } from "@/interfaces";

type ChatSeed = Omit<Chat, "lastMessage">;

const CHAT_SEEDS: ChatSeed[] = [
  { id: "1", name: "Julian Smith", lastMessageTime: "Now", avatarColors: ["#0B1B2B", "#14424E", "#C2492E"] },
  { id: "2", name: "Amara Okafor", lastMessageTime: "25m", avatarColors: ["#141216", "#5A2B18", "#E8862F"] },
  { id: "3", name: "Leo Tanaka", lastMessageTime: "1hr", avatarColors: ["#EFE6D8", "#DDBE8A", "#9A6B33"] },
  { id: "4", name: "Sofia Marchetti", lastMessageTime: "Thu", avatarColors: ["#6D8BE8", "#B9A7EE", "#F1A6C6"] },
  { id: "5", name: "Noah Bergström", lastMessageTime: "Thu", avatarColors: ["#D87A5E", "#A44530", "#5C2C20"] },
];

export const CHATS: Chat[] = CHAT_SEEDS.map((seed) => ({
  ...seed,
  lastMessage: `${getFirstName(seed.name)} set disappearing message time to 30 seconds.`,
}));
