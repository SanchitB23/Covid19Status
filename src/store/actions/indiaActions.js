import axios from "axios";
import {covidIndiaAPIBaseURL} from "../../constants/Api";
import {INDIA_DATA, INDIAN_STATES} from "../../constants/action-types";
import IndiaDataJSON from "../../json/India/Home.json";

export const fetchIndiaData = () => async dispatch => {
  const res = await axios.get(covidIndiaAPIBaseURL + 'data.json')
  if (res.status === 200) {
    dispatch({
      type: INDIA_DATA,
      payload: {statewise: res.data.statewise, timeseries: res.data.cases_time_series}
    })
  } else dispatch({
    type: INDIA_DATA,
    payload: {statewise: IndiaDataJSON.statewise, timeseries: IndiaDataJSON.cases_time_series}
  })
}

export const fetchIndianStates = (name, slug) => async dispatch => {
  const resStateWise = await axios.get(covidIndiaAPIBaseURL + 'v2/state_district_wise.json')
  const resStateTimeLine = await axios.get(covidIndiaAPIBaseURL + '/states_daily.json')
  const stateData = resStateWise.data.filter(item => item.state.toLowerCase() === name.toLowerCase())
  slug = slug.toLowerCase()
  const stateTimeLine = resStateTimeLine.data.states_daily.map((item) => ({
    count: item[slug],
    date: item.date,
    status: item.status
  }))
  dispatch({
    type: INDIAN_STATES,
    payload: {stateTimeLine, stateData}
  })
}
