import * as React from 'react';
import { InteractiveMap } from 'react-map-gl';
import styled from 'react-emotion';
import { Viewport } from '../types/Viewport';

const MapElement = styled(InteractiveMap)`
  position: fixed;
  top: 0;
  left: 0;
`;

interface State {
  viewport: Viewport;
}

class MapView extends React.Component<{}, State> {
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
    return (
      <MapElement
        {...this.state.viewport}
        mapboxApiAccessToken={apiAccessToken}
        onViewportChange={(viewport: Viewport) => this.setState({ viewport })}
      />
    );
  }
}

export default MapView;
