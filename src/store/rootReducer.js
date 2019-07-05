import { combineReducers } from "redux";
import UsersReducer from "./Modules/Users/Reducer";

export default combineReducers({ Users:UsersReducer });
