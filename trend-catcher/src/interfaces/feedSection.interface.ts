export interface FeedCard {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export interface FeedSection {
  id: string;
  headline: string;
  cards: FeedCard[];
}
