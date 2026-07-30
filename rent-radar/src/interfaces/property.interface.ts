export interface Property {
  id: string;
  name: string;
  address: string;
  rating: number;
  price: string;
  imageUrl: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}
