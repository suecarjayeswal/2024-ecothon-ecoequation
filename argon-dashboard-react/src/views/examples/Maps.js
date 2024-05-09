import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import { Container, Row, Button, Form, FormGroup, Input } from "reactstrap";
import Header from "components/Headers/Header.js";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from '@turf/turf'; // Import Turf.js library

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

/** CompassControl */
import CompassControl from '@mapbox-controls/compass';
import '@mapbox-controls/compass/src/index.css';
/** ImageControl */
import ImageControl from '@mapbox-controls/image';
import '@mapbox-controls/image/src/index.css';
/** InspectControl */
import InspectControl from '@mapbox-controls/inspect';
import '@mapbox-controls/inspect/src/index.css';
/** LanguageControl */
import LanguageControl from '@mapbox-controls/language';
/** RulerControl */
import RulerControl from '@mapbox-controls/ruler';
import '@mapbox-controls/ruler/src/index.css';
/** StylesControl */
import StylesControl from '@mapbox-controls/styles';
import '@mapbox-controls/styles/src/index.css';
/** TooltipControl */
import TooltipControl from '@mapbox-controls/tooltip';
import '@mapbox-controls/tooltip/src/index.css';
/** ZoomControl */
import ZoomControl from '@mapbox-controls/zoom';
import '@mapbox-controls/zoom/src/index.css';
// Export Control
import { MapboxExportControl, Size, PageOrientation, Format, DPI} from "@watergis/mapbox-gl-export";
// import '@watergis/mapbox-gl-export/css/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faLocationCrosshairs, faRefresh } from '@fortawesome/free-solid-svg-icons';


const Maps = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const draw = useRef(null);
  const [lng, setLng] = useState(85.2872);
  const [lat, setLat] = useState(27.6515);
  const [zoom, setZoom] = useState(12);
  const activeButtonRef = useRef("reset");
  
  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_TOKEN;
  
    const initializeMap = () => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });
  
      map.current.on('load', () => {
        addMapControls();
        initializeDraw();
      });
  
      map.current.on('mousemove', (e) => {
        const { lng, lat } = e.lngLat;
        setLng(lng.toFixed(4));
        setLat(lat.toFixed(4));
      });

      
    };

    const addMapControls = () => {
      map.current.addControl(new mapboxgl.FullscreenControl(), 'bottom-right');
      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
      map.current.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Search for a location',
        marker: true,
        bbox: [-180, -90, 180, 90],
        flyTo: true,
        zoom: 10
      }), 'top-right');
      // Add StylesControl here, but disable it until style is loaded
      // map.current.addControl(new StylesControl({ compact: true }), 'bottom-left');
      map.current.addControl(new RulerControl(), 'top-right');
      map.current.addControl(new MapboxExportControl({
        PageSize: Size.A3,
        PageOrientation: PageOrientation.Portrait,
        Format: Format.PNG,
        DPI: DPI[96],
        Crosshair: true,
        PrintableArea: true,
        accessToken: mapboxgl.accessToken
      }), 'top-right');
    };
  
    const initializeDraw = () => {
      draw.current = new MapboxDraw({
              displayControlsDefault: true,
              controls: {
                polygon: true,
                trash: true
              }
      });
      map.current.addControl(draw.current);
  
      map.current.on('draw.create', updateArea);
      map.current.on('draw.delete', updateArea);
      map.current.on('draw.update', updateArea);
      map.current.on('click', handleMapClick);
    };
  
    initializeMap();
    enableControls();
    return () => {
      map.current.remove();
    };
  }, []);  
  
  const enableControls = () => {
    // Re-enable controls here
    map.current.addControl(new StylesControl({ compact: true }), 'bottom-left');
  };

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

  const handleButtonClick = (buttonType) => {
    activeButtonRef.current = buttonType;
  };
  const handleMapClick = (e) => {

    if (activeButtonRef.current != "reset") {
      const { lng, lat } = e.lngLat;
      addMarker(lng, lat);
    }
  };
  const addMarker = (lng, lat) => {
    const popupContent =
      activeButtonRef.current === 'samplingStation'
        ? 'Sampling Station'
        : 'Pollutant Source';

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(popupContent);

    const marker = new mapboxgl.Marker({
      color: activeButtonRef.current === 'samplingStation' ? 'blue' : 'red',
    })
      .setLngLat([lng, lat])
      .setPopup(popup) // Attach popup to marker
      .addTo(map.current);
  };
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <div ref={mapContainer} className="map-container"  />
            <span className="latLonLive"> Longitude: {lng} | Latitude: {lat}</span>
          </div>
          <div></div>
        </Row>
        <div> <div className="button-group">
          <span> Add Marker:</span><br></br>
        <button
          className={`btn  ${activeButtonRef.current === 'samplingStation' && 'active'}`}
          onClick={() => handleButtonClick('samplingStation')}
        >
          <FontAwesomeIcon icon={faLocationCrosshairs} /> Sampling Station
        </button>
        <button
          className={`btn  ${activeButtonRef.current === 'pollutantSource' && 'active'}`}
          onClick={() => handleButtonClick('pollutantSource')}
        >
          <FontAwesomeIcon icon={faCrosshairs} /> Pollutant Source
        </button>
        <button
          className={`btn `}
          onClick={() => handleButtonClick('reset')}
        >
          <FontAwesomeIcon icon={faRefresh} /> Reset
        </button>
      </div></div>
      </Container>
    </>
  );
};

export default Maps;
