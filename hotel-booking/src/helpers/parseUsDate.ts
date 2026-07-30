export function parseUsDate(value: string) {
  const [month, day, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
}
