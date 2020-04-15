import React, {useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import moment from "moment";
import ChartForIndianStates from "../../../Views/Charts/chartForIndianStates";
import * as colors from "../../../constants/colors";
import addCommas from "../../../functions/addCommas";
import Loading from "../../../components/Loading";

function IndianStateScreen(props) {
  const {name} = useParams()
  const history = useHistory()
  const {stateData, stateTimeLine} = useSelector(state => state.indiaData.statewise)
  const [sortState, setSortState] = useState({
    col: 'c', order: true
  }) //true == desc

  const stateTotal = useSelector(state => state.indiaData.home.statewise.filter(
      item => {
        return item.state.toLowerCase() === name.toLowerCase()
      }
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

  function renderCards() {
    return (
        <div className="Head-Sub-Screen row">
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <h3>Confirmed</h3>
            <h5>Today {stateTotal[0].deltaconfirmed > 0 &&
            <span className="LatestCount align-self-center" style={{color: colors.confirmed[0]}}><i
                className="fas fa-long-arrow-alt-up"/> {addCommas(stateTotal[0].deltaconfirmed.toString())}</span>} {addCommas(stateTotal[0].confirmed.toString())}
            </h5>
            <ChartForIndianStates daily={countDailyConfirmed} total={confirmedTimeLine} color={colors.confirmed}/>
          </div>
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <h3>Recovered</h3>
            <h5>Today {stateTotal[0].deltarecovered > 0 &&
            <span className="LatestCount align-self-center" style={{color: colors.recovered[0]}}><i
                className="fas fa-long-arrow-alt-up"/> {addCommas(stateTotal[0].deltarecovered.toString())}</span>
            } {addCommas(stateTotal[0].recovered.toString())}
            </h5>
            <ChartForIndianStates daily={countDailyRecovered} total={recoveredTimeLine} color={colors.recovered}/>
          </div>
          <div className="col-md-8 col-lg-3 col-sm-12 p-2 card m-md-1 m-sm-1">
            <h3>Deceased</h3>
            <h5>Today {stateTotal[0].deltadeaths > 0 &&
            <span className="LatestCount align-self-center" style={{color: colors.death[0]}}><i
                className="fas fa-long-arrow-alt-up"/> {addCommas(stateTotal[0].deltadeaths.toString())}</span>
            } {addCommas(stateTotal[0].deaths.toString())}
            </h5>
            <ChartForIndianStates daily={countDailyDeceased} total={deceasedTimeLine} color={colors.death}/>
          </div>
        </div>
    )
  }

  function renderTable() {
    return (
        <table className="table table-hover table-striped table-responsive-md w-50 justify-content-center">
          <thead style={{color: '#212121'}}>
          <tr>
            <th scope="col" onClick={() => setSortState(state => ({col: 'n', order: !state.order}))}>
              State / UT Name {sortState.col === 'n' ? sortState.order ?
                <span><i className="fas fa-sort-down"/></span> :
                <span><i className="fas fa-sort-up"/></span> : ''}
            </th>
            <th scope="col" className="table-danger"
                style={{backgroundColor: colors.confirmed[1], color: 'white', letterSpacing: '1px'}}
                onClick={() => setSortState(state => ({col: 'c', order: !state.order}))}>
              Confirmed {sortState.col === 'c' ? sortState.order ? <span><i className="fas fa-sort-down"/></span> :
                <span><i className="fas fa-sort-up"/></span> : ''}
            </th>
          </tr>
          </thead>
          <tbody>
          {
            stateData[0].districtData.sort((a, b) => {
              switch (sortState.col) {
                case 'n':
                  if (sortState.order) {
                    return b.district < a.district ? 1 : -1
                  } else
                    return b.district > a.district ? 1 : -1
                case "c":
                  if (sortState.order) {
                    return b.confirmed - a.confirmed
                  } else return a.confirmed - b.confirmed
                default:
                  if (sortState.order) {
                    return b.confirmed - a.confirmed
                  } else return a.confirmed - b.confirmed
              }
            }).map((data, i) => {
              return (
                  <tr key={i}>
                    <td>{data.district}</td>
                    <td className="table-danger" style={{backgroundColor: colors.confirmed[1], color: 'white'}}>
                      {data.delta.confirmed > 0 &&
                      <span className="LatestCount">
                        <i className="fas fa-long-arrow-alt-up"/> {addCommas(data.delta.confirmed.toString())}
                      </span>
                      } {addCommas(data.confirmed.toString())}
                    </td>
                  </tr>
              )
            })
          }
          </tbody>
        </table>
    )
  }

  try {
    return (
        <div className="HomeScreenContainer">
          <div className="LastUpdatedText">Last Updated
            : {stateTotal[0].lastupdatedtime}</div>
          <h1 className="text-capitalize">{name}</h1>
          <h3>Active Cases: {stateTotal[0].active}</h3>
          {renderCards()}
          {stateData.length > 0 ?
              <div className="pt-4 text-center" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>{renderTable()}</div> : <div className="pt-4"><Loading/></div>
          }
        </div>
    );
  } catch (e) {
    history.push('/india')
    return <div/>
  }
}

export default IndianStateScreen;
