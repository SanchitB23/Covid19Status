import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import moment from "moment";
import _ from "lodash"
import * as colors from "../../../constants/colors";
import ChartForCountry from "../../../Views/Charts/chartForCountry";
import Loading from "../../../components/Loading";

function CountrySpecificData(props) {
  const {name} = useParams()
  const history = useHistory()

  let worldData = useSelector(state => state.worldData.home.countries.filter(item => item.Slug === name))
  worldData = worldData[0]
  const countryData = useSelector(state => state.worldData.country.timeline)
  let confirmed, recovered, deaths

  if (!_.isEmpty(countryData)) {
    confirmed = countryData.confirmed.map(item => ({
      x: item.date, y: item.cases
    }))
    recovered = countryData.recovered.map(item => ({
      x: item.date, y: item.cases
    }))
    deaths = countryData.deaths.map(item => ({
      x: item.date, y: item.cases
    }))
  }

  function renderCards() {
    return (
        <div className="Head-Sub-Screen row">
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <div>
              <h3>Confirmed</h3>
              <h4 style={{color: colors.confirmed[1]}}>{worldData.TotalConfirmed}</h4>
            </div>
            <div>
              <h5>New Confirmed</h5>
              <h6 style={{color: colors.confirmed[0]}}>{worldData.NewConfirmed}</h6>
            </div>
          </div>
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <div>
              <h3>Recovered</h3>
              <h4 style={{color: colors.recovered[1]}}>{worldData.TotalRecovered}</h4>
            </div>
            <div>
              <h5>New Recovered</h5>
              <h6 style={{color: colors.recovered[0]}}>{worldData.NewRecovered}</h6>
            </div>
          </div>
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <div>
              <h3>Deaths</h3>
              <h4 style={{color: colors.death[1]}}>{worldData.TotalDeaths}</h4>
            </div>
            <div>
              <h5>New Deaths</h5>
              <h6 style={{color: colors.death[0]}}>{worldData.NewDeaths}</h6>
            </div>
          </div>
        </div>

    )
  }

  function renderChart() {
    return (
        <div className="Head-Sub-Screen pt-4">
          <div className="card col p-2 col-lg-8">
            <ChartForCountry confirmed={confirmed} recovered={recovered} deaths={deaths} name={worldData.Country}/>
          </div>
        </div>
    )
  }

  try {
    return (
        <div className="HomeScreenContainer">
          <div className="LastUpdatedText">Last Updated
            : {moment(worldData.Date).format("LLL")}</div>
          <h1 className="text-capitalize">{worldData.Country}</h1>
          {renderCards()}
          {!_.isEmpty(countryData) ? renderChart() : <div className="pt-4"><Loading/></div>}
        </div>
    );
  } catch (e) {
    history.push('/')
    return <div/>
  }
}

export default CountrySpecificData;
