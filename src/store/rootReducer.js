import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import UsersReducer from "./Modules/Users/Reducer";
import AppReducer from "./Modules/App/Reducer";
import CardsReducer from "./Modules/Cards/Reducer";
import AuthSSOReducer from "./Modules/AuthSSO/Reducer";
import UIReducer from "./Modules/UI/Reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    Users: UsersReducer,
    App: AppReducer,
    Cards: CardsReducer,
    AuthSSO: AuthSSOReducer,
    UI: UIReducer
  });
