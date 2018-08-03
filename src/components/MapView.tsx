import * as React from 'react';
import { InteractiveMap, Marker } from 'react-map-gl';
import styled from 'react-emotion';
import { Viewport } from '../types/Viewport';
import { Marker as MarkerType } from '../types/Marker';
import MapPin from './MapPin';
import MapLocationInfo from './MapLocationInfo';

// Add style for Map
const MapElement = styled(InteractiveMap)`
  position: fixed;
  top: 0;
  left: 0;
`;

interface Props {
  markers: MarkerType[];
  viewport: Viewport;
  locationInfo: MarkerType | null;
  setViewport: (viewport: Viewport) => void;
  history: any;
}

class MapView extends React.Component<Props, {}> {
  public updateDimensions = () => {
    this.props.setViewport({
      ...this.props.viewport,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  public render() {
    const apiAccessToken = `${process.env.REACT_APP_MAPBOXACCESSTOKEN}`;
    const { markers, locationInfo, setViewport, viewport } = this.props;

    // Calculate markers for displaying on map
    const Markers = markers.map(marker => (
      <Marker
        key={marker.id}
        latitude={marker.lat}
        longitude={marker.lng}
      >
        <MapPin onClick={() => {
          this.props.history.push(marker.id);
        }}
        selected={locationInfo !== null && marker.id === locationInfo.id}
        />
      </Marker>
    ));

    return (
      <MapElement
        {...viewport}
        mapboxApiAccessToken={apiAccessToken}
        onClick={() => this.props.history.push('/')}
        onViewportChange={(newViewport: Viewport) => setViewport(
          { ...newViewport, transitionDuration: 0 },
          )}
      >
        {Markers}
        {locationInfo ?
          // if is icon selected render it on map
          <MapLocationInfo
            locationInfo={locationInfo}
            onClick={() => this.props.history.push('/')}
          />
        : null}
      </MapElement>
    );
  }
}

export default MapView;
