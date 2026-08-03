export const BITCOIN_BODY_PATH =
  'M9.6 5.6v12.8M9.6 5.6h4.3a3.2 3.2 0 0 1 0 6.4H9.6m0 0h5a3.2 3.2 0 0 1 0 6.4h-5';

export const BITCOIN_BARS_PATH = 'M11.4 3.3v2.3M14.6 3.3v2.3M11.4 18.4v2.3M14.6 18.4v2.3';

export const ETHEREUM_TOP_PATH = 'M12 2.6 17.4 12 12 15.2 6.6 12 12 2.6Z';

export const ETHEREUM_BOTTOM_PATH = 'M12 16.8 17.4 13.6 12 21.4 6.6 13.6 12 16.8Z';

export const SOLANA_BAR_PATHS = [
  'M7.2 5.8h13L17 9.1H4z',
  'M4 10.5h13l3.2 3.3H7.2z',
  'M7.2 15.2h13L17 18.5H4z',
];

export const POLKADOT_DOTS = [
  { cx: 12, cy: 4.9, rx: 3.4, ry: 2.3 },
  { cx: 6.1, cy: 8.5, rx: 3.4, ry: 2.3 },
  { cx: 17.9, cy: 8.5, rx: 3.4, ry: 2.3 },
  { cx: 6.1, cy: 15.5, rx: 3.4, ry: 2.3 },
  { cx: 17.9, cy: 15.5, rx: 3.4, ry: 2.3 },
  { cx: 12, cy: 19.1, rx: 3.4, ry: 2.3 },
];

export const TETHER_BAR_PATH = 'M5.6 5.2h12.8';

export const TETHER_STEM_PATH = 'M12 6.2v12.6';

export const CHAINLINK_HEX_PATH = 'M12 3.4 18.4 7.3v7.8L12 19l-6.4-3.9V7.3L12 3.4Z';

export const AVALANCHE_PATH =
  'M12 3.8 20.9 19.8H3.1L12 3.8Zm2.7 9.4 3.4 6.4h-6.8l3.4-6.4Z';

const diamond = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

export const BINANCE_DIAMOND_PATHS = [
  diamond(12, 5.2, 3.1),
  diamond(5.2, 12, 3.1),
  diamond(18.8, 12, 3.1),
  diamond(12, 18.8, 3.1),
  diamond(12, 12, 2.7),
];
