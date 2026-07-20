import { buildArtworkUrl } from "@/helpers/buildArtworkUrl";
import type { Story } from "@/types";

export const TRENDING_STORIES: Story[] = [
  { id: "t1", title: "The Moss Keeper", studio: "Fernwood Tales", artwork: buildArtworkUrl("grove"), tint: "#E2EAD4" },
  { id: "t2", title: "Where Owls Sleep", studio: "Hollow Pine Audio", artwork: buildArtworkUrl("mori"), tint: "#D6E7E1" },
  { id: "t3", title: "A Castle in the Mist", studio: "Skylark Stories", artwork: buildArtworkUrl("cloud"), tint: "#DAE4F4" },
  { id: "t4", title: "The Night Ferry", studio: "Violet Hour", artwork: buildArtworkUrl("river"), tint: "#E5DFF3" },
];
