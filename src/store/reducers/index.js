import {combineReducers} from "redux";
import worldData from "./worldReducer";
import indiaData from "./indiaReducer";

export default combineReducers({
  worldData,
  indiaData
})
