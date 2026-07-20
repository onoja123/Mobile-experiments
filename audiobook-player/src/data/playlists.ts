import { buildArtworkUrl } from "@/helpers/buildArtworkUrl";
import type { Story } from "@/types";

export const PLAYLISTS: Story[] = [
  { id: "p1", title: "Slow Mornings", studio: "Curated for you", artwork: buildArtworkUrl("lake"), tint: "#D7E5EC" },
  { id: "p2", title: "Tales Before Sleep", studio: "12 bedtime stories", artwork: buildArtworkUrl("valley"), tint: "#F4DFD8" },
  { id: "p3", title: "Golden Hour", studio: "8 cozy classics", artwork: buildArtworkUrl("journey"), tint: "#F1E8CE" },
  { id: "p4", title: "Little Adventures", studio: "10 short journeys", artwork: buildArtworkUrl("summer"), tint: "#FAE3D0" },
];
