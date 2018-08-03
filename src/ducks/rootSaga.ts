import { all } from 'redux-saga/effects';
import mapSaga from './map/sagas';

// Split sagas into smaller sagas...
export default function* rootSaga() {
  yield all([
    mapSaga(),
  ]);
}
