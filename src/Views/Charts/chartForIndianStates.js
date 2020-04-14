import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartForIndianStates(props) {

  const options = {
    theme: "light2",
    height: 200,
    // width: 400,
    animationEnabled: true,
    axisX: {
      valueFormatString: " ",
    },
    axisY: {
      valueFormatString: " ",
    },
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "line",
        markerSize: 5,
        name: "Total",
        color: props.color[1],
        // axisYType: "secondary",
        // showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        // yValueFormatString: "#",
        // mousemove: (e) => console.log('mouseover', e),
        dataPoints: props.total,
      },
      {
        type: "column",
        name: "new",
        color: props.color[0],
        // axisYType: "secondary",
        // showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        // yValueFormatString: "#",
        // mouseover: (e) => console.log('mouseover', e),
        dataPoints: props.daily
      }
    ]
  }
  return (
      <CanvasJSChart options={options}/>
  );
}

export default ChartForIndianStates;
