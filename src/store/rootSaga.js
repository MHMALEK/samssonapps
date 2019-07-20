import { all } from "redux-saga/effects";
import AppSaga from "./Modules/App/Sagas";
import UsersSaga from "./Modules/Users/Sagas";
import CardsSage from "./Modules/Cards/Sagas";
import AuthSSOSaga from "./Modules/AuthSSO/Sagas";
import UISagas from "./Modules/UI/Sagas";
export default function* sagas() {
  yield all([
    ...AppSaga,
    ...UsersSaga,
    ...CardsSage,
    ...AuthSSOSaga,
    ...UISagas
  ]);
}
