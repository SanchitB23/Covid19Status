import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AreaChart(props) {
  const dataPoint0 = props.data.map((item) => {
    return {y: parseInt(item.count), x: new Date(item.date)}
  })
  const dataPoint1 = props.data.map((item) => {
    return {x: new Date(item.date), y: parseInt(item.newCount)}
  })
  console.log(dataPoint0)
  const options = {
    // backgroundColor:'red' todo
    theme: "light2",
    height: 300,
    // width: 400,
    zoomEnabled: true,
    animationEnabled: true,
    title: {
      text: props.title //temp
    },
    axisX: {
      valueFormatString: 'D MMM',
    },
    // axisY: {
    //   interval: 2000, //fixme not updating accordingly
    // },
    // subtitles: [{
    //   text: "GBP & USD to INR" //temp removable
    // }],
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "area",
        markerSize: 5,
        name: "Total",
        color: props.color[0],
        // axisYType: "secondary",
        // showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        // yValueFormatString: "#",
        mousemove: (e) => console.log('mouseover', e),
        dataPoints: dataPoint0,
      },
      {
        type: "area",
        name: "new",
        color: props.color[1],

        // axisYType: "secondary",
        // showInLegend: true,
        xValueType: 'dateTime',
        xValueFormatString: "D MMM",
        // yValueFormatString: "#",
        // mouseover: (e) => console.log('mouseover', e),
        dataPoints: dataPoint1
      }
    ]
  }
  return (
      <CanvasJSChart options={options}/>
  );
}

export default AreaChart;
