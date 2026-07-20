import { IpoStatus } from '../enums/ipoStatus.enum';
import type { Ipo, RelatedIpo } from '../interfaces/ipo.interface';

const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;
const MINUTE_MS = 60_000;

export const FEATURED_IPO: Ipo = {
  id: 'novagrid',
  company: 'NovaGrid',
  ticker: 'NVGD',
  industry: 'Clean Energy',
  sector: 'Renewable Infrastructure',
  exchange: 'NASDAQ',
  monogram: 'N',
  gradient: ['#7B61FF', '#4B33D6'],
  status: IpoStatus.Open,
  listingDate: 'Jul 28, 2026',
  countdownMs: 12 * DAY_MS + 4 * HOUR_MS + 32 * MINUTE_MS,
  priceLow: 28,
  priceHigh: 34,
  demandPercent: 87,
  valuation: '$12.4B',
  raise: '$1.8B',
  underwriters: 'Morgan Stanley · Goldman Sachs',
  description:
    'NovaGrid builds distributed battery networks that turn homes and businesses into a single virtual power plant, balancing the grid in real time.',
  marketOpportunity:
    'Grid-scale storage demand is projected to grow 6x by 2032 as renewables pass 40% of generation. NovaGrid operates in 14 states with utility partnerships covering 31M households.',
  financialHighlights:
    'Revenue grew 118% year over year to $842M with 61% gross margin. The company turned profitable in Q3 2025 and holds $1.1B in contracted backlog.',
  growthMetrics:
    'Deployed capacity doubled to 4.2 GWh, retention across utility contracts is 98%, and software attach revenue now represents 34% of total sales.',
  details: [
    { id: 'valuation', label: 'Expected Valuation', value: '$12.4B', icon: 'bar-chart-2' },
    { id: 'raise', label: 'Expected Raise', value: '$1.8B', icon: 'download' },
    { id: 'underwriters', label: 'Lead Underwriters', value: 'Morgan Stanley · Goldman Sachs', icon: 'briefcase' },
    { id: 'sector', label: 'Sector', value: 'Renewable Infrastructure', icon: 'zap' },
    { id: 'exchange', label: 'Exchange', value: 'NASDAQ', icon: 'globe' },
  ],
  metrics: [
    { id: 'revenue', label: 'Revenue', value: '$842M', hint: '+118% YoY' },
    { id: 'profit', label: 'Net Profit', value: '$118M', hint: '14% margin' },
    { id: 'marketcap', label: 'Market Cap', value: '$12.4B', hint: 'at midpoint' },
    { id: 'employees', label: 'Employees', value: '4,300', hint: '14 states' },
    { id: 'founded', label: 'Founded', value: '2016', hint: 'Austin, TX' },
    { id: 'backlog', label: 'Backlog', value: '$1.1B', hint: 'contracted' },
  ],
  timeline: [
    { id: 'founded', year: '2016', title: 'Founded', detail: 'Started in Austin by two grid engineers' },
    { id: 'seed', year: '2017', title: 'Seed', detail: '$4.5M to build the first pilot network' },
    { id: 'series-a', year: '2019', title: 'Series A', detail: '$38M led by Breakthrough Energy' },
    { id: 'series-b', year: '2021', title: 'Series B', detail: '$210M as capacity passed 1 GWh' },
    { id: 'series-c', year: '2023', title: 'Series C', detail: '$480M at a $6.2B valuation' },
    { id: 'ipo', year: '2026', title: 'IPO', detail: 'Listing on NASDAQ as NVGD' },
  ],
  minInvestment: 100,
  maxInvestment: 25_000,
};

export const RELATED_IPOS: RelatedIpo[] = [
  {
    id: 'lumenbio',
    company: 'Lumen Bio',
    ticker: 'LMNB',
    industry: 'Biotech',
    monogram: 'L',
    gradient: ['#F3B8DC', '#D9589F'],
    daysLeft: 19,
    raise: '$640M',
  },
  {
    id: 'arcadia',
    company: 'Arcadia Labs',
    ticker: 'ARCL',
    industry: 'AI Infrastructure',
    monogram: 'A',
    gradient: ['#9BE8C5', '#1F9D6C'],
    daysLeft: 26,
    raise: '$2.3B',
  },
  {
    id: 'solace',
    company: 'Solace',
    ticker: 'SOLC',
    industry: 'Fintech',
    monogram: 'S',
    gradient: ['#A6D8F5', '#2E7CC7'],
    daysLeft: 34,
    raise: '$920M',
  },
  {
    id: 'helio',
    company: 'Helio Dynamics',
    ticker: 'HELD',
    industry: 'Aerospace',
    monogram: 'H',
    gradient: ['#F5D6A6', '#DE8A2E'],
    daysLeft: 41,
    raise: '$1.2B',
  },
];
