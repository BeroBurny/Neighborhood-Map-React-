// Types for redux reducers actions and saga
export enum mapTypes {
  FETCH_MARKERS = 'FETCH_MARKERS',
  ADD_MARKER = 'ADD_MARKER',
  CHANGE_SELECTED = 'CHANGE_SELECTED',
  SET_VIEWPORT = 'SET_VIEWPORT',
  BACKEND_LOADING = 'BACKEND_LOADING',
  BACKEND_ERROR = 'BACKEND_ERROR',
  BACKEND_SUCCESS = 'BACKEND_SUCCESS',
}

// // https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-runtime
// export const enum Direction {
//   ASCENDING = 'ASCENDING',
//   DESCENDING = 'DESCENDING',
// }

export default mapTypes;
