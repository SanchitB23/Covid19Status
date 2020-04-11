import React from 'react';
import addCommas from "../functions/addCommas";

// todo Change Design
function DisplayCumulativeData({data, world}) {
  return (
      <div>
        <div className="GlobalItemContainer">
          <h1>Total Corona Virus Cases {world ? 'Globally' : 'in India'}</h1>
          <h1 className="GlobalCount" style={{color: 'red'}}>{addCommas(data.totalConfirmed.toString())}</h1>
          <h2>New Confirmed</h2>
          <h2>{addCommas(data.newConfirmed.toString())}</h2>
          <a href={world ? '#world-table' : '#india-table'} style={{textTransform: 'capitalize'}}>View
            by {world ? 'Country' : 'States / UT'}</a>
        </div>
        <div className="GlobalItemContainer">
          <h1>Total Deaths</h1>
          <h1 className="GlobalCount" style={{color: '#757575'}}>{addCommas(data.totalDeath.toString())}</h1>
          <h2>New Deaths</h2>
          <h2>{addCommas(data.newDeath.toString())}</h2>
        </div>
        <div className="GlobalItemContainer">
          <h1>Total Recovered</h1>
          <h1 className="GlobalCount" style={{color: 'green'}}>{addCommas(data.totalRecovered.toString())}</h1>
          <h2>New Recovered</h2>
          <h2>{addCommas(data.newRecovered.toString())}</h2>
        </div>
      </div>
  );
}

export default DisplayCumulativeData;
