import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchIndiaData} from "../../store/actions/indiaActions";
import TableItem from "../../model/Table";
import Table from "../../components/Table/";
import DisplayCumulativeData from "../../components/DisplayCumulativeData";
import CumulativeTimeSeriesChart from "../../components/CumulativeTimeSeriesChart";
import CumulativeTimeSeries from "../../model/CumulativeTimeSeries";
import moment from "moment";

function IndiaHome(props) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIndiaData())
  }, [dispatch])
  const {statewise, timeseries} = useSelector(state => state.indiaData)
  // console.log(timeseries)

  const tableData = statewise
      .map(item => new TableItem(
          item.state,
          item.confirmed,
          item.deltaconfirmed,
          item.recovered,
          item.deltarecovered,
          item.deaths,
          item.deltadeaths,
          item.state
          )
      )
  const timeSeries = timeseries.map((item) => (
          new CumulativeTimeSeries(
              item.totalconfirmed,
              item.totalrecovered,
              item.totaldeceased,
              item.dailyconfirmed,
              item.dailyrecovered,
              item.dailydeceased,
              moment(item.date.trim(), "DD MMMM").format("D MMM")
          )
      )
  )
  // const temp = timeSeries.map((i) => i.getRecoveredData)
  // console.log(temp)
  return (
      <div className="HomeScreenContainer">
        {
          tableData.length > 0 && (
              <div>
                <div>
                  <div className="LastUpdatedText">Last Updated
                    : {new Date(Date.parse(statewise[0].lastupdatedtime)).toLocaleString()}</div>
                  <DisplayCumulativeData data={tableData[0]} world={false}/>
                  <CumulativeTimeSeriesChart data={timeSeries}/>
                </div>
                <div id="india-table" className="TableScreenContainer">
                  <Table data={tableData} world={false}/>
                </div>
              </div>
          )
        }
      </div>
  );
}

export default IndiaHome;
