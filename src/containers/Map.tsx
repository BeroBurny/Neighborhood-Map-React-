import * as React from 'react';
import MapView from '../components/MapView';
import { connect } from 'react-redux';
import { mapActions } from '../ducks/map/action';
import { Marker } from '../types/Marker';
import { RootState } from '../ducks/store';
import {
  getBackendStatus,
  getLocationInfo,
  getMapMarkers,
  getViewport,
} from '../ducks/map/selectors';
import { match, RedirectProps } from 'react-router';
import { Viewport } from '../types/Viewport';
import styled from 'react-emotion';
import { BackendStatus } from '../types/BackendStatus';

// Props for Status Message
interface StatusMessagePros {
  status: BackendStatus;
}

// Style for API status on bottom of page...
const StatusMessage = styled('p')`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px;
  font-size: 1.3rem;
  color: ${(props: StatusMessagePros) =>
  props.status !== 'error' ? '#111' : '#fff'};
  background-color: ${(props: StatusMessagePros) =>
    props.status !== 'error' ? '#dfd54a' : '#c35152'};
`;

interface Props {
  markers: Marker[];
  viewport: Viewport;
  backendStatus: BackendStatus;
  locationInfo: Marker;
  history: RedirectProps;
  match: match<{ID: string}>;
}

interface ActionProps {
  fetchAllMarkers: () => void;
  setViewport: (viewport: Viewport) => void;
}

class Map extends React.Component<Props & ActionProps, {}> {
  public componentDidMount() {
    this.props.fetchAllMarkers();
  }

  public componentDidUpdate(props: Props & ActionProps) {
    // Compare route whit all markers and if match display that marker info.
    if (!(props.match.url === this.props.match.url) && this.props.match.url !== '/') {
      const distance = Math.hypot(
        this.props.viewport.latitude - this.props.viewport.longitude,
        this.props.locationInfo.lat - this.props.locationInfo.lng,
      ) % 1;
      // calculate camera transition speed
      const timeByZoom = this.props.viewport.zoom * 200;
      this.props.setViewport({
        ...this.props.viewport,
        latitude: this.props.locationInfo.lat,
        longitude: this.props.locationInfo.lng,
        transitionDuration: distance * timeByZoom,
      });
    }
  }

  public render() {
    const { markers, history, locationInfo, setViewport, viewport, backendStatus } = this.props;
    let StatusMsg = null;
    if (backendStatus === 'error') {
      StatusMsg = 'Something went wrong try again later!';
    }
    if (backendStatus === 'loading') {
      StatusMsg = 'Pleas wait! Loading markers...';
    }

    return (
      <React.Fragment>
        <MapView
          viewport={viewport}
          markers={markers}
          history={history}
          locationInfo={locationInfo}
          setViewport={setViewport}
        />
        {StatusMsg ? <StatusMessage status={backendStatus}>{StatusMsg}</StatusMessage> : null }
      </React.Fragment>);
  }
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  markers: getMapMarkers(state),
  locationInfo: getLocationInfo(state, ownProps),
  viewport: getViewport(state),
  backendStatus: getBackendStatus(state),
});

const mapDispatchToProps = {
  fetchAllMarkers: mapActions.markers.fetchAll,
  setViewport: mapActions.viewport.set,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
