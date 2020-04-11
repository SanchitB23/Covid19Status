import React from 'react';
import Mapbox from "./Mapbox";

function MapBox(props) {
  console.log("MapBox")
  return (
      <div style={{width: '100%', height: window.innerHeight}}>
        <Mapbox/>
      </div>
  );
}

export default MapBox;
