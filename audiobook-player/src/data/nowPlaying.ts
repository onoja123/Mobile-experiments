import { buildArtworkUrl } from "@/helpers/buildArtworkUrl";
import type { Story } from "@/types";

export const NOW_PLAYING_TRACK: Story = {
  id: "np1",
  title: "The Lantern Harbour",
  studio: "Driftwood & Co.",
  artwork: buildArtworkUrl("paperskies"),
  tint: "#D9E3EA",
};
