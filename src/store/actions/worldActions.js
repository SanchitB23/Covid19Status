import axios from "axios";
import {covidAllCountriesAPIBaseURL} from "../../constants/Api";
import {WORLD_DATA} from "../../constants/action-types";
import WorldDataJSON from "../../json/homeTable.json";

export const fetchWorldData = () => async dispatch => {
  const url = covidAllCountriesAPIBaseURL + 'summary';
  axios.get(url).then((res) => {
    dispatch({
      type: WORLD_DATA,
      payload: res.data
    })
  }).catch((error) => {
    console.log(error)
    dispatch({
      type: WORLD_DATA,
      payload: WorldDataJSON
    })
  })
}
