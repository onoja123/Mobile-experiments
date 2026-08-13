import { GRID_CAPTION_HEIGHT } from "@/constants/layout";
import { Artwork } from "@/interfaces/artwork.interface";

export function splitArtworksIntoColumns(
  artworks: Artwork[],
  columnWidth: number,
): [Artwork[], Artwork[]] {
  const columns: [Artwork[], Artwork[]] = [[], []];
  const heights = [0, 0];

  for (const artwork of artworks) {
    const target = heights[0] <= heights[1] ? 0 : 1;
    columns[target].push(artwork);
    heights[target] +=
      columnWidth * (artwork.height / artwork.width) + GRID_CAPTION_HEIGHT;
  }

  return columns;
}
