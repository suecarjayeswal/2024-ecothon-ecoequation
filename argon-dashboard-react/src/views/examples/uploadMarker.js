import React, { useState } from "react";

const Maps = () => {
  const [geojsonData, setGeojsonData] = useState(null);

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

  return (
    <>
      <input
        type="file"
        accept=".geojson"
        onChange={handleGeoJSONUpload}
      />
      <div className="map-container">
        {renderGeoJSON()}
      </div>
    </>
  );
};

const Feature = ({ geometry }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !geometry) return;

    const feature = {
      type: "Feature",
      properties: {},
      geometry: geometry
    };

    new GeoJSONLayer({
      id: "uploaded-geojson",
      data: feature
    }).addTo(map);

  }, [map, geometry]);

  return null;
};
