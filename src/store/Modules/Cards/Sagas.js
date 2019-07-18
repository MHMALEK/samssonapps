import { put, call, select, takeLatest, delay } from "redux-saga/effects";
import {
  getCardsFromServer,
  confirmInformationFromServer,
  submitInformationFromServer,
  getPurchasedCardDataFromServer
} from "./HttpRequests";
import { cardSelector, getCardDataSelector, getPurchasedCardId, createCardDataSelector } from "./Selector";
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
  SUBMIT_INFORMATION_FAILD,
  SUBMIT_INFORMATION_STARTED,
  GET_PURCHASED_CARD_DATA_ACTION,
  GET_PURCHASED_CARD_DATA_STARTED,
  GET_PURCHASED_CARD_DATA_SUCCESS,
  GET_PURCHASED_CARD_DATA_FAILD

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


function* submitInformationSaga(data) {
  const cardData = yield select(getCardDataSelector);
  const params = {
    name: data.payload.name,
    last_name: data.payload.last_name,
    id_certificate: data.payload.id_certificate,
    national_code: data.payload.national_code,
    cell_phone: data.payload.cell_phone,
    nationality_id: 313123313,
    card_id: cardData.card_id,
    education_system_id: cardData.education_system_id,
    teaching_institution_id: cardData.teaching_institution_id
  }
  yield put({
    type: SUBMIT_INFORMATION_STARTED,
  });
  try {
    const response = yield call(submitInformationFromServer, params);
    const payload = createCardDataSelector(response.data.data);
    yield put({
      type: SUBMIT_INFORMATION_SUCCEED,
      payload
    });
  } catch {
    yield put({
      type: SUBMIT_INFORMATION_FAILD
    });
  }
}


function* confirmInformationSaga() {
  yield put({
    type: CONFIRM_CARD_STARTED,
  });
  const cardId = yield select(getPurchasedCardId);

  try {
    const response = yield call(confirmInformationFromServer, {card_purchased_id: cardId});
    const payload = response.data.data.ipg_url;
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
function* getPurchasedCardDataSaga(transactionId) {
  yield put({
    type:GET_PURCHASED_CARD_DATA_STARTED
  })
  try {
    const response = yield call(getPurchasedCardDataFromServer, {transaction_id	: transactionId});
    const payload = response.data.data;
    yield put({
      type: GET_PURCHASED_CARD_DATA_SUCCESS,
      payload
    });
  } catch {
    yield put({
      type: GET_PURCHASED_CARD_DATA_FAILD
    });
  }
}

export default [
  takeLatest(GET_CARDS_ACTION, getCardsRequest),
  takeLatest(GO_TO_CARD_LIST_ACTION, goToCardList),
  takeLatest(SUBMIT_INFORMATION_ACTION, submitInformationSaga),
  takeLatest(CONFIRM_INFORMATION_ACTION, confirmInformationSaga),
  takeLatest(GET_PURCHASED_CARD_DATA_ACTION, getPurchasedCardDataSaga)
];
