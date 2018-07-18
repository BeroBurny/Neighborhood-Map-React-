'use strict';
import * as marker from '../controllers/mapMarkerController';

const mapMarkerRoutes = (app) => {
  app.route('/markers')
    .get(marker.listAllMarkers)
    .post(marker.createAMarker);

  app.route('/marker/:markerId')
    .get(marker.listAMarker)
    .put(marker.updateAMarker)
    .delete(marker.deleteAMarker);
};

export default mapMarkerRoutes;
