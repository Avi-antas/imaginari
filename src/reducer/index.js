import counterReducer from "./counter";
import selfCountReducer from "./selfcounter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    selfCountReducer
})

export default allReducers