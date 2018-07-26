import { getType } from 'typesafe-actions';
import produce from 'immer';
import { MapAction, mapActions } from './action';
import { Marker } from '../../types/Marker';
import getUniqueArray from '../../utils/getUniqueArray';
import { SelectOption } from '../../types/SelectOption';
import mapSelectOptions from '../../utils/mapSelectOptions';

export type MapState = {
  markers: Marker[],
  selected: SelectOption[],
};

export const initialState: MapState = {
  markers: [],
  selected: mapSelectOptions,
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
    }
  },
  initialState);
