import { SharedValue } from 'react-native-reanimated';

import { Collection } from '@/interfaces/collection.interface';

export type CollectionCardProps = {
  collection: Collection;
  index: number;
  scrollY: SharedValue<number>;
};
