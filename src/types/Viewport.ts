import { TransitionInterpolator } from 'react-map-gl';

export interface Viewport {
  width: number;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
  transitionDuration: number;
  transitionInterpolator: TransitionInterpolator;
}
