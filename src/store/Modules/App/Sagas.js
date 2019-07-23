import { put, takeEvery, call, delay } from "redux-saga/effects";
import { push } from "connected-react-router";

import { getGeneralSettings } from "./HttpRequests";
import { configSelector } from "./Selector";
import customHistory from "../../../Router/CustomHistory";
import {
  START_APP,
  GET_SETTING_STARTED,
  GET_SETTINGS_SUCCEED,
  GET_SETTINGS_FAILD,
  NAVIGATION_ACTION
} from "./ActionTypes";

function* startAppSaga() {
  yield call(getConfig);
}

function* getConfig() {
  const _response = yield call(getGeneralSettings);
  const response = configSelector(_response.data.data);
  yield put({
    type: GET_SETTING_STARTED
  });
  yield put({
    type: GET_SETTINGS_SUCCEED,
    payload: response
  });
}

function* navigationActionSaga(action) {
  const path = action.payload.path;
  yield put(push(path));
}
export default [
  takeEvery(START_APP, startAppSaga),
  takeEvery(NAVIGATION_ACTION, navigationActionSaga)
];
