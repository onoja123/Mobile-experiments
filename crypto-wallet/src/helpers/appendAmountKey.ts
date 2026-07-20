const MAX_DIGITS = 9;

export function appendAmountKey(value: string, key: string, maxDecimals = 2): string {
  if (key === '.') {
    if (value.includes('.')) return value;
    return value === '' ? '0.' : `${value}.`;
  }
  const decimals = value.split('.')[1];
  if (decimals !== undefined && decimals.length >= maxDecimals) return value;
  if (value.replace('.', '').length >= MAX_DIGITS) return value;
  if (value === '0') return key;
  return value + key;
}
