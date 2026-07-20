import type { NetworkId } from '../enums/networkId.enum';

export interface Network {
  id: NetworkId;
  name: string;
  color: string;
  address: string;
}
