import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useColorBuffer, useRectBuffer, useRSXformBuffer } from '@shopify/react-native-skia';
import type { SharedValue } from 'react-native-reanimated';

import {
  DISSOLVE_TILE_SIZE,
  PARTICLE_FADE,
  PARTICLE_MOTION,
  SEEDS_PER_PARTICLE,
} from '@/constants';
import { getParticleProgress } from '@/helpers/getParticleProgress';
import type { DissolveJob } from '@/types';
import { clamp01, smoothstep } from '@/utils/interpolation';

export function useDissolveParticles(job: DissolveJob, progress: SharedValue<number>) {
  const { image, x, y, width, height } = job;
  const { width: screenWidth } = useWindowDimensions();

  const cols = Math.ceil(width / DISSOLVE_TILE_SIZE);
  const rows = Math.ceil(height / DISSOLVE_TILE_SIZE);
  const count = cols * rows;
  const pixelScale = image.width() / width;

  const seeds = useMemo(() => {
    const data = new Float32Array(count * SEEDS_PER_PARTICLE);
    for (let i = 0; i < data.length; i++) data[i] = Math.random();
    return data;
  }, [count]);

  const sprites = useRectBuffer(count, (rect, i) => {
    'worklet';
    const col = i % cols;
    const row = Math.floor(i / cols);
    const tile = DISSOLVE_TILE_SIZE * pixelScale;
    rect.setXYWH(col * tile, row * tile, tile, tile);
  });

  const transforms = useRSXformBuffer(count, (transform, i) => {
    'worklet';
    const col = i % cols;
    const row = Math.floor(i / cols);
    const originX = x + col * DISSOLVE_TILE_SIZE;
    const originY = y + row * DISSOLVE_TILE_SIZE;

    const s = i * SEEDS_PER_PARTICLE;
    const t = getParticleProgress(progress.value, seeds[s], col / cols);
    const drive = smoothstep(t);
    const tt = t * t;

    const scatterAngle = seeds[s + 1] * Math.PI * 2;
    const scatter = (PARTICLE_MOTION.scatterBase + seeds[s + 2] * PARTICLE_MOTION.scatterJitter) * drive;
    const wind =
      (screenWidth + PARTICLE_MOTION.windOverscan - originX) *
      (PARTICLE_MOTION.windBase + seeds[s + 3] * PARTICLE_MOTION.windJitter) *
      tt;
    const lift = (PARTICLE_MOTION.liftBase + seeds[s + 4] * PARTICLE_MOTION.liftJitter) * drive;
    const fall = (PARTICLE_MOTION.fallBase + seeds[s + 4] * PARTICLE_MOTION.fallJitter) * tt * tt;
    const wobble =
      Math.sin(t * (PARTICLE_MOTION.wobbleFrequencyBase + seeds[s + 5] * PARTICLE_MOTION.wobbleFrequencyJitter) * Math.PI) *
      PARTICLE_MOTION.wobbleAmplitude *
      drive *
      (1 - t);

    const tx = originX + Math.cos(scatterAngle) * scatter + wind;
    const ty = originY + Math.sin(scatterAngle) * scatter - lift + fall + wobble;

    const crumble = t > PARTICLE_MOTION.crumbleStart ? 1 : t / PARTICLE_MOTION.crumbleStart;
    const size = (1 - PARTICLE_MOTION.maxShrink * crumble) / pixelScale;
    const spin = (seeds[s + 5] - 0.5) * PARTICLE_MOTION.spinRange * drive;
    transform.set(size * Math.cos(spin), size * Math.sin(spin), tx, ty);
  });

  const colors = useColorBuffer(count, (color, i) => {
    'worklet';
    const col = i % cols;
    const s = i * SEEDS_PER_PARTICLE;
    const t = getParticleProgress(progress.value, seeds[s], col / cols);

    const fadeStart = PARTICLE_FADE.startBase + seeds[s + 5] * PARTICLE_FADE.startJitter;
    const fade = clamp01((t - fadeStart) / (PARTICLE_FADE.end - fadeStart));
    const alpha = 1 - smoothstep(fade);

    color[0] = 1;
    color[1] = 1;
    color[2] = 1;
    color[3] = alpha;
  });

  return { sprites, transforms, colors };
}
