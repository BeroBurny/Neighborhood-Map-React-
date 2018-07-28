import { createSelector } from 'reselect';
import { RootState } from '../store';
import { SelectOption } from '../../types/SelectOption';
import { Marker } from '../../types/Marker';

export const getAllMapMarkers = (state: RootState): Marker[] => state.map.markers;
export const getSelectedMapTypes = (state: RootState): SelectOption[] => state.map.selected;

export const getMapMarkers = createSelector(
  getAllMapMarkers,
  getSelectedMapTypes,
  (markers, selectedTypes) =>
    markers.filter((marker: Marker) => {
      let isOnList = false;
      selectedTypes.forEach((selected: SelectOption) => {
        if (selected.value === marker.type) {
          isOnList = true;
        }
      });
      return isOnList;
    }),
);

export const getIfIsRestaurantVisible = createSelector(
  getSelectedMapTypes,
  (selected): boolean => !!selected.filter(({ value }) => value === 'restaurant').length,
);
export const getIfIsFastFoodVisible = createSelector(
  getSelectedMapTypes,
  (selected): boolean => !!selected.filter(({ value }) => value === 'fastFood').length,
);
export const getIfIsShopVisible = createSelector(
  getSelectedMapTypes,
  (selected): boolean => !!selected.filter(({ value }) => value === 'shop').length,
);
