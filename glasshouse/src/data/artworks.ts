import { Artwork } from "@/interfaces/artwork.interface";

const piece = (
  id: string,
  title: string,
  artist: string,
  year: string,
  width: number,
  height: number,
): Artwork => ({
  id,
  title,
  artist,
  year,
  uri: `https://picsum.photos/seed/${id}/${width}/${height}`,
  width,
  height,
});

export const ARTWORKS: Artwork[] = [
  piece("sodium-dusk", "Sodium Dusk", "Mara Ilves", "2024", 1000, 1400),
  piece("terminal-bloom", "Terminal Bloom", "Jonah Reyes", "2023", 1600, 1060),
  piece("cobalt-study", "Cobalt Study IV", "Ada Lindqvist", "2025", 1200, 1200),
  piece("heat-index", "Heat Index", "Tomás Ferreira", "2022", 900, 1500),
  piece("low-tide", "Low Tide Archive", "June Okafor", "2024", 1500, 1000),
  piece("vantage", "Vantage", "Elias Marsh", "2023", 1100, 1300),
  piece("chromatic-drift", "Chromatic Drift", "Priya Anand", "2025", 1000, 1250),
  piece("field-notes", "Field Notes, August", "Willa Chen", "2021", 1400, 1400),
  piece("afterglow", "Afterglow", "Dane Kowalski", "2024", 950, 1450),
  piece("signal-garden", "Signal Garden", "Noor El-Amin", "2023", 1600, 1000),
  piece("quiet-machine", "Quiet Machine", "Ivo Petrov", "2025", 1200, 1500),
  piece("second-summer", "Second Summer", "Lena Brandt", "2022", 1050, 1300),
];
