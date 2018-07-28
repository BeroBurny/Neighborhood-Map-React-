import { ActionType, createStandardAction } from 'typesafe-actions';
import mapTypes from './types';
import { Marker } from '../../types/Marker';
import { SelectOption } from '../../types/SelectOption';
import { Viewport } from '../../types/Viewport';

export const mapActions = {
  markers: {
    fetchAll: createStandardAction(mapTypes.FETCH_MARKERS)(),
    add: createStandardAction(mapTypes.ADD_MARKER)<Marker[]>(),
  },
  selected: {
    change: createStandardAction(mapTypes.CHANGE_SELECTED)<SelectOption[]>(),
  },
  viewport: {
    set: createStandardAction(mapTypes.SET_VIEWPORT)<Viewport>(),
  },
};

export type MapAction = ActionType<typeof mapActions>;
