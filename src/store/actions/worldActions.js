import axios from "axios";

import {covidAllCountriesAPIBaseURL} from "../../constants/Api";
import {COUNTRY_DATA, WORLD_DATA} from "../../constants/action-types";
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

export const fetchCountryData = slug => async dispatch => {
  const confirmedURL = `${covidAllCountriesAPIBaseURL}total/dayone/country/${slug}/status/confirmed`;
  const recoveredURL = `${covidAllCountriesAPIBaseURL}total/dayone/country/${slug}/status/recovered`;
  const deathsURL = `${covidAllCountriesAPIBaseURL}total/dayone/country/${slug}/status/deaths`;
  const resConfirmed = await axios.get(confirmedURL)
  const resRecovered = await axios.get(recoveredURL)
  const resDeaths = await axios.get(deathsURL)

  const confirmed = resConfirmed.data.map(item => ({
    cases: item.Cases,
    date: new Date(item.Date)
  }))

  const recovered = resRecovered.data.map(item => ({
    cases: item.Cases,
    date: new Date(item.Date)
  }))

  const deaths = resDeaths.data.map(item => ({
    cases: item.Cases,
    date: new Date(item.Date)
  }))

  /*  const res = _.zipWith(resConfirmed.data, resRecovered.data, resDeaths.data, (a, b, c) => {
    if (a.Date === b.Date && b.Date === c.Date)
      return {
        [a.Status]: a.Cases,
        [b.Status]: b.Cases,
        [c.Status]: c.Cases,
        date: new Date(a.Date)
      }
  })
  console.log(res)*/

  dispatch({
    type: COUNTRY_DATA,
    payload: {confirmed, recovered, deaths}
  })
}
