import { all } from 'redux-saga/effects';
import mapSaga from './map/sagas';

export default function* rootSaga() {
  yield all([
    mapSaga(),
  ]);
}
