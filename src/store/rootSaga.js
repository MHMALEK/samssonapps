import { all } from "redux-saga/effects";
import AppSaga from "./Modules/App/Sagas";
import UsersSaga from "./Modules/Users/Sagas";
import CardsSage from "./Modules/Cards/Sagas";

export default function* sagas() {
  yield all([...AppSaga, ...UsersSaga, ...CardsSage]);
}
