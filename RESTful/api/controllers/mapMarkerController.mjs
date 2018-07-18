'use strict';
import { Marker } from "../models/mapMarkerModel";

export const listAllMarkers = (req, res) => {
  Marker.find({}, (err, markers)  => {
    if (err)
      res.send(err);
    res.json(markers);
  });
};

export const createAMarker = (req, res) => {
  const newMarker = new Marker(req.body);
  newMarker.save((err, marker) => {
    if (err)
      res.send(err);
    res.json(marker);
  });
};

export const listAMarker = (req, res) => {
  Marker.findById(req.params.taskId, (err, marker) => {
    if (err)
      res.send(err);
    res.json(marker);
  });
};

export const updateAMarker = (req, res) => {
  Marker.findOneAndUpdate({_id: req.params.markerId}, req.body, {new: true}, (err, marker) => {
    if (err)
      res.send(err);
    res.json(marker);
  });
};

export const deleteAMarker = (req, res) => {
  Marker.remove({
    _id: req.params.markerId
  }, (err) => {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
