export interface RatingCategory {
  label: string;
  score: number;
}

export interface Hotel {
  id: string;
  name: string;
  area: string;
  city: string;
  country: string;
  image: string;
  gallery: string[];
  extraPhotos: number;
  rating: number;
  reviews: number;
  distance: string;
  perks: string[];
  price: number;
  nights: number;
  guests: number;
  capacity: number;
  sqm: number;
  baths: number;
  beds: number;
  description: string;
  categories: RatingCategory[];
}
