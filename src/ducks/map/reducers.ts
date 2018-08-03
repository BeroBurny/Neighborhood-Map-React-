import { getType } from 'typesafe-actions';
import produce from 'immer';
import { MapAction, mapActions } from './action';
import { Marker } from '../../types/Marker';
import getUniqueArray from '../../utils/getUniqueArray';
import { SelectOption } from '../../types/SelectOption';
import mapSelectOptions from '../../utils/mapSelectOptions';
import { Viewport } from '../../types/Viewport';
import { FlyToInterpolator } from 'react-map-gl';
import { BackendStatus } from '../../types/BackendStatus';

export type MapState = {
  markers: Marker[],
  selected: SelectOption[],
  viewport: Viewport,
  backend: BackendStatus,
};

// default state for Map
export const initialState: MapState = {
  markers: [],
  selected: mapSelectOptions,
  backend: 'loading',
  viewport: {
    width: 0,
    height: 0,
    latitude: 45.814,
    longitude: 15.977,
    zoom: 14,
    transitionInterpolator: new FlyToInterpolator(),
    transitionDuration: 0,
  },
};

export const mapReducer = produce<MapState, MapAction>(
  (state, action) => {
    switch (action.type) {
      // Add markers to state
      case getType(mapActions.markers.add):
        state.markers = getUniqueArray<Marker>([...state.markers, ...action.payload]);
        return;

      // Change selected categories...
      case getType(mapActions.selected.change):
        state.selected = action.payload;
        return;

      // Set State for map marker Info
      case getType(mapActions.viewport.set):
        state.viewport = action.payload;
        return;

      ////////////////////////
      // Set fetching status
      case getType(mapActions.backend.loading):
        state.backend = 'loading';
        return;

      case getType(mapActions.backend.success):
        state.backend = 'success';
        return;

      case getType(mapActions.backend.error):
        state.backend = 'error';
        return;
    }
  },
  initialState);
