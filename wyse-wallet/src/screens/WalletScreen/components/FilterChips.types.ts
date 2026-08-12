import { ActivityFilter } from '@/enums/activityFilter.enum';

export interface FilterChipsProps {
  active: ActivityFilter;
  onChange: (filter: ActivityFilter) => void;
}
