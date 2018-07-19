// import { createSelector } from 'reselect';
import { RootState } from '../store';

export const getMapMarkers = (state: RootState) => state.map.markers;
