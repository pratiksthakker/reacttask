import {default as homereducer} from "../components/home/reducer"
import {combineReducers} from "redux";

const reducers = combineReducers({
    homereducer: homereducer
});

export default reducers;
