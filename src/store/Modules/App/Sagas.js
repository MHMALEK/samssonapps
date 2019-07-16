import { put, takeEvery, call, delay } from "redux-saga/effects";
import { getGeneralSettings } from "./HttpRequests";
import { configSelector } from "./Selector";
import {
  START_APP,
  GET_SETTING_STARTED,
  GET_SETTINGS_SUCCEED,
  GET_SETTINGS_FAILD
} from "./ActionTypes";

function* startAppSaga() {
  yield call(getConfig);
}

function* getConfig() {
  const _response = yield call(getGeneralSettings);
  const response = configSelector(_response);
  yield put({
    type: GET_SETTING_STARTED
  });
  yield put({
    type: GET_SETTINGS_SUCCEED,
    payload: response
  });
}

export default [takeEvery(START_APP, startAppSaga)];
