import type { IpoStatus } from '../enums/ipoStatus.enum';
import type { GradientPair } from '../types/gradient.types';

export interface IpoTimelineEvent {
  id: string;
  year: string;
  title: string;
  detail: string;
}

export interface IpoMetric {
  id: string;
  label: string;
  value: string;
  hint: string;
}

export interface IpoDetail {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface Ipo {
  id: string;
  company: string;
  ticker: string;
  industry: string;
  sector: string;
  exchange: string;
  monogram: string;
  gradient: GradientPair;
  status: IpoStatus;
  listingDate: string;
  countdownMs: number;
  priceLow: number;
  priceHigh: number;
  demandPercent: number;
  valuation: string;
  raise: string;
  underwriters: string;
  description: string;
  marketOpportunity: string;
  financialHighlights: string;
  growthMetrics: string;
  details: IpoDetail[];
  metrics: IpoMetric[];
  timeline: IpoTimelineEvent[];
  minInvestment: number;
  maxInvestment: number;
}

export interface RelatedIpo {
  id: string;
  company: string;
  ticker: string;
  industry: string;
  monogram: string;
  gradient: GradientPair;
  daysLeft: number;
  raise: string;
}
