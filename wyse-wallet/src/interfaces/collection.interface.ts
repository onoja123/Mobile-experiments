export type ArtId = 'balaclava' | 'prism' | 'clouds' | 'flora';
export type CollectionAvatarId = 'maskfolk' | 'dahlia';

export interface Collectible {
  id: string;
  art: ArtId;
  name: string;
  price: string;
  usd: string;
}

export interface Collection {
  id: string;
  name: string;
  avatar: CollectionAvatarId;
  items: Collectible[];
}
