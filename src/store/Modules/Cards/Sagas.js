import { put, call, select, takeLatest } from "redux-saga/effects";
import {
  getCardsFromServer,
  confirmInformationFromServer
} from "./HttpRequests";
import { cardSelector, getCardDataSelector } from "./Selector";
import {
  GET_CARDS_ACTION,
  GET_CARDS_STARTED,
  GET_CARDS_SUCCEED,
  GET_CARDS_FAILD,
  GO_TO_CARD_LIST_ACTION,
  GO_TO_CARD_LIST_SUCCEED,
  CONFIRM_INFORMATION_ACTION,
  CONFIRM_CARD_STARTED,
  CONFIRM_CARD_SUCCEED,
  CONFIRM_CARD_FAILD,
  SUBMIT_INFORMATION_ACTION,
  SUBMIT_INFORMATION_SUCCEED,
  SUBMIT_INFORMATION_FAILD
} from "./ActionTypes";

function* getCardsRequest() {
  const _response = yield call(getCardsFromServer);
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
    type: GO_TO_CARD_LIST_SUCCEED
  });
}

function* confirmInformationSaga() {
  const cardData = yield select(getCardDataSelector);
  try {
    const _response = yield call(confirmInformationFromServer, cardData);
    const payload = _response.data.data;
    yield put({
      type: CONFIRM_CARD_STARTED,
      payload
    });
    yield put({
      type: CONFIRM_CARD_SUCCEED,
      payload
    });
  } catch {
    yield put({
      type: CONFIRM_CARD_FAILD
    });
  }
}

function* submitInformationSaga() {}

export default [
  takeLatest(GET_CARDS_ACTION, getCardsRequest),
  takeLatest(GO_TO_CARD_LIST_ACTION, goToCardList),
  takeLatest(SUBMIT_INFORMATION_ACTION, submitInformationSaga),
  takeLatest(CONFIRM_INFORMATION_ACTION, confirmInformationSaga)
];
