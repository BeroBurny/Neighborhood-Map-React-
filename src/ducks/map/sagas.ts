import { all, call, takeLatest } from 'redux-saga/effects';
import mapTypes from './types';

const fetchMarkersRequesr = () => {
  console.log('fetching markers');
};

function* fetchMarkers() {
  try {
    yield call(fetchMarkersRequesr);
  } catch (e) {
    console.log(e);
  }
}

function* mapSagaWatcher() {
  yield all([
    takeLatest(mapTypes.FETCH_MARKERS, fetchMarkers),
  ]);
}

export default mapSagaWatcher;
