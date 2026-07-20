export const DISSOLVE_TILE_SIZE = 3;
export const DISSOLVE_DURATION_MS = 3000;
export const MATERIALIZE_DURATION_MS = 1200;
export const SEEDS_PER_PARTICLE = 6;

export const PARTICLE_DELAY = {
  base: 0.06,
  jitter: 0.26,
  columnSweep: 0.08,
} as const;

export const PARTICLE_MOTION = {
  scatterBase: 14,
  scatterJitter: 70,
  windOverscan: 80,
  windBase: 0.45,
  windJitter: 0.75,
  liftBase: 6,
  liftJitter: 38,
  fallBase: 50,
  fallJitter: 160,
  wobbleFrequencyBase: 6,
  wobbleFrequencyJitter: 6,
  wobbleAmplitude: 6,
  crumbleStart: 0.45,
  maxShrink: 0.68,
  spinRange: 2.5,
} as const;

export const PARTICLE_FADE = {
  startBase: 0.5,
  startJitter: 0.38,
  end: 0.97,
} as const;

export const FROST_EFFECT = {
  maxBlur: 16,
  blurEnd: 0.22,
  hold: 0.08,
  clear: 0.3,
} as const;
