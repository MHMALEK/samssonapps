import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { getCardsFromServer } from "./HttpRequests";
import { cardSelector } from "./Selector";
import {
  GET_CARDS_ACTION,
  GET_CARDS_STARTED,
  GET_CARDS_SUCCEED,
  GET_CARDS_FAILD,
  GO_TO_CARD_LIST_ACTION,
  GO_TO_CARD_LIST_SUCCEED
} from "./ActionTypes";

function* getCardsRequest() {
  // const responseReal = yield call(getGeneralSettings);
  const _response = require("../MockResponses/Cards-index.json");
  const response = cardSelector(_response);
  yield put({
    type: GET_CARDS_STARTED
  });
  yield put({
    type: GET_CARDS_SUCCEED,
    payload: response
  });
}

function* goToCardList() { 
  yield put({
    type: GO_TO_CARD_LIST_SUCCEED,
  });
}

export default [takeLatest(GET_CARDS_ACTION, getCardsRequest), takeEvery(GO_TO_CARD_LIST_ACTION, goToCardList)];
