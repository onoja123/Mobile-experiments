export function formatUsd(value: number, decimals = 2) {
  const [whole, fraction] = value.toFixed(decimals).split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return fraction ? `$${grouped}.${fraction}` : `$${grouped}`;
}
