import { Property } from '@/interfaces/property.interface';

export interface PropertyCarouselProps {
  properties: Property[];
  onCardPress?: (property: Property) => void;
}
