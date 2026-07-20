export function parseNaira(price: string): number {
  return Number(price.replace(/[^\d.]/g, '')) || 0;
}
