/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";

const Maps = () => {
  
  mapboxgl.accessToken = process.env.REACT_APP_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
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
 
  });

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
