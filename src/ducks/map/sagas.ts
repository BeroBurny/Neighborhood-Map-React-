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
    const markersDto: MarkerDto[] = yield call(fetchMarkersRequest);
    const markers: Marker[] = markersDto.map(markerDto => markerDtoToMarker(markerDto));
    yield put(mapActions.markers.add(markers));
    yield put(mapActions.backend.success());
  } catch (e) {
    if (localStorage) {
      const localMarkers = localStorage.getItem('markers');
      if (localMarkers) {
        const markersDto: MarkerDto[] = JSON.parse(localMarkers);
        const markers: Marker[] = markersDto.map(markerDto => markerDtoToMarker(markerDto));
        yield put(mapActions.markers.add(markers));
        yield put(mapActions.backend.success());
      } else {
        yield put(mapActions.backend.error());
      }
    } else {
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
