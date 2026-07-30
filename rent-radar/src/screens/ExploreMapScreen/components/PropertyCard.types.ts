import { Property } from '@/interfaces/property.interface';

export interface PropertyCardProps {
  property: Property;
  onPress?: () => void;
}
