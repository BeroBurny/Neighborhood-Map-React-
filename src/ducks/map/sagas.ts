import { all, call, put, takeLatest } from 'redux-saga/effects';
import mapTypes from './types';
import { api } from '../../utils/api';
import { MarkerDto } from '../../types/Dto/MarkerDto';
import { Marker } from '../../types/Marker';
import markerDtoToMarker from '../../utils/markerDtoToMarker';
import { mapActions } from './action';

const fetchMarkersRequest = () =>
  api.get('/markers').then(res => res.data)
    .then((res) => { localStorage.setItem('markers', JSON.stringify(res)); return res; });

function* fetchMarkers() {
  try {
    // Fetch data from network
    const markersDto: MarkerDto[] = yield call(fetchMarkersRequest);
    // Normalize data for efficient work
    const markers: Marker[] = markersDto.map(markerDto => markerDtoToMarker(markerDto));
    // Send results to reducers
    yield put(mapActions.markers.add(markers));
    yield put(mapActions.backend.success());
  } catch (e) {
    // in case of fetching failure check if is local storage available
    if (localStorage) {
      // check if is data available in local storage
      const localMarkers = localStorage.getItem('markers');
      if (localMarkers) {
        const markersDto: MarkerDto[] = JSON.parse(localMarkers);
        // Normalize data for efficient work
        const markers: Marker[] = markersDto.map(markerDto => markerDtoToMarker(markerDto));
        // Send results to reducers
        yield put(mapActions.markers.add(markers));
        yield put(mapActions.backend.success());
      } else {
        // Send Error message to reducer
        yield put(mapActions.backend.error());
      }
    } else {
      // Send Error message to reducer
      yield put(mapActions.backend.error());
    }
  }
}

function* mapSagaWatcher() {
  yield all([
    takeLatest(mapTypes.FETCH_MARKERS, fetchMarkers),
  ]);
}

export default mapSagaWatcher;
