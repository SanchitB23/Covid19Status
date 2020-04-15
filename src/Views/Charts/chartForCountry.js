import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import * as colors from "../../constants/colors";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartForCountry(props) {
  const options = {
    theme: "light2",
    height: 400,
    // width: 400,
    animationEnabled: true,
    // axisX: {
    //   valueFormatString: " ",
    // },
    // axisY: {
    //   valueFormatString: " ",
    // },
    legend: {
      cursor: "pointer",
      itemclick: function (e) {
        e.dataSeries.visible = !(typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible);

        e.chart.render();
      }
    },
    title: {
      text: "Timeline of Cases of Covid 19 in " + props.name
    },
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "line",
        markerSize: 5,
        name: "Confirmed",
        color: colors.confirmed[0],
        // axisYType: "secondary",
        showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        dataPoints: props.confirmed,
      },
      {
        type: "line",
        name: "Recovered",
        color: colors.recovered[0],
        // axisYType: "secondary",
        showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        dataPoints: props.recovered
      },
      {
        type: "line",
        name: "Deaths",
        color: colors.death[0],
        // axisYType: "secondary",
        showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        dataPoints: props.deaths
      }
    ]
  }
  return (
      <CanvasJSChart options={options}/>
  );
}

export default ChartForCountry;
