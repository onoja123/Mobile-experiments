import { RandomGenerator } from '@/types';
import { randomInt, randomUppercaseLetters } from '@/utils/seededRandom';

const ROW_LENGTH = 18;

export function makeDottedCipherRow(random: RandomGenerator): string {
  const letterIndex = randomInt(random, 0, ROW_LENGTH - 1);
  const hasLetter = random() < 0.8;
  let row = '';
  for (let x = 0; x < ROW_LENGTH; x++)
    row += hasLetter && x === letterIndex ? randomUppercaseLetters(random, 1) : '.';
  return row;
}
