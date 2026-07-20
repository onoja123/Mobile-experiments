export function shade(hex: string, amount: number) {
  const value = parseInt(hex.slice(1), 16);
  const channel = (component: number) => {
    const scaled = Math.round(Math.max(0, Math.min(255, component * (1 + amount))));
    return scaled.toString(16).padStart(2, '0');
  };
  return `#${channel((value >> 16) & 255)}${channel((value >> 8) & 255)}${channel(value & 255)}`;
}
