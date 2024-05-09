import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from '@turf/turf'; // Import Turf.js library

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const Maps = () => {
  mapboxgl.accessToken = process.env.REACT_APP_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const draw = useRef(null);
  const [lng, setLng] = useState(85.2872);
  const [lat, setLat] = useState(27.6515);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('mousemove', (e) => {
      const { lng, lat } = e.lngLat;
      setLng(lng.toFixed(4));
      setLat(lat.toFixed(4));
    });

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl());

    // Add Geocoder control for search box
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for a location',
      marker: true, // Disable default marker
      bbox: [-180, -90, 180, 90], // Limit search to the world bounds
      flyTo: true, // Do not fly to the searched location
      zoom: 10 // Set the zoom level after a location is found
    });

    // Add custom CSS class to the Geocoder input container
    geocoder.on('result', function (e) {
      document.querySelector('.mapboxgl-ctrl-geocoder--input').classList.add('custom-geocoder-input');
    });

    map.current.addControl(geocoder);

    // Initialize the drawing tool
    draw.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });

    map.current.addControl(draw.current);

    map.current.on('draw.create', updateArea);
    map.current.on('draw.delete', updateArea);
    map.current.on('draw.update', updateArea);


    

  }, []);

  function updateArea(e) {
    const data = draw.current.getAll();
    if (data.features.length > 0) {
      const area = turf.area(data);
      // Restrict the area to 2 decimal points.
      const rounded_area = Math.round(area * 100) / 100;
      console.log("Area:", rounded_area, "square meters");
    } else {
      console.log("No features drawn yet");
    }
  }

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <div ref={mapContainer} className="map-container" />
            <span className="latLonLive"> Longitude: {lng} | Latitude: {lat}</span>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
