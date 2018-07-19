export type MarkerType = 'restaurant' | 'shop' | 'fastFood';

export interface Marker {
  address: string;
  description: string;
  lat: number;
  lng: number;
  name: string;
  rating: number;
  type: MarkerType;
  id: string;
}
