export function groupThousands(value: string): string {
  const [whole, decimals] = value.split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimals !== undefined ? `${grouped}.${decimals}` : grouped;
}
