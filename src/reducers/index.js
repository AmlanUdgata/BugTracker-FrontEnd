import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import bugReducer from "./bugReducer";
import employeeReducer from "./employeeReducer";
import projectReducer from "./projectReducer";
export default combineReducers({
    errors : errorReducer,
    bugs : bugReducer,
    employee : employeeReducer,
    project : projectReducer
})