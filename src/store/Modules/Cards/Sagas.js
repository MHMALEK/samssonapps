import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { getCardsFromServer } from "./HttpRequests";
import { cardSelector } from "./Selector";
import {
  GET_CARD_ACTION,
  GET_CARD_STARTED,
  GET_CARD_SUCCESS,
  GET_CARD_FAILD
} from "./ActionTypes";

function* getCardsRequest(action) {
  // const responseReal = yield call(getGeneralSettings);
  const _response = require("../MockResponses/Cards-index.json");
  const response = cardSelector(_response);
  // yield put({
  //   type: GET_SETTING_STARTED
  // });
  // yield put({
  //   type: GET_SETTINGS_SUCCEED,
  //   payload: response
  // });
}

export default [takeLatest(GET_CARD_ACTION, getCardsRequest)];
