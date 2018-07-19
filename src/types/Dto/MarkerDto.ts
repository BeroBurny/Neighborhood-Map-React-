export interface MarkerDto {
  Created_date: string;
  address: string;
  description: string;
  latitude: number;
  longitude: number;
  name: string;
  rating: number;
  type: 'restaurant' | 'shop' | 'fastFood';
  __v: number;
  _id: string;
}
