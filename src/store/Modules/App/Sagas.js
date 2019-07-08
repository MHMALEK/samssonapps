import { put, takeEvery, all, call } from "redux-saga/effects";
import { getGeneralSettings } from "./HttpRequests";
import { START_APP } from "./ActionTypes";

function* startAppSaga(action) {
  try {
    const response = yield call(getGeneralSettings);
    console.log(response);
    yield put({
      type: "GET_SETTING_SUCCESS"
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: "GET_SETTING_FAILD"
    });
  }
}

export default [takeEvery(START_APP, startAppSaga)];
