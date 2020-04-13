import React from 'react';
import {useParams} from "react-router-dom";

function IndianStateScreen(props) {
  const {name} = useParams()
  console.log("[[India State Wise]] State Name", name)
  return (
      <div>State Wise</div>
  );
}

export default IndianStateScreen;
