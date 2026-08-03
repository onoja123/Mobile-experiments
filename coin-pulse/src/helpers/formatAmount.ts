export function formatAmount(value: number) {
  const decimals = value >= 1000 ? 0 : value >= 1 ? 2 : 4;
  const [whole, fraction] = value.toFixed(decimals).split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return fraction ? `${grouped}.${fraction}` : grouped;
}
