import { PropertyType } from '@/enums';

export const HOTEL_FILTERS = ['Location', 'Price', 'Rating', 'Reviews'];
export const SEARCH_BAR_PLACEHOLDER = 'Spain';
export const SECTION_STAGGER_MS = 80;
export const SEARCH_LATENCY_MS = 100;

export const SEARCH_DEFAULTS = {
  location: 'Palma de Mallorca, Spain',
  checkIn: '09/20/2025',
  checkOut: '09/29/2025',
  adults: 2,
  children: 1,
  minPrice: 300,
  maxPrice: 650,
  propertyType: PropertyType.All,
};
