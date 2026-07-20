import { PropertyType } from '@/enums';

export const HOTEL_FILTERS = ['Location', 'Price', 'Rating', 'Reviews'];
export const SEARCH_BAR_PLACEHOLDER = 'Indonesia';
export const SECTION_STAGGER_MS = 80;
export const SHEET_TOP_OFFSET = 56;

export const SEARCH_DEFAULTS = {
  location: 'Jakarta, Indonesia',
  checkIn: '09/20/2025',
  checkOut: '09/29/2025',
  adults: 2,
  children: 1,
  minPrice: 230,
  maxPrice: 550,
  propertyType: PropertyType.All,
};
