import { getType } from 'typesafe-actions';
import produce from 'immer';
import { MapAction, mapActions } from './action';
import { Marker } from '../../types/Marker';
import getUniqueArray from '../../utils/getUniqueArray';

export type MapState = {
  markers: Marker[],
};

export const initialState: MapState = {
  markers: [],
};

export const mapReducer = produce<MapState, MapAction>(
  (state, action) => {
    switch (action.type) {
      case getType(mapActions.markers.add):
        state.markers = getUniqueArray<Marker>([...state.markers, ...action.payload]);
        return;
    }
  },
  initialState);
