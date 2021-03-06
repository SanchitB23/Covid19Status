import React, {useCallback, useEffect} from 'react';
import Table from "../../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldData} from "../../store/actions/worldActions";
import TableItem from "../../model/Table";
import DisplayCumulativeData from "../../components/DisplayCumulativeData";
import Loading from "../../components/Loading";
import moment from "moment";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchWorldData())
  }, [dispatch])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  const worldData = useSelector(state => state.worldData.home)

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
        {worldData.countries.length > 0 ? (
            <div>
              <div>
                <div className="LastUpdatedText">Last Updated
                  : {moment(Date.parse(worldData.lastUpdated)).format("LLL")}</div>
                <DisplayCumulativeData data={cumulativeData} world={true}/>
              </div>
              <div id="world-table" className="TableScreenContainer"><Table data={data} world={true}/></div>
            </div>
        ) : <Loading headerSize='large' sizeDef={200}/>}
      </div>
  );
}

export default HomeScreen;
