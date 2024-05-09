import React, { useState } from 'react';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = () => {
  const [location, setLocation] = useState({ lng: 0, lat: 0 });

  const ctrl = new MapBoxGeocoder({
    accessToken: process.env.REACT_APP_MAP_TOKEN,
    marker: false,
    collapsed: true,
  });

  useControl(() => ctrl);

  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    setLocation({ lng: coords[0], lat: coords[1] });
  });

  return null;
};

export default Geocoder;
