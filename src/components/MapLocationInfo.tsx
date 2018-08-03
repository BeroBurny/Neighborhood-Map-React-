import * as React from 'react';
import styled from 'react-emotion';
import { Popup } from 'react-map-gl';
import { Marker } from '../types/Marker';

////////////////////////////////////////////////////
// styles for elements inside Location information
///////////////////////////////////////////////////
const Container = styled('div')`
  width: 300px;
`;

const Title = styled('h2')`
  color: #252929;
  margin: 4px;
`;

const Address = styled('p')`
font-size: 0.8rem;
  color: #444b4b;
  margin: 0px 10px 10px;
`;

const Description = styled('p')`
  color: #474242;
  margin: 10px;
  white-space: pre-line;
`;

const Rating = styled('div')`
  position: absolute;
  top: 20px;
  right: 15px;
`;

const RatingText = styled('span')`
  font-weight: bold;
  font-size: 1.1rem;
  color: #ffd700;
`;

// end
///////////////////////////////////////////////////

interface Props {
  locationInfo: Marker;
  onClick: () => void;
}

const MapLocationInfo = ({
  onClick,
  locationInfo: { lat, lng, name, address, description, rating },
}: Props) => (
  <Popup tipSize={5}
     anchor="top"
     latitude={lat}
     longitude={lng}
     onClose={onClick} >
    <Container>
      <Title>{name}</Title>
      <Address>{address}</Address>
      <Description>{description}</Description>
      <Rating>Rating: <RatingText>{rating}</RatingText></Rating>
    </Container>
  </Popup>
);

export default MapLocationInfo;
