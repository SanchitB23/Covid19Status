import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk"
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const store = process.env.NODE_ENV === 'production' ?
    createStore(rootReducer, applyMiddleware(ReduxThunk)) :
    createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
export default store
