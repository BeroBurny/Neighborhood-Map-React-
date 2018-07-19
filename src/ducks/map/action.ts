import { ActionType, createStandardAction } from 'typesafe-actions';
import mapTypes from './types';
import { Marker } from '../../types/Marker';

export const mapActions = {
  markers: {
    fetchAll: createStandardAction(mapTypes.FETCH_MARKERS)(),
    add: createStandardAction(mapTypes.ADD_MARKER)<Marker[]>(),
  },
};

export type MapAction = ActionType<typeof mapActions>;
