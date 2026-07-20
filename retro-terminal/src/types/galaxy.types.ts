export type GalaxyParticle = {
  x: number;
  y: number;
  size: number;
  color: string;
};

export type GalaxyGlyph = {
  x: number;
  y: number;
  char: string;
};

export type GalaxyField = {
  particles: GalaxyParticle[];
  glyphs: GalaxyGlyph[];
};
