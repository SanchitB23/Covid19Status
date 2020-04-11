import React, {useEffect} from 'react';
import Table from "../../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldData} from "../../store/actions/worldActions";
import TableItem from "../../model/Table";
import DisplayCumulativeData from "../../components/DisplayCumulativeData";

// function renderTotalData(data) {
//   return (
//
//   )
// }

function HomeScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorldData())
  }, [dispatch])

  const worldData = useSelector(state => state.worldData)

  const data = worldData.countries.map(item => new TableItem(
      item.Country,
      item.TotalConfirmed,
      item.NewConfirmed,
      item.TotalRecovered,
      item.NewRecovered,
      item.TotalDeaths,
      item.NewDeaths,
      item.Slug
  ))
  console.log(worldData.global)
  const cumulativeData = new TableItem(
      'country',
      worldData.global.TotalConfirmed,
      worldData.global.NewConfirmed,
      worldData.global.TotalRecovered,
      worldData.global.NewRecovered,
      worldData.global.TotalDeaths,
      worldData.global.NewDeaths,
      'world'
  )
  return (
      <div className="HomeScreenContainer">
        {worldData.countries.length > 0 && (
            <div>
              <div>
                <div className="LastUpdatedText">Last Updated
                  : {new Date(Date.parse(worldData.lastUpdated)).toLocaleString()}</div>
                <DisplayCumulativeData data={cumulativeData} world={true}/>
              </div>
              <div id="world-table" className="TableScreenContainer"><Table data={data} world={true}/></div>
            </div>
        )}
      </div>
  );
}

export default HomeScreen;
