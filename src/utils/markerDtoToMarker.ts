import { MarkerDto } from '../types/Dto/MarkerDto';
import { Marker } from '../types/Marker';

// normalize API data to APP data for easier integration
// (in case API will return different result this can safe from
// doing a lot of refactoring, bigger code harder)
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
