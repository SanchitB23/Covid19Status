import React from 'react';
import './CumulativeTimeSeriesChart.css'
import AreaChartForHome from "../Views/Charts/areaChartForHome";
import * as colors from "../constants/colors";

function CumulativeTimeSeriesChart(props) {
  const confirmed = props.data.map((item) => item.getConfirmedData)
  const recovered = props.data.map((item) => item.getRecoveredData)
  const death = props.data.map((item) => item.getDeathData)
  return (
      <div className="AreaChartsContainer row">
        <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
          <AreaChartForHome data={confirmed} title="Confirmed Cases" color={colors.confirmed}/>
        </div>
        <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
          <AreaChartForHome data={recovered} title={"Recovered Cases"} color={colors.recovered}/>
        </div>
        <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
          <AreaChartForHome data={death} title={"Death Cases"} color={colors.death}/>
        </div>
      </div>
  );
}

export default CumulativeTimeSeriesChart;
