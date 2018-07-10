import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import { StateType } from 'typesafe-actions';

import rootSaga from './rootSaga';

// create Saga Middleware
const sagaMiddleware = reduxSaga();

const middleware = [sagaMiddleware];
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({});

export type RootState = StateType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
