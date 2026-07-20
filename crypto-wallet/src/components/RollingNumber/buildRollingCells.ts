import type { RollingCell, RollingKeyMode } from './RollingNumber.types';

export function buildRollingCells(text: string, keyMode: RollingKeyMode): RollingCell[] {
  const chars = text.split('');
  if (keyMode === 'value') {
    return chars.map((char, index) => ({
      key: `p${chars.length - 1 - index}`,
      char,
    }));
  }
  let ordinal = 0;
  return chars.map((char) => {
    if (char === ',') return { key: `s${ordinal}`, char };
    const cell = { key: `t${ordinal}`, char };
    ordinal += 1;
    return cell;
  });
}
