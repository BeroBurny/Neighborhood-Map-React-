import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import Select from 'react-select';
import {
  MdArrowForward,
  MdRestaurant,
  MdRestaurantMenu,
  MdShoppingBasket,
  MdStyle,
} from 'react-icons/lib/md';
import { RootState } from '../ducks/store';
import {
  getIfIsFastFoodVisible,
  getIfIsRestaurantVisible,
  getIfIsShopVisible,
  getMapMarkers,
  getSelectedMapTypes,
} from '../ducks/map/selectors';
import { Marker } from '../types/Marker';
import mapSelectOptions from '../utils/mapSelectOptions';
import { SelectOption } from '../types/SelectOption';
import { mapActions } from '../ducks/map/action';
import SideMenuMapListCategory, { CategoryTitle } from '../components/SideMenuMapListCategory';

interface RootProps {
  isOpen: boolean;
}

const Root = styled('div')`
  width: 400px;
  height: 100vh;
  background-color: rgba(0,0,0,0.66);
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(${(props: RootProps) => props.isOpen ? 0 : 100}%);
  transition: transform 0.3s ease-in-out;
  border-left: 1px solid rgba(0,0,0,0.33);

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Container = styled('div')`
  width: 100%;
  height: calc(100% - 77px);
  position: absolute;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
      background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }
`;

const Header = styled('h1')`
  margin: 0;
  color: #fff;
  padding: 20px 30px;
  background-color: rgba(17,17,17,0.8);
`;

const Filter = styled('div')`
  margin: 0;
  padding: 20px;
`;

const SideMenuCloseIcon = styled('div')`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 5px;
  color: rgba(255,255,255,0.56);
  background-color: rgba(220,220,220,0.51);
  border: 1px solid rgba(170,164,161,0.47);
  border-radius: 3px;
  transition: opacity 0.3s linear;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface ReduxProps {
  markers: Marker[];
  selected: SelectOption[];
  isRestaurantVisible: boolean;
  isFastFoodVisible: boolean;
  isShopVisible: boolean;
  handleSelectChange: (selected: SelectOption[]) => void;
}

const SideMenu = (props: Props & ReduxProps) => (
  <Root isOpen={props.isOpen}>
    <Header>Main Menu</Header>
    <Container>
      <Filter>
        <CategoryTitle> <MdStyle /> Category's</CategoryTitle>
        <Select
          isMulti
          value={props.selected}
          options={mapSelectOptions}
          onChange={props.handleSelectChange}
        />
      </Filter>
      <SideMenuMapListCategory
        isVisible={props.isRestaurantVisible}
        markers={props.markers.filter(marker => marker.type === 'restaurant')}
        name="Restaurant's"
        icon={<MdRestaurantMenu />}
      />
      <SideMenuMapListCategory
        isVisible={props.isFastFoodVisible}
        markers={props.markers.filter(marker => marker.type === 'fastFood')}
        name="Fast Food Restaurant's"
        icon={<MdRestaurant />}
      />
      <SideMenuMapListCategory
        isVisible={props.isShopVisible}
        markers={props.markers.filter(marker => marker.type === 'shop')}
        name="Shop's"
        icon={<MdShoppingBasket />}
      />
      <SideMenuCloseIcon onClick={props.onClose}>
        <MdArrowForward size={40} />
      </SideMenuCloseIcon>
    </Container>
  </Root>
);

const mapStateToProps = (state: RootState) => ({
  markers: getMapMarkers(state),
  selected: getSelectedMapTypes(state),
  isRestaurantVisible: getIfIsRestaurantVisible(state),
  isFastFoodVisible: getIfIsFastFoodVisible(state),
  isShopVisible: getIfIsShopVisible(state),
});

const mapDispatchToProps = {
  handleSelectChange: mapActions.selected.change,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
