import * as React from 'react';
import { Marker } from '../types/Marker';
import styled from 'react-emotion';

const Root = styled('div')`
  margin: 0;
  padding: 0 20px 20px;
`;

export const CategoryTitle = styled('h2')`
  color: rgba(255,255,255,0.9);
  margin: 5px;
`;

interface Props {
  isVisible: boolean;
  markers: Marker[];
  name: string;
  icon: React.ReactNode;
}

const SideMenuMapListCategory = (props: Props) => {
  const { isVisible, markers, name, icon } = props;
  if (!isVisible) {
    return null;
  }

  return (<Root>
    <CategoryTitle>{icon} {name}</CategoryTitle>
    {markers.map(marker => (<p  key={marker.id}>{marker.name}</p>))}
  </Root>);
};

export default SideMenuMapListCategory;
