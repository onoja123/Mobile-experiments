import { BookOpen, Heart, ListMusic, Search, type LucideIcon } from "lucide-react-native";

export type TabBarItem = { icon: LucideIcon; label: string };

export const TAB_BAR_ITEMS: Record<string, TabBarItem> = {
  index: { icon: BookOpen, label: "Stories" },
  search: { icon: Search, label: "Search" },
  collection: { icon: Heart, label: "Collection" },
  playlist: { icon: ListMusic, label: "Playlist" },
};
