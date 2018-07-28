import { createSelector } from 'reselect';
import { RootState } from '../store';
import { SelectOption } from '../../types/SelectOption';
import { Marker } from '../../types/Marker';
import { match } from 'react-router';
import { Viewport } from '../../types/Viewport';

export const getAllMapMarkers = (state: RootState): Marker[] => state.map.markers;
export const getSelectedMapTypes = (state: RootState): SelectOption[] => state.map.selected;
export const getViewPort = (state: RootState): Viewport => state.map.viewport;
export const getRouteIdFromProps = (
  _: any,
  props: {match: match<{ID: string}>},
): string | null => {
  const { ID } = props.match.params;
  if (!ID) {
    return null;
  }
  return ID;
};

export const getLocationInfo = createSelector(
  getAllMapMarkers,
  getRouteIdFromProps,
  (markers, id): Marker | null => {
    if (!id || !markers.length) {
      return null;
    }
    return markers.filter((marker: Marker) => marker.id === id)[0];
  },
);

export const getMapMarkers = createSelector(
  getAllMapMarkers,
  getSelectedMapTypes,
  (markers, selectedTypes): Marker[] =>
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
