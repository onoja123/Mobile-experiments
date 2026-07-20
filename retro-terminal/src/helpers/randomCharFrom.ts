import { RandomGenerator } from '@/types';
import { randomItem } from '@/utils/seededRandom';

export const randomCharFrom = (random: RandomGenerator, chars: string) =>
  randomItem(random, chars.split(''));
