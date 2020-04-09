import axios from "axios";
import {covidAllCountriesAPIBaseURL} from "../../../constants/Api";
import {WORLD_DATA} from "../../../constants/action-types";
import WorldDataJSON from "../../../json/homeTable.json";

export const fetchWorldData = () => async dispatch => {
  const res = await axios.get(covidAllCountriesAPIBaseURL + 'summary')
  if (res.status === 200) {
    dispatch({
      type: WORLD_DATA,
      payload: res.data
    })
  } else dispatch({
    type: WORLD_DATA,
    payload: WorldDataJSON
  })
}
