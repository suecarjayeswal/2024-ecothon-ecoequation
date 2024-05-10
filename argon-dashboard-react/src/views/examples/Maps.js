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

import { useMap } from 'react-map-gl';
import { GeoJSONLayer } from 'react-map-gl';


const Maps = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const draw = useRef(null);
  const [lng, setLng] = useState(85.2872);
  const [lat, setLat] = useState(27.6515);
  const [zoom, setZoom] = useState(12);
  const activeButtonRef = useRef("reset");
  const [geojsonData, setGeojsonData] = useState(null);
  
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

        map.current.addSource('metrics', {
          type: 'geojson',
          data: 'data/metrics.geojson'
        });
  
        // Add layer for the GeoJSON data
        map.current.addLayer({
          id: 'metrics-blobs',
          type: 'fill',
          source: 'metrics',
          paint: {
            'fill-color': ['match',
              ['get','site_code'],'BA01','green'
            ]
          }
        },'metric-label');
  
        // Add hover popup
        map.current.on('mouseenter', 'metrics-blobs', e => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const properties = e.features[0].properties;
  
          // Create popup
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h3>Site: ${properties.SiteCode}</h3><p>Substrate Types: ${properties.SubstrateTypes.join(', ')}</p>`)
            .addTo(map.current);
        });
  
        // Remove popup on mouse leave
        map.current.on('mouseleave', 'metrics-blobs', () => {
          map.current.getCanvas().style.cursor = '';
          map.current.getCanvas().title = '';
          map.current.closePopup();
        });
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



    const fetchEarthquakeData = async () => {
      try {
        const response = await fetch(
          `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&minmagnitude=1`
        );
        const data = await response.json();
        map.current.addSource('earthquakes', {
          type: 'geojson',
          data
   
        });
        map.current.addLayer({
          id: 'earthquakes-viz',
          type: 'circle',
          source: 'earthquakes',
          paint: {
            'circle-radius': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              15,
              5
            ],
            'circle-stroke-color': '#000',
            'circle-stroke-width': 1,
            'circle-color': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              '#FF0000',
              '#0000FF'
            ]
          }
        });
      } catch (error) {
        console.error('Error fetching earthquake data:', error);
      }
    };

    fetchEarthquakeData();

    map.current.on('mousemove', 'earthquakes-viz', (e) => {
      console.log(e);
      if (e.features.length > 0) {
        
        map.current.getCanvas().style.cursor = 'pointer';
        const featureId = e.features[0].id; // Get the feature ID
        if (featureId !== undefined && featureId !== null) { // Ensure feature ID is valid
          map.current.setFeatureState(
            { source: 'earthquakes', id: featureId }, // Provide feature ID
            { hover: true }
          );
        }
      }
    });
    
    
    

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

  const handleGeoJSONUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target.result;
      setGeojsonData(JSON.parse(content));
    };
    
    reader.readAsText(file);
  };

  // Render the uploaded GeoJSON data
  const renderGeoJSON = () => {
      if (!geojsonData) return null;

      return geojsonData.features.map((feature, index) => (
        <Feature key={index} geometry={feature.geometry} />
      ));
    };
    const Feature = ({ geometry }) => {
      // const map = useMap();
    
      // useEffect(() => {
      //   if (!map || !geometry) return;
    
      //   const feature = {
      //     type: "Feature",
      //     properties: {},
      //     geometry: geometry
      //   };
    
      //   new GeoJSONLayer({
      //     id: "uploaded-geojson",
      //     data: feature
      //   }).addTo(map);
    
      // }, [map, geometry]);
    
      return null;
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
        <div>
            <input
              type="file"
              accept=".geojson"
              onChange={handleGeoJSONUpload}
            />
          </div>
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
