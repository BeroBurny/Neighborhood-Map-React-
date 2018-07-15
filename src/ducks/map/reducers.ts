import { getType } from 'typesafe-actions';
import produce from 'immer';
import { MapAction, mapActions } from './action';

export type MapState = {
};

export const initialState: MapState = {
};

export const mapReducer = produce<MapState, MapAction>(
  (state, action) => {
    switch (action.type) {
      case getType(mapActions.add):
        return;
    }
  },
  initialState);
