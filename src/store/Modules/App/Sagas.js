import { put, takeEvery, call, delay } from "redux-saga/effects";
import { getGeneralSettings } from "./HttpRequests";
import { configSelector } from "./Selector";
import {
  START_APP,
  GET_SETTING_STARTED,
  GET_SETTINGS_SUCCEED,
  GET_SETTINGS_FAILD
} from "./ActionTypes";

function* startAppSaga(action) {
  yield call(getConfig);
}

function* getConfig() {
  const _response = yield call(getGeneralSettings);
  // const _response = require("../MockResponses/generalLight.json");
  console.log(_response)
  const response = configSelector(_response);
  yield delay(100);
  yield put({
    type: GET_SETTING_STARTED
  });
  yield put({
    type: GET_SETTINGS_SUCCEED,
    payload: response
  });
}

export default [takeEvery(START_APP, startAppSaga)];
