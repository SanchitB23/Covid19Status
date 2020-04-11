import axios from "axios";
import {covidIndiaAPIBaseURL} from "../../constants/Api";
import {INDIA_DATA} from "../../constants/action-types";
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
