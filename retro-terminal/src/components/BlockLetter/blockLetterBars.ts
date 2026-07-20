import { BlockLetterBar } from './BlockLetter.types';

export function getBlockLetterBars(
  char: string,
  width: number,
  height: number,
  thickness: number,
): BlockLetterBar[] {
  const midY = (height - thickness) / 2;
  const centerX = (width - thickness) / 2;
  switch (char) {
    case 'H':
      return [
        [0, 0, thickness, height],
        [width - thickness, 0, thickness, height],
        [0, midY, width, thickness],
      ];
    case 'E':
      return [
        [0, 0, thickness, height],
        [0, 0, width, thickness],
        [0, midY, width * 0.82, thickness],
        [0, height - thickness, width, thickness],
      ];
    case 'L':
      return [
        [0, 0, thickness, height],
        [0, height - thickness, width, thickness],
      ];
    case 'T':
      return [
        [0, 0, width, thickness],
        [centerX, 0, thickness, height],
      ];
    case 'U':
      return [
        [0, 0, thickness, height - thickness * 0.4],
        [width - thickness, 0, thickness, height - thickness * 0.4],
        [0, height - thickness, width, thickness],
      ];
    case 'M':
      return [
        [0, 0, thickness, height],
        [width - thickness, 0, thickness, height],
        [0, 0, width, thickness],
        [centerX, 0, thickness, height * 0.62],
      ];
    case 'A':
      return [
        [0, 0, thickness, height],
        [width - thickness, 0, thickness, height],
        [0, 0, width, thickness],
        [0, midY, width, thickness],
      ];
    case 'B':
      return [
        [0, 0, thickness, height],
        [0, 0, width, thickness],
        [0, midY, width, thickness],
        [0, height - thickness, width, thickness],
        [width - thickness, 0, thickness, height],
      ];
    default:
      return [
        [0, 0, thickness, height],
        [width - thickness, 0, thickness, height],
        [0, 0, width, thickness],
        [0, height - thickness, width, thickness],
      ];
  }
}
