import React, {useEffect} from 'react';
import Table from "../../components/Table";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldData} from "../../store/actions/World/worldActions";
import addCommas from "../../functions/addCommas";

function renderTotalData(data) {
  return (
      <div>
        <div className="GlobalItemContainer">
          <h1>Total Corona Virus Cases</h1>
          <h1 className="GlobalCount" style={{color: '#757575'}}>{addCommas(data.TotalConfirmed.toString())}</h1>
          <h2>New Confirmed</h2>
          <h2>{addCommas(data.NewConfirmed.toString())}</h2>
          <a href="#world-table">View by Country</a>
        </div>
        <div className="GlobalItemContainer">
          <h1>Total Deaths</h1>
          <h1 className="GlobalCount" style={{color: 'red'}}>{addCommas(data.TotalDeaths.toString())}</h1>
          <h2>New Deaths</h2>
          <h2>{addCommas(data.NewDeaths.toString())}</h2>
        </div>
        <div className="GlobalItemContainer">
          <h1>Total Recovered</h1>
          <h1 className="GlobalCount" style={{color: 'green'}}>{addCommas(data.TotalRecovered.toString())}</h1>
          <h2>New Recovered</h2>
          <h2>{addCommas(data.NewRecovered.toString())}</h2>
        </div>
      </div>
  )
}

function HomeScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorldData())
  }, [dispatch])

  const worldData = useSelector(state => state.worldData)

  const data = worldData.countries.map(item => ({
    name: item.Country,
    newConfirmed: item.NewConfirmed,
    totalConfirmed: item.TotalConfirmed,
    newDeaths: item.NewDeaths,
    totalDeaths: item.TotalDeaths,
    newRecovered: item.NewRecovered,
    totalRecovered: item.TotalRecovered,
    slug: item.Slug
  }))

  return (
      <div className="HomeScreenContainer">
        {worldData.countries.length > 0 && (
            <div>
              <div style={{margin: '100px 0'}}>
                <div className="LastUpdatedText">Last Updated
                  : {new Date(Date.parse(worldData.lastUpdated)).toLocaleString()}</div>
                {renderTotalData(worldData.global)}
              </div>
              <div id="world-table"><Table data={data} world={true}/></div>
            </div>
        )}
      </div>
  );
}

export default HomeScreen;
