import { RandomGenerator } from '@/types';

export function createSeededRandom(seed: number): RandomGenerator {
  let state = seed >>> 0;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const randomItem = <T>(random: RandomGenerator, items: readonly T[]): T =>
  items[Math.floor(random() * items.length)];

export const randomInt = (random: RandomGenerator, min: number, max: number): number =>
  min + Math.floor(random() * (max - min + 1));

export const randomDigits = (random: RandomGenerator, count: number): string =>
  Array.from({ length: count }, () => randomInt(random, 0, 9)).join('');

const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const randomUppercaseLetters = (random: RandomGenerator, count: number): string =>
  Array.from({ length: count }, () => randomItem(random, UPPERCASE_LETTERS)).join('');

export const randomLowercaseLetters = (random: RandomGenerator, count: number): string =>
  Array.from({ length: count }, () => randomItem(random, LOWERCASE_LETTERS)).join('');
