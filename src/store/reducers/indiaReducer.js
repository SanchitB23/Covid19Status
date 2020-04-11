import {INDIA_DATA} from "../../constants/action-types";

const initialState = {
  statewise: [],
  timeseries: []
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case INDIA_DATA:
      return {
        statewise: actions.payload.statewise,
        timeseries: actions.payload.timeseries
      }
    default:
      return state
  }
}
