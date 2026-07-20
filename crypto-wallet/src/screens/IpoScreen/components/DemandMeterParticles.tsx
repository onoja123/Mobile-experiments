import React from 'react';
import { Circle } from '@shopify/react-native-skia';
import { useDerivedValue, type SharedValue } from 'react-native-reanimated';

const CANVAS_HEIGHT = 36;

const PARTICLES = [
  { seed: 0.08, speed: 0.36, drift: 2.4, radius: 1.7 },
  { seed: 0.31, speed: 0.22, drift: 3.1, radius: 1.3 },
  { seed: 0.52, speed: 0.45, drift: 2.0, radius: 1.9 },
  { seed: 0.69, speed: 0.28, drift: 2.8, radius: 1.4 },
  { seed: 0.87, speed: 0.4, drift: 2.2, radius: 1.6 },
];

type ParticleProps = {
  width: SharedValue<number>;
  clock: SharedValue<number>;
  seed: number;
  speed: number;
  drift: number;
  radius: number;
};

function Particle({ width, clock, seed, speed, drift, radius }: ParticleProps) {
  const cx = useDerivedValue(() => {
    const t = (seed + (clock.value / 1000) * speed * 0.12) % 1;
    return 8 + t * Math.max(0, width.value - 16);
  });
  const cy = useDerivedValue(
    () =>
      CANVAS_HEIGHT / 2 +
      Math.sin((clock.value / 1000) * (0.8 + speed) + seed * 20) * drift,
  );
  const opacity = useDerivedValue(
    () => 0.35 + Math.sin((clock.value / 1000) * 1.6 + seed * 30) * 0.3,
  );

  return <Circle cx={cx} cy={cy} r={radius} color="#FFFFFF" opacity={opacity} />;
}

type DemandMeterParticlesProps = {
  width: SharedValue<number>;
  clock: SharedValue<number>;
};

export function DemandMeterParticles({ width, clock }: DemandMeterParticlesProps) {
  return (
    <>
      {PARTICLES.map((particle) => (
        <Particle key={particle.seed} width={width} clock={clock} {...particle} />
      ))}
    </>
  );
}
