import { RandomGenerator } from '@/types';
import {
  randomDigits,
  randomInt,
  randomItem,
  randomUppercaseLetters,
} from '@/utils/seededRandom';

export function randomTelemetryLine(random: RandomGenerator): string {
  const lines = [
    `PHI ${randomDigits(random, 3)}'  VEL ${randomInt(random, 100, 250)}KM/S`,
    `DENS ${randomInt(random, 8, 13)}.${randomDigits(random, 1)}/PX  ARMS ${randomInt(random, 2, 4)}  SNR ${randomDigits(random, 2)}DB`,
    `SECTOR ${randomUppercaseLetters(random, 1)}-${randomDigits(random, 2)}  Z/${randomDigits(random, 1)}.${randomDigits(random, 3)}  DV ${random() < 0.5 ? '-' : '+'}${randomDigits(random, 1)}.${randomDigits(random, 1)}KM`,
    `REDSHIFT Z=0.0${randomDigits(random, 2)}  DU -${randomDigits(random, 1)}.7KM/S`,
    `AXIS TILT ${randomDigits(random, 2)}'  ECC 0.${randomDigits(random, 2)}`,
    `HII ER ${randomDigits(random, 1)}.${randomDigits(random, 1)}  METAL Z=0.0${randomDigits(random, 2)}`,
  ];
  return randomItem(random, lines);
}
