import { MarkerDto } from '../types/Dto/MarkerDto';
import { Marker } from '../types/Marker';

const markerDtoToMarker = (markerDto: MarkerDto): Marker => ({
  address: markerDto.address,
  description: markerDto.description,
  lat: markerDto.latitude,
  lng: markerDto.longitude,
  name: markerDto.name,
  rating: markerDto.rating,
  type: markerDto.type,
  id: markerDto._id,
});

export default markerDtoToMarker;
