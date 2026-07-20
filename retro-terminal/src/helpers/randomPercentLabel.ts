import { RandomGenerator } from '@/types';
import { randomInt } from '@/utils/seededRandom';

export const randomPercentLabel = (random: RandomGenerator) =>
  `${randomInt(random, 10, 97)}%`;
