import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartForIndiaHome(props) {
  const dataPoint0 = props.data.map((item) => {
    return {y: parseInt(item.count), x: new Date(item.date)}
  })
  const dataPoint1 = props.data.map((item) => {
    return {x: new Date(item.date), y: parseInt(item.newCount)}
  })
  const options = {
    theme: "light2",
    height: 300,
    // width: 400,
    zoomEnabled: true,
    animationEnabled: true,
    title: {
      text: props.title
    },
    axisX: {
      valueFormatString: 'D MMM',
    },
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "area",
        markerSize: 5,
        name: "Total",
        color: props.color[1],
        // axisYType: "secondary",
        // showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        dataPoints: dataPoint0,
      },
      {
        type: "area",
        name: "new",
        color: props.color[0],

        // axisYType: "secondary",
        // showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        dataPoints: dataPoint1
      }
    ]
  }
  return (
      <CanvasJSChart options={options}/>
  );
}

export default ChartForIndiaHome;
