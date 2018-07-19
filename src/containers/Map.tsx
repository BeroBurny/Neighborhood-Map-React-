import * as React from 'react';
import MapView from '../components/MapView';
import { connect } from 'react-redux';
import { mapActions } from '../ducks/map/action';
import { Marker } from '../types/Marker';
import { RootState } from '../ducks/store';
import { getMapMarkers } from '../ducks/map/selectors';

interface State {}

interface Props {
  markers: Marker[];
}

interface ActionProps {
  fetchAllMarkers: () => void;
}

class Map extends React.Component<Props & ActionProps, State> {
  public componentDidMount() {
    this.props.fetchAllMarkers();
  }

  public render() {
    return (<MapView />);
  }
}

const mapStateToProps = (state: RootState) => ({
  markers: getMapMarkers(state),
});

const mapDispatchToProps = {
  fetchAllMarkers: mapActions.markers.fetchAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
