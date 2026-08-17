import { Collectible, Collection } from '@/interfaces/collection.interface';

export interface CollectibleScreenProps {
  collection: Collection;
  item: Collectible;
  onBack: () => void;
}
