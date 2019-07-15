import { combineReducers } from "redux";
import UsersReducer from "./Modules/Users/Reducer";
import AppReducer from "./Modules/App/Reducer";
import CardsReducer from "./Modules/Cards/Reducer";
import AuthSSOReducer from "./Modules/AuthSSO/Reducer";
import UIReducer from "./Modules/UI/Reducer";

export default combineReducers({
  Users: UsersReducer,
  App: AppReducer,
  Cards: CardsReducer,
  AuthSSO: AuthSSOReducer,
  UI: UIReducer
});
