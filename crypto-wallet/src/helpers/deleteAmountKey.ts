export function deleteAmountKey(value: string): string {
  return value.length <= 1 ? '' : value.slice(0, -1);
}
