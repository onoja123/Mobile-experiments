import { palette } from '@/theme';
import { GalaxyField, GalaxyGlyph, GalaxyParticle } from '@/types';
import { createSeededRandom, randomInt, randomItem } from '@/utils/seededRandom';

const GALAXY_SHADES = ['#EAE3CE', palette.cream, '#A8A28C', palette.olive, '#434035'];

const PARTICLE_COUNT = 330;
const GLYPH_COUNT = 44;
const SPIRAL_ROTATION = -0.48;

export function generateGalaxy(seed: number, width: number, height: number): GalaxyField {
  const random = createSeededRandom(seed * 30011 + 9);
  const centerX = width / 2;
  const centerY = height / 2;
  const cos = Math.cos(SPIRAL_ROTATION);
  const sin = Math.sin(SPIRAL_ROTATION);
  const particles: GalaxyParticle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const t = Math.pow(random(), 0.55);
    const angle = random() * Math.PI * 2;
    const x0 = Math.cos(angle) * t * width * 0.42;
    const y0 = Math.sin(angle) * t * 26 + (random() - 0.5) * 14 * (1 - t);
    const x = centerX + x0 * cos - y0 * sin;
    const y = centerY + x0 * sin + y0 * cos;
    const shade = Math.min(GALAXY_SHADES.length - 1, Math.floor(t * 3.2 + random() * 1.6));
    particles.push({
      x,
      y,
      size: t < 0.25 ? 2 : randomInt(random, 2, 4),
      color: GALAXY_SHADES[shade],
    });
  }
  const glyphs: GalaxyGlyph[] = [];
  for (let i = 0; i < GLYPH_COUNT; i++) {
    glyphs.push({
      x: random() * width,
      y: random() * height,
      char: randomItem(random, ['d', 'h']),
    });
  }
  return { particles, glyphs };
}
