import { PARTICLE_DELAY } from '@/constants';
import { clamp01 } from '@/utils/interpolation';

export function getParticleProgress(progress: number, delaySeed: number, columnRatio: number) {
  'worklet';
  const delay =
    PARTICLE_DELAY.base + delaySeed * PARTICLE_DELAY.jitter + columnRatio * PARTICLE_DELAY.columnSweep;
  return clamp01((progress - delay) / (1 - delay));
}
