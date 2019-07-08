import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
import { getCardsFromServer } from "./HttpRequests";
import {
  GET_CARD_STARTED,
  GET_CARD_SUCCESS,
  GET_CARD_FAILD
} from "./ActionTypes";

function* getCardsRequest(action) {
  try {
    const response = yield call(getCardsFromServer);
    console.log(response);
    yield put({
      type: "GET_CARD_SUCCESS"
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: "GET_CARD_FAILD"
    });
  }
}

export default [takeLatest(GET_CARD_STARTED, getCardsRequest)];
