import * as React from 'react';
import { InteractiveMap, Marker } from 'react-map-gl';
import styled from 'react-emotion';
import { Viewport } from '../types/Viewport';
import { Marker as MarkerType } from '../types/Marker';
import MapPin from './MapPin';
import MapLocationInfo from './MapLocationInfo';

const MapElement = styled(InteractiveMap)`
  position: fixed;
  top: 0;
  left: 0;
`;

interface Props {
  markers: MarkerType[];
  locationInfo: MarkerType | null;
  history: any;
}

interface State {
  viewport: Viewport;
}

class MapView extends React.Component<Props, State> {
  public state = {
    viewport: {
      width: 0,
      height: 0,
      latitude: 45.814,
      longitude: 15.977,
      zoom: 14,
    },
  };

  public updateDimensions = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
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
    const { markers, locationInfo } = this.props;
    const { viewport } = this.state;
    const Markers = markers.map(marker => (
      <Marker
        key={marker.id}
        latitude={marker.lat}
        longitude={marker.lng}
      >
        <MapPin onClick={() => {
          this.props.history.push(marker.id);
        }} />
      </Marker>
    ));

    return (
      <MapElement
        {...viewport}
        mapboxApiAccessToken={apiAccessToken}
        onClick={() => this.props.history.push('/')}
        onViewportChange={(newViewport: Viewport) => this.setState({ viewport: newViewport })}
      >
        {Markers}
        {locationInfo ?
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
