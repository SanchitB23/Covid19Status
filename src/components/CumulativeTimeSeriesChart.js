import React from 'react';
import './CumulativeTimeSeriesChart.css'
import AreaChart from "../Views/Charts/areaChart";

function CumulativeTimeSeriesChart(props) {
  const confirmed = props.data.map((item) => item.getConfirmedData)
  const recovered = props.data.map((item) => item.getRecoveredData)
  const death = props.data.map((item) => item.getDeathData)
  return (
      <div className="AreaChartsContainer">
        <AreaChart data={confirmed} title="Confirmed Cases" color={['#D32F2F', '#B71C1C']}/>
        <AreaChart data={recovered} title={"Recovered Cases"} color={['#43A047', '#1B5E20']}/>
        <AreaChart data={death} title={"Death Cases"} color={['#757575', '#424242']}/>
      </div>
  );
}

export default CumulativeTimeSeriesChart;
