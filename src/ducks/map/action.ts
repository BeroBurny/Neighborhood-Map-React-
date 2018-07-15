import { ActionType, createStandardAction } from 'typesafe-actions';
import mapTypes from './types';

export const mapActions = {
  add: createStandardAction(mapTypes.ADD_MARKER)(),
};

export type MapAction = ActionType<typeof mapActions>;
