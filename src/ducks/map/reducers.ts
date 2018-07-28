import { getType } from 'typesafe-actions';
import produce from 'immer';
import { MapAction, mapActions } from './action';
import { Marker } from '../../types/Marker';
import getUniqueArray from '../../utils/getUniqueArray';
import { SelectOption } from '../../types/SelectOption';
import mapSelectOptions from '../../utils/mapSelectOptions';
import { Viewport } from '../../types/Viewport';
import { FlyToInterpolator } from 'react-map-gl';

export type MapState = {
  markers: Marker[],
  selected: SelectOption[],
  viewport: Viewport,
};

export const initialState: MapState = {
  markers: [],
  selected: mapSelectOptions,
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
      case getType(mapActions.markers.add):
        state.markers = getUniqueArray<Marker>([...state.markers, ...action.payload]);
        return;

      case getType(mapActions.selected.change):
        state.selected = action.payload;
        return;

      case getType(mapActions.viewport.set):
        state.viewport = action.payload;
        return;
    }
  },
  initialState);
