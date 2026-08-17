import { Collectible, Collection } from '@/interfaces/collection.interface';

export interface CollectiblesTabProps {
  onOpenItem: (collection: Collection, item: Collectible) => void;
}
