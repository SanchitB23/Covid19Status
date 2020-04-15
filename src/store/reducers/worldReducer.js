import {COUNTRY_DATA, WORLD_DATA} from "../../constants/action-types";

const initialState = {
  home: {
    global: {},
    countries: [],
    lastUpdated: ''
  },
  country: {
    timeline: {}
  }
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case WORLD_DATA:
      return {
        ...state,
        home: {
          global: actions.payload.Global,
          countries: actions.payload.Countries,
          lastUpdated: actions.payload.Date
        }
      }
    case COUNTRY_DATA:
      return {
        ...state,
        country: {
          timeline: actions.payload
        }
      }
    default:
      return state
  }
}
