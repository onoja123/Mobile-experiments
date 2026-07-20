export function shadeColor(hex: string, amount: number): string {
  const value = parseInt(hex.slice(1), 16);
  const adjust = (channel: number) =>
    Math.max(
      0,
      Math.min(
        255,
        Math.round(
          channel + (amount < 0 ? channel * amount : (255 - channel) * amount)
        )
      )
    );
  const r = adjust((value >> 16) & 255);
  const g = adjust((value >> 8) & 255);
  const b = adjust(value & 255);
  return `rgb(${r}, ${g}, ${b})`;
}
