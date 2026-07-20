import { folderPalette } from "@/theme/colors";
import type { Folder } from "@/types";

export const FOLDERS: Folder[] = [
  { id: "projects", name: "Projects", count: 18, color: folderPalette.pink },
  { id: "podcasts", name: "Podcasts 🎙️", count: 31, color: folderPalette.purple },
  { id: "random", name: "Random Bits", count: 9, color: folderPalette.purple },
  { id: "travel", name: "Travel 🌍", count: 47, color: folderPalette.salmon },
  { id: "recipes", name: "Recipes 🍜", count: 12, color: folderPalette.green },
  { id: "invoices", name: "Invoices", count: 26, color: folderPalette.yellow },
  { id: "sketches", name: "Sketches_v3", count: 15, color: folderPalette.purple },
  { id: "fonts", name: "Fonts", count: 38, color: folderPalette.purple },
  { id: "screenshots", name: "Screenshots", count: 64, color: folderPalette.yellow },
  { id: "ideas", name: "Ideas 💡", count: 7, color: folderPalette.purple },
  { id: "wallpapers", name: "Wallpapers", count: 21, color: folderPalette.salmon },
  { id: "voice-notes", name: "Voice_Notes", count: 33, color: folderPalette.purple },
];
