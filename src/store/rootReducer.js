import { combineReducers } from "redux";
import UsersReducer from "./Modules/Users/Reducer";
import AppReducer from "./Modules/App/Reducer";
import CardReducer from "./Modules/Cards/Reducer";

export default combineReducers({ Users: UsersReducer, App: AppReducer });
