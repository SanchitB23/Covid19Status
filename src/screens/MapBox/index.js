import React from 'react';
import Mapbox from "./Mapbox";

function MapBox(props) {
  console.log("MapBox")
  try {

    return (
        <div style={{width: '100%', height: window.innerHeight}}>
          <Mapbox/>
        </div>
    );
  } catch (e) {
    return (
        <div className="App" style={{alignItems: 'center'}}>
          <h1>
            Error with the MapBox
          </h1>
          {/*<p>{e.message}</p>*/}
        </div>
    )
  }
}

export default MapBox;
