import { OrderBookLevel } from '@/interfaces/orderBookLevel.interface';

export const QUOTE_TICKER = 'USDT';

export const FIAT_QUOTE_TICKER = 'USD';

export const CHART_POINTS = [
  0.38, 0.27, 0.14, 0.24, 0.36, 0.44, 0.32, 0.29, 0.26, 0.23, 0.31, 0.28, 0.37, 0.35, 0.44, 0.43,
  0.6, 0.57, 0.71, 0.66, 0.78, 0.7, 0.91, 0.97, 0.9,
];

export const CHART_MARKER_INDICES = [2, 16];

export const CHART_FOCUS_START_INDEX = 14;

export const TIME_RANGES = ['1H', '1D', '1W', '1M', '1Y', 'All'];

export const ACTIVE_TIME_RANGE = '1W';

export const TRADE_TABS = ['Order book', 'Trades', 'Depth', 'Stats'];

export const ORDER_BOOK_LEVELS: OrderBookLevel[] = [
  {
    spread: 0.0018,
    bidVolume: '412,908,331',
    bidDepth: 0.28,
    askVolume: '755,120,904',
    askDepth: 0.4,
  },
  {
    spread: 0.0046,
    bidVolume: '901,447,260',
    bidDepth: 0.5,
    askVolume: '1,742,336,015',
    askDepth: 0.64,
  },
  {
    spread: 0.0092,
    bidVolume: '2,318,760,884',
    bidDepth: 0.74,
    askVolume: '5,004,912,377',
    askDepth: 0.86,
  },
  {
    spread: 0.0155,
    bidVolume: '3,884,205,119',
    bidDepth: 0.92,
    askVolume: '7,961,430,552',
    askDepth: 1,
  },
];

export const ORDER_BOOK_ROW_OPACITIES = [1, 1, 0.45, 0.16];
