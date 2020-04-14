import {INDIA_DATA, INDIAN_STATES} from "../../constants/action-types";

const initialState = {
  home: {
    statewise: [],
    timeseries: []
  },
  statewise: {
    stateTimeLine: [],
    stateData: []
  }
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case INDIA_DATA:
      return {
        ...state,
        home: actions.payload
      }
    case INDIAN_STATES:
      return {
        ...state,
        statewise: actions.payload
      }
    default:
      return state
  }
}
