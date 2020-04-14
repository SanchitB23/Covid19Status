import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import './statewiseIndia.css'
import moment from "moment";
import ChartForIndianStates from "../../../Views/Charts/chartForIndianStates";
import * as colors from "../../../constants/colors";
import addCommas from "../../../functions/addCommas";

function IndianStateScreen(props) {
  const {name} = useParams()
  const {stateTimeLine} = useSelector(state => state.indiaData.statewise)

  const stateTotal = useSelector(state => state.indiaData.home.statewise.filter(
      item => item.state.toLowerCase() === name.toLowerCase()
  ))
  const getTotalCountFromDaily = (data) => {
    let sum = 0
    return data.map((item) => {
      sum += item.y
      return {
        y: sum,
        x: item.x
      }
    })
  }

  const countDailyConfirmed = stateTimeLine.filter((item) => item.status === "Confirmed").map(item => ({
    y: parseInt(item.count),
    x: new Date(moment(item.date.trim(), "DD-MMM-YY").format("D MMM"))
  }))

  const countDailyRecovered = stateTimeLine.filter((item) => item.status === "Recovered").map(item => ({
    y: parseInt(item.count),
    x: new Date(moment(item.date.trim(), "DD-MMM-YY").format("D MMM"))
  }))

  const countDailyDeceased = stateTimeLine.filter((item) => item.status === "Deceased").map(item => ({
    y: parseInt(item.count),
    x: new Date(moment(item.date.trim(), "DD-MMM-YY").format("D MMM"))
  }))

  const confirmedTimeLine = getTotalCountFromDaily(countDailyConfirmed)
  const recoveredTimeLine = getTotalCountFromDaily(countDailyRecovered)
  const deceasedTimeLine = getTotalCountFromDaily(countDailyDeceased)
  console.log(countDailyDeceased, deceasedTimeLine)
  return (
      <div className="HomeScreenContainer">
        <div className="LastUpdatedText">Last Updated
          : {stateTotal[0].lastupdatedtime}</div>
        <h1 className="text-capitalize">{name}</h1>
        <h3>Active Cases: {stateTotal[0].active}</h3>
        <div className="Head-Sub-Screen row">
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <h3>Confirmed</h3>
            <h5>Today <span className="LatestCount align-self-center" style={{color: colors.confirmed[0]}}><i
                className="fas fa-long-arrow-alt-up"/> {addCommas(stateTotal[0].deltaconfirmed.toString())}</span> {addCommas(stateTotal[0].confirmed.toString())}
            </h5>
            <ChartForIndianStates daily={countDailyConfirmed} total={confirmedTimeLine} color={colors.confirmed}/>
          </div>
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <h3>Recovered</h3>
            <h5>Today <span className="LatestCount align-self-center" style={{color: colors.recovered[0]}}><i
                className="fas fa-long-arrow-alt-up"/> {addCommas(stateTotal[0].deltarecovered.toString())}</span> {addCommas(stateTotal[0].recovered.toString())}
            </h5>
            <ChartForIndianStates daily={countDailyRecovered} total={recoveredTimeLine} color={colors.recovered}/>
          </div>
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <h3>Deceased</h3>
            <h5>Today <span className="LatestCount align-self-center" style={{color: colors.death[0]}}><i
                className="fas fa-long-arrow-alt-up"/> {addCommas(stateTotal[0].deltadeaths.toString())}</span> {addCommas(stateTotal[0].deaths.toString())}
            </h5>
            <ChartForIndianStates daily={countDailyDeceased} total={deceasedTimeLine} color={colors.death}/>
          </div>
        </div>
      </div>
  );
}

export default IndianStateScreen;
