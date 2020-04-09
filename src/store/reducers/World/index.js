import {WORLD_DATA} from "../../../constants/action-types";

const initialState = {
  global: {},
  countries: [],
  lastUpdated: ''
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case WORLD_DATA:
      return {
        global: actions.payload.Global,
        countries: actions.payload.Countries,
        lastUpdated: actions.payload.Date
      }
    default:
      return state
  }
}
