import React from 'react';
import SemipolarLoading from "../Views/LoadingView";

function Loading({style, color, speed, size = 'large', sizeDef = 200, headerSize}) {
  return (
      <div>
        <SemipolarLoading style={style} speed={speed} size={size} sizeDef={sizeDef} color={color}/>
        {headerSize === 'large' ? <h1>Loading Data, Please Wait</h1> : <h5>Loading Data, Please Wait</h5>}
      </div>
  );
}

export default Loading;
