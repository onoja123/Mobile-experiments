import type { Rect } from './geometry.types';

export type DestinationReview = {
  id: string;
  name: string;
  avatar: string;
  text: string;
};

export type Destination = {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  reviews: DestinationReview[];
};

export type ExpandedDestination = {
  destination: Destination;
  index: number;
  originRect: Rect;
};
