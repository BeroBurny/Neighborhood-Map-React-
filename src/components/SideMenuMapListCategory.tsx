import * as React from 'react';
import { Marker } from '../types/Marker';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Root = styled('div')`
  margin: 0;
  padding: 0 20px 20px;
`;

export const CategoryTitle = styled('h2')`
  color: rgba(255,255,255,0.9);
  margin: 5px;
`;

const Item = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
    {markers.map(marker => (
      <Item to={`/${marker.id}` } key={marker.id}>
        <p>{marker.name}</p>
      </Item>))}
  </Root>);
};

export default SideMenuMapListCategory;
