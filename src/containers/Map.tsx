import * as React from 'react';
import MapView from '../components/MapView';
import { connect } from 'react-redux';
import { mapActions } from '../ducks/map/action';
import { Marker } from '../types/Marker';
import { RootState } from '../ducks/store';
import { getLocationInfo, getMapMarkers } from '../ducks/map/selectors';
import { match, RedirectProps } from 'react-router';

interface State {}

interface Props {
  markers: Marker[];
  locationInfo: Marker;
  history: RedirectProps;
  match: match<{ID: string}>;
}

interface ActionProps {
  fetchAllMarkers: () => void;
}

class Map extends React.Component<Props & ActionProps, State> {
  public componentDidMount() {
    this.props.fetchAllMarkers();
  }

  public render() {
    const { markers, history, locationInfo } = this.props;
    return (<MapView markers={markers} history={history} locationInfo={locationInfo} />);
  }
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  markers: getMapMarkers(state),
  locationInfo: getLocationInfo(state, ownProps),
});

const mapDispatchToProps = {
  fetchAllMarkers: mapActions.markers.fetchAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
