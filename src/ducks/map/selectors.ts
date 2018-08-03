import { createSelector } from 'reselect';
import { RootState } from '../store';
import { SelectOption } from '../../types/SelectOption';
import { Marker } from '../../types/Marker';
import { match } from 'react-router';
import { Viewport } from '../../types/Viewport';
import { BackendStatus } from '../../types/BackendStatus';

// get all markers from redux state
export const getAllMapMarkers = (state: RootState): Marker[] => state.map.markers;
// get selected map types from redux state
export const getSelectedMapTypes = (state: RootState): SelectOption[] => state.map.selected;
// get viewport from redux state
export const getViewport = (state: RootState): Viewport => state.map.viewport;
// get backend server status  from redux state
export const getBackendStatus = (state: RootState): BackendStatus => state.map.backend;
// get route id from received props
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

// get location information for selected marker
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

// get map markers in range of selected types
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

// check if is type selected
export const getIfIsRestaurantVisible = createSelector(
  getSelectedMapTypes,
  (selected): boolean => !!selected.filter(({ value }) => value === 'restaurant').length,
);
// check if is type selected
export const getIfIsFastFoodVisible = createSelector(
  getSelectedMapTypes,
  (selected): boolean => !!selected.filter(({ value }) => value === 'fastFood').length,
);
// check if is type selected
export const getIfIsShopVisible = createSelector(
  getSelectedMapTypes,
  (selected): boolean => !!selected.filter(({ value }) => value === 'shop').length,
);
