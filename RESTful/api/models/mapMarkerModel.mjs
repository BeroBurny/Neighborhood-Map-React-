'use strict';
import mongoose from 'mongoose';

const MarkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Enter the name of location',
  },
  description: {
    type: String,
    required: 'Enter the description of location',
  },
  latitude: {
    type: Number,
    required: 'Enter GPS latitude of location',
  },
  longitude: {
    type: Number,
    required: 'Enter GPS longitude of location',
  },
  address: {
    type: String,
    required: 'Enter address of location',
  },
  rating: {
    type: Number,
    required: 'Enter location ratings',
    min: [1, 'Minimum location rating is 1'],
    max: [5, 'Maximum location rating is 5'],
  },
  type: {
    type: String,
    enum: ['restaurant', 'shop', 'fastFood'],
    required: 'Enter location type (restaurant, shop or both)',
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

export const Marker = mongoose.model('Markers', MarkerSchema);
